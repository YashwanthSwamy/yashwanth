import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Islands';
import Sky from '../models/sky';

{/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
    POPUP
</div> */}

const Home = () => {

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

  const  [islandPosition, islandScale, islandRotation] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
        <Canvas 
        className="w-full h-screen bg-transparent"
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
                <Sky />
                <Island
                position= {islandPosition}
                scale= {islandScale}
                rotation = {islandRotation}
                />
            </Suspense>
        </Canvas>
    </section>
  )
}

export default Home