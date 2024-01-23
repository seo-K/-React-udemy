import "./App.css";
import {Canvas} from "@react-three/fiber";
import MyElement3D from "./MyElement3D";
import GeometryContent from "./GeometryContent.jsx";
import {useState} from "react";

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

  return (
    <>
      <nav className="tab">
        {GeometryList.map((item) => {
          return (
            <button type="button" key={item} onClick={() => setActiveGeometryTab(item)} className={activeGeometryTab === item ? "active" : undefined}>
              {item}
            </button>
          );
        })}
      </nav>
      <nav className="tab">
        {MeshList.map((item) => {
          return (
            <button type="button" key={item} onClick={() => setActiveMeshTab(item)} className={activeMeshTab === item ? "active" : undefined} value={item}>
              {item}
            </button>
          );
        })}
      </nav>

      <Canvas>
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
