import { useGLTF } from '@react-three/drei';
import PlaneScene from '../assets/3d/plane.glb';


const Plane = () => {
    const plane = useGLTF(PlaneScene);
    return (
        <mesh>
            <primitive object={plane.scene} />
        </mesh>
    )
}

export default Plane