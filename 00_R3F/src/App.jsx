import "./App.css";
import { Canvas } from "@react-three/fiber";
import MyElement3D from "./MyElement3D";

function App() {
  return (
    <>
      <Canvas>
        <MyElement3D />
      </Canvas>
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
