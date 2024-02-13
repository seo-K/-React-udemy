import "./App.css";
import { Canvas } from "@react-three/fiber";
// import MyElement3D from "./MyElement3D";
import MyElement3DCamera from "./MyElement3D_camera";
import GeometryContent from "./GeometryContent";
import { useState } from "react";
import LightContent from "./LightContent";

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
  const LightList = ["LightAmbientLight", "LightDirectionalLight", "LightHemisphereLight", "LightSpotLight", "LightPointLight", "LightRectAreaLight", "LightEnvironment"];

  const [activeGeometryTab, setActiveGeometryTab] = useState(GeometryList[0]);
  const [activeMeshTab, setActiveMeshTab] = useState(MeshList[0]);
  const [activeDreiMeshTab, setActiveDreiMeshTab] = useState(dreiMeshList[0]);
  const [activeLightTab, setActiveLightTab] = useState(LightList[0]);

  // 각 탭의 열림/닫힘 상태를 저장하는 객체
  const [tabStates, setTabStates] = useState({
    geometryTabOpen: false,
    meshTabOpen: false,
    dreiMeshTabOpen: false,
    lightTabOpen: false,
  });

  // 각 탭을 토글하는 함수
  const toggleTab = (tabName) => {
    setTabStates((prevTabStates) => ({
      ...prevTabStates,
      [tabName]: !prevTabStates[tabName],
    }));
  };

  const resetAll = () => {
    setActiveGeometryTab(GeometryList[0]);
    setActiveMeshTab(MeshList[0]);
    setActiveDreiMeshTab(dreiMeshList[0]);
    setActiveLightTab(LightList[0]);
  };

  function Content() {
    if (activeMeshTab == "MeshDepthMaterial") {
      return (
        <Canvas camera={{ near: 3.5, far: 6 }}>
          <GeometryContent selectedGeometry={activeGeometryTab} selectedMesh={activeMeshTab} selectedDreiMesh={activeDreiMeshTab} />
        </Canvas>
      );
    } else if (activeLightTab !== LightList[0]) {
      return (
        // 빛, 광원
        <Canvas
          camera={{
            fov: 75,
            position: [7, 7, 0],
          }}
          className="light-canvas"
        >
          <LightContent selectedLight={activeLightTab} />
        </Canvas>
      );
    } else {
      return (
        <Canvas>
          <GeometryContent selectedGeometry={activeGeometryTab} selectedMesh={activeMeshTab} selectedDreiMesh={activeDreiMeshTab} />
        </Canvas>
      );
    }
  }

  return (
    <>
      <ul className="menu">
        <li>
          <h2>
            <button type="button" className="reset-button" onClick={() => resetAll()}>
              초기화
            </button>
          </h2>
        </li>
        <li>
          <h2 className={tabStates.geometryTabOpen ? "tab-title open" : "tab-title"}>
            <button type="button" onClick={() => toggleTab("geometryTabOpen")}>
              모양
            </button>
          </h2>
          {tabStates.geometryTabOpen && (
            <nav className="tab">
              {GeometryList.map((item) => {
                return (
                  <button type="button" key={item + "_tab"} onClick={() => setActiveGeometryTab(item)} className={activeGeometryTab === item ? "active" : undefined}>
                    {item}
                  </button>
                );
              })}
            </nav>
          )}
        </li>
        <li>
          <h2 className={tabStates.meshTabOpen ? "tab-title open" : "tab-title"}>
            <button type="button" onClick={() => toggleTab("meshTabOpen")}>
              소재
            </button>
          </h2>
          {tabStates.meshTabOpen && (
            <nav className="tab">
              {MeshList.map((item) => {
                return (
                  <button type="button" key={item + "_tab"} onClick={() => setActiveMeshTab(item)} className={activeMeshTab === item ? "active" : undefined} value={item}>
                    {item}
                  </button>
                );
              })}
            </nav>
          )}
        </li>
        <li>
          <h2 className={tabStates.dreiMeshTabOpen ? "tab-title open" : "tab-title"}>
            <button type="button" onClick={() => toggleTab("dreiMeshTabOpen")}>
              Drei 소재
            </button>
          </h2>
          {tabStates.dreiMeshTabOpen && (
            <nav className="tab">
              {dreiMeshList.map((item) => {
                return (
                  <button type="button" key={item + "_tab"} onClick={() => setActiveDreiMeshTab(item)} className={activeDreiMeshTab === item ? "active" : undefined} value={item}>
                    {item}
                  </button>
                );
              })}
            </nav>
          )}
        </li>
        <li>
          <h2 className={tabStates.lightTabOpen ? "tab-title open" : "tab-title"}>
            <button type="button" onClick={() => toggleTab("lightTabOpen")}>
              광원/빛
            </button>
          </h2>
          {tabStates.lightTabOpen && (
            <nav className="tab">
              {LightList.map((item) => {
                return (
                  <button type="button" key={item + "_tab"} onClick={() => setActiveLightTab(item)} className={activeLightTab === item ? "active" : undefined} value={item}>
                    {item}
                  </button>
                );
              })}
            </nav>
          )}
        </li>
      </ul>
      {/* 카메라로부터 거리가 3.5인 픽셀은 그 값을 0으로 할당하고, 카메라로부터 거리가 6인치점은 2를 할당받아서 만들어진 재질 */}
      {Content()}
      {/*
    
  
      // 카메라
      <Canvas
        orthographic
        camera={{
          near: 0.1,
          far: 20,
          zoom: 100,
          position: [0, 7, 7],
        }}
      >
        <MyElement3DCamera />
      </Canvas>

      // 그림자
      <Canvas
        // shadows // 그림자 추가
        shadows="variance" // 그림자 추가
        camera={{
          near: 1,
          far: 20,
          position: [0, 10, 10],
          // position: [7, 7, 0],
        }}
      >
        <MyElement3DShadow />
      </Canvas>

      <Canvas>
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
