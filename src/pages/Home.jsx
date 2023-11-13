import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island';
import Sky from '../models/sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';

{/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
    POPUP
</div> */}

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);

  const adjustIslandForScreenSize = () => {
    let  screenScale = [];
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if(window.innerWidth < 768){
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenPosition, screenScale, rotation];
  }

  const adjustPlaneForScreenSize = () => {
    let  planePosition, planeScale;

    if(window.innerWidth < 768){
      planeScale = [1.5, 1.5, 1.5];
      planePosition = [0, -1.5, 0];
    } else {
      planeScale = [3, 3, 3];
      planePosition = [0, -4, -4];
    }

    return [planePosition, planeScale];
  }

  const  [islandPosition, islandScale, islandRotation] = adjustIslandForScreenSize();
  const [planePosition, planeScale] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
        <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'} `}
        camera={{near: 0.1, far: 1000}}
        >
            <Suspense fallback={<Loader/>}>
                <directionalLight 
                position={[1,1,1]}
                intensity={1.5}
                /> {/* like sun  */}
                <ambientLight intensity={1}/>  {/* no shadow and adds light to all  */}
                {/* <pointLight/>  */} {/* emits light in all directions similar to ambientLight but in an angle  */}
                {/* <spotLight/> similar ro pointLight but in shape of a cone*/}
                <hemisphereLight 
                skyColor='#1be1ff' 
                groundColor='#000000' 
                intensity={0.5}
                />  {/* iluiminates with a gradient like sky  adds detail to the scene */}
                <Sky isRotating= {isRotating}/>
                <Bird isRotating= {isRotating}/>
                <Island
                position= {islandPosition}
                scale= {islandScale}
                rotation = {islandRotation}
                isRotating= {isRotating}
                setIsRotating={setIsRotating}
                setCurrentStage={setCurrentStage}
                />
                <Plane
                planePosition={planePosition}
                planeScale={planeScale}
                isRotating={isRotating}
                rotation={[0,20,0]}
                />
            </Suspense>
        </Canvas>
    </section>
  )
}

export default Home