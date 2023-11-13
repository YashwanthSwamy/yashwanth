import { useGLTF } from '@react-three/drei';
import BirdScene from '../assets/3d/bird.glb';


const Bird = () => {
    const bird = useGLTF(BirdScene)
    return (
        <mesh>
            <primitive object={bird.scene} />
        </mesh>
    )
}

export default Bird