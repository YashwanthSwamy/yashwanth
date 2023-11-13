import { useGLTF } from '@react-three/drei';
import BirdScene from '../assets/3d/bird.glb';


const Bird = () => {

    const {scene, animations} = useGLTF(BirdScene)
    return (
        <mesh position={[-5, 2, 1]} scale={[0.002, 0.002, 0.002]}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Bird