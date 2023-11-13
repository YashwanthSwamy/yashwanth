// mesh creates premitive Element
import { useGLTF } from '@react-three/drei';
import skyScene from '../assets/3d/sky.glb';

const Sky = () => {
    const sky = useGLTF(skyScene)
    return (
        <mesh>
            <primitive object={sky.scene}></primitive>
        </mesh>
    )
}

export default Sky;