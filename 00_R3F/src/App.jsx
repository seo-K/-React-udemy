import "./App.css";
import { Canvas } from "@react-three/fiber";
// import MyElement3D from "./MyElement3D";
import MyElement3D_light from "./MyElement3D_light";
import MyElement3DCamera from "./MyElement3D_camera";
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
    "MeshMatcapMaterial",
    "MeshNormalMaterial",
    "MeshToonMaterial",
  ];

  const dreiMeshList = ["MeshReflectorMaterial", "MeshRefractionMaterial", "MeshTransmissionMaterial", "MeshWobbleMaterial", "MeshDistortMaterial", "shaderMaterial"];

  const [activeGeometryTab, setActiveGeometryTab] = useState(GeometryList[0]);
  const [activeMeshTab, setActiveMeshTab] = useState(MeshList[0]);
  const [activeDreiMeshTab, setActiveDreiMeshTab] = useState(dreiMeshList[0]);

  return (
    <>
      <div className="menu">
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
              <button type="button" key={item + "_tab"} onClick={() => setActiveMeshTab(item)} className={activeMeshTab === item ? "active" : undefined} value={item}>
                {item}
              </button>
            );
          })}
        </nav>
        <nav className="tab">
          {dreiMeshList.map((item) => {
            return (
              <button type="button" key={item + "_tab"} onClick={() => setActiveDreiMeshTab(item)} className={activeDreiMeshTab === item ? "active" : undefined} value={item}>
                {item}
              </button>
            );
          })}
        </nav>
      </div>
      {/* 카메라로부터 거리가 3.5인 픽셀은 그 값을 0으로 할당하고, 카메라로부터 거리가 6인치점은 2를 할당받아서 만들어진 재질 */}
      {/* {activeMeshTab == "MeshDepthMaterial" ? (
        <Canvas camera={{ near: 3.5, far: 6 }}>
          <GeometryContent selectedGeometry={activeGeometryTab} selectedMesh={activeMeshTab} selectedDreiMesh={activeDreiMeshTab} />
        </Canvas>
      ) : (
        <Canvas>
          <GeometryContent selectedGeometry={activeGeometryTab} selectedMesh={activeMeshTab} selectedDreiMesh={activeDreiMeshTab} />
        </Canvas>
      )} */}

      {/* <Canvas
        camera={{
          fov: 75,
          position: [7, 7, 0],
        }}
      >
        <MyElement3D />
      </Canvas>
      <Canvas
        camera={{
          fov: 75,
          position: [7, 7, 0],
        }}
      >
        <MyElement3D_light />
      </Canvas> */}
      <Canvas>
        <MyElement3DCamera />
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
