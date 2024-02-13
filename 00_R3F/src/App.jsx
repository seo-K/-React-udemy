import "./App.css";
import { Canvas } from "@react-three/fiber";
// import MyElement3D from "./MyElement3D";
import MyElement3DCamera from "./MyElement3D_camera";
import GeometryContent from "./GeometryContent";
import { useState } from "react";
import LightContent from "./LightContent";
import ModelsContent from "./ModelsContent";
import PostprocessingContent from "./PostprocessingContent";

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

  const DreiMeshList = [
    "MeshReflectorMaterial",
    "MeshRefractionMaterial",
    "MeshTransmissionMaterial",
    "MeshWobbleMaterial",
    "MeshDistortMaterial",
    "shaderMaterial",
  ];
  const LightList = [
    "null",
    "LightAmbientLight",
    "LightDirectionalLight",
    "LightHemisphereLight",
    "LightSpotLight",
    "LightPointLight",
    "LightRectAreaLight",
    "LightEnvironment",
  ];

  const PostprocessingList = ["null", "색상", "각도, 크기"];

  const [activeGeometry, setActiveGeometry] = useState(GeometryList[0]);
  const [activeMesh, setActiveMesh] = useState(MeshList[0]);
  const [activeDreiMesh, setActiveDreiMesh] = useState(DreiMeshList[0]);
  const [activeLight, setActiveLight] = useState(LightList[0]);
  const [postprocessing, setPostprocessing] = useState(false);

  // 각 체크박스의 체크 상태를 저장하는 객체
  const [checkboxState, setCheckboxState] = useState({
    modelChecked: false,
    // postprocessingChecked: false,
  });

  // 각 체크박스를 토글하는 함수
  const ToggleCheckbox = (checkboxName) => {
    // isChecked의 값을 반전시켜서 업데이트
    setCheckboxState((prevCheckStates) => ({
      ...prevCheckStates,
      [checkboxName]: !prevCheckStates[checkboxName],
    }));
  };

  console.log(checkboxState.modelChecked);
  console.log(checkboxState.postprocessingChecked);
  // 각 탭의 열림/닫힘 상태를 저장하는 객체
  const [tabStates, setTabStates] = useState({
    geometryTabOpen: false,
    meshTabOpen: false,
    dreiMeshTabOpen: false,
    lightTabOpen: false,
    postprocessingTabOpen: false,
  });

  // 각 탭을 토글하는 함수
  const toggleTab = (tabName) => {
    setTabStates((prevTabStates) => ({
      ...prevTabStates,
      [tabName]: !prevTabStates[tabName],
    }));
  };

  // 초기화
  const resetAll = () => {
    setActiveGeometry(GeometryList[0]);
    setActiveMesh(MeshList[0]);
    setActiveDreiMesh(DreiMeshList[0]);
    setActiveLight(LightList[0]);
    setPostprocessing(PostprocessingList[0]);
    // setModelChecked(false);
  };

  function Content() {
    if (activeMesh == "MeshDepthMaterial") {
      return (
        <Canvas camera={{ near: 3.5, far: 6 }}>
          <GeometryContent selectedGeometry={activeGeometry} selectedMesh={activeMesh} selectedDreiMesh={activeDreiMesh} />
        </Canvas>
      );
    } else if (activeLight !== LightList[0]) {
      return (
        // 빛, 광원
        <Canvas
          camera={{
            fov: 75,
            position: [7, 7, 0],
          }}
          className="light-canvas"
        >
          <LightContent selectedLight={activeLight} />
        </Canvas>
      );
    } else if (checkboxState.modelChecked === true) {
      return (
        // 빛, 광원
        <Canvas
          camera={{
            near: 1,
            fov: 100,
            position: [7, 7, 0],
          }}
        >
          <ModelsContent />
        </Canvas>
      );
    } else if (postprocessing !== null) {
      return (
        // 빛, 광원
        <Canvas
          shadows
          camera={{
            position: [7, 7, 0],
          }}
        >
          <PostprocessingContent selectedPostprocessing={postprocessing} />
        </Canvas>
      );
    } else {
      return (
        <Canvas>
          <GeometryContent selectedGeometry={activeGeometry} selectedMesh={activeMesh} selectedDreiMesh={activeDreiMesh} />
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
                  <button type="button" key={item + "_tab"} onClick={() => setActiveGeometry(item)} className={activeGeometry === item ? "active" : undefined}>
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
                  <button
                    type="button"
                    key={item + "_tab"}
                    onClick={() => setActiveMesh(item)}
                    className={activeMesh === item ? "active" : undefined}
                    value={item}
                  >
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
              {DreiMeshList.map((item) => {
                return (
                  <button
                    type="button"
                    key={item + "_tab"}
                    onClick={() => setActiveDreiMesh(item)}
                    className={activeDreiMesh === item ? "active" : undefined}
                    value={item}
                  >
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
                  <button
                    type="button"
                    key={item + "_tab"}
                    onClick={() => setActiveLight(item)}
                    className={activeLight === item ? "active" : undefined}
                    value={item}
                  >
                    {item}
                  </button>
                );
              })}
            </nav>
          )}
        </li>
        <li>
          <h2 className="checkbox-button">
            <label htmlFor="models">모델 / 애니메이션</label>
            <input
              id="models"
              type="checkbox"
              checked={checkboxState.modelChecked} // 체크 여부는 isChecked 변수에 의해 제어됨
              onChange={() => ToggleCheckbox("modelChecked")} // 체크박스 상태 변경 시 호출되는 함수
            />
          </h2>
        </li>
        {/* <li>
          <h2 className="checkbox-button">
            <label htmlFor="postprocessing">후처리</label>
            <input id="postprocessing" type="checkbox" checked={checkboxState.postprocessingChecked} onChange={() => ToggleCheckbox("postprocessingChecked")} />
          </h2>
        </li> */}
        <li>
          <h2 className={tabStates.postprocessingTabOpen ? "tab-title open" : "tab-title"}>
            <button type="button" onClick={() => toggleTab("postprocessingTabOpen")}>
              후처리
            </button>
          </h2>
          {tabStates.postprocessingTabOpen && (
            <nav className="tab">
              {PostprocessingList.map((item) => {
                return (
                  <button
                    type="button"
                    key={item + "_tab"}
                    onClick={() => setActiveDreiMesh(item)}
                    className={activeDreiMesh === item ? "active" : undefined}
                    value={item}
                  >
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
