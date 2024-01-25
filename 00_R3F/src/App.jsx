import "./App.css";
import { Canvas } from "@react-three/fiber";
import MyElement3D from "./MyElement3D";
import GeometryContent from "./GeometryContent.jsx";
import { useState } from "react";

function App() {
  const GeometryList = [
    "BoxGeometry",
    "CircleGeometry",
    "ConeGeometry",
    "CylinderGeometry",
    "SphereGeometry",
    "RingGeometry",
    "PlaneGeometry",
    "TorusGeometry",
    "TorusKnotGeometry",
    "TetrahedronGeometry",
    "PolyhedronGeometry",
    "IcosahedronGeometry",
    "OctahedronGeometry",
    "DodecahedronGeometry",
    "ExtrudeGeometry",
    "LatheGeometry",
    "CapsuleGeometry",
    "ShapeGeometry",
  ];
  const MeshList = [
    "MeshBasicMaterial",
    "MeshLambertMaterial",
    "MeshPhongMaterial",
    "MeshStandardMaterial",
    "MeshPhysicalMaterial",
    "MeshDepthMaterial",
    "MeshNormalMaterial",
    "MeshToonMaterial",
  ];

  const [activeGeometryTab, setActiveGeometryTab] = useState(GeometryList[0]);
  const [activeMeshTab, setActiveMeshTab] = useState(MeshList[0]);

  console.log(activeMeshTab);
  return (
    <>
      <nav className="tab">
        {GeometryList.map((item) => {
          return (
            <button type="button" key={item + "_tab"} onClick={() => setActiveGeometryTab(item)} className={activeGeometryTab === item ? "active" : undefined}>
              {item}
            </button>
          );
        })}
      </nav>
      <nav className="tab">
        {MeshList.map((item) => {
          return (
            <button
              type="button"
              key={item + "_tab"}
              onClick={() => setActiveMeshTab(item)}
              className={activeMeshTab === item ? "active" : undefined}
              value={item}
            >
              {item}
            </button>
          );
        })}
      </nav>

      {/* 카메라로부터 거리가 3.5인 픽셀은 그 값을 0으로 할당하고, 카메라로부터 거리가 6인치점은 2를 할당받아서 만들어진 재질 */}
      <Canvas camera={{ near: 3.5, far: 6 }}>
        {/* <Canvas camera={toString(activeMeshTab) === "MeshDepthMaterial" ? { near: 3.5, far: 6 } : {}}> */}
        <GeometryContent selectedGeometry={activeGeometryTab} selectedMesh={activeMeshTab} />
      </Canvas>

      {/* <Canvas>
        <MyElement3D />
      </Canvas>
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas> */}
    </>
  );
}

export default App;
