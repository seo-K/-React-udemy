import "./App.css";
import { Canvas } from "@react-three/fiber";
import MyElement3D from "./MyElement3D";
import { useState } from "react";

const 재질 = [
  "MeshBasicMaterial",
  "MeshLambertMaterial",
  "MeshPhongMaterial",
  "MeshStandardMaterial",
  "MeshPhysicalMaterial",
  "MeshDepthMaterial",
  "MeshNormalMaterial",
  "MeshToonMaterial",
];

// const [activeTab, setActiveTab] = useRef(0);
const [activeTab, setActiveTab] = useState(0);

// const tabHandler = (index) => {
//   setActiveTab(index);
// };

function App() {
  return (
    <>
      <nav className="tab">
        {재질.map((item, index) => {
          return (
            <button type="button" key={index} onClick={(e) => console.log(index)}>
              {item}
            </button>
          );
        })}
      </nav>

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
