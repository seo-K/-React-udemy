import { Box, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import React from "react";

// geometry
import GeomBox from "./geometry/GeomBox";
import GeomCylinder from "./geometry/GeomCylinder";
import GeomSphere from "./geometry/GeomSphere";
import MatrBasic from "./mesh/MatrBasic";
import MatrLambert from "./mesh/MatrLambert";
import MatrPhong from "./mesh/MatrPhong";
import MatrStandard from "./mesh/MatrStandard";
import MatrPhysical from "./mesh/MatrPhysical";
import MatrDepth from "./mesh/MatrDepth";
import MatrNormal from "./mesh/MatrNormal";

function MyBox(props) {
  const geom = new THREE.BoxGeometry();

  return <mesh {...props} geometry={geom}></mesh>;
}

function GeometryContent({ selectedGeometry, selectedMesh }) {
  // 글자 변환 함수
  function lowerCaseFirstText(str) {
    let result = str[0].toLowerCase() + str.slice(1, str.length);
    return result;
  }

  const GeometryComponents = [
    {
      geometry: "boxGeometry",
      component: <GeomBox />,
    },
    {
      geometry: "cylinderGeometry",
      component: <GeomCylinder />,
    },
    {
      geometry: "sphereGeometry",
      component: <GeomSphere />,
    },
    {
      geometry: "sphereGeometry",
      component: <GeomSphere />,
    },
  ];

  let meshColor = "#1abc9c";

  const MeshComponents = [
    {
      mesh: "meshBasicMaterial",
      component: <MatrBasic meshColor={meshColor} />,
    },
    {
      mesh: "meshLambertMaterial",
      component: <MatrLambert meshColor={meshColor} />,
    },
    {
      mesh: "meshPhongMaterial",
      component: <MatrPhong meshColor={meshColor} />,
    },
    {
      mesh: "meshStandardMaterial",
      component: <MatrStandard meshColor={meshColor} />,
    },
    {
      mesh: "meshPhysicalMaterial",
      component: <MatrPhysical meshColor={meshColor} />,
    },
    {
      mesh: "meshDepthMaterial",
      component: <MatrDepth meshColor={meshColor} />,
    },
    {
      mesh: "meshNormalMaterial",
      component: <MatrNormal />,
    },
    // {
    //   mesh: "meshToonMaterial",
    //   component: <MatrToon/>,
    // },
  ];

  const Geometry = lowerCaseFirstText(selectedGeometry);
  const Mesh = lowerCaseFirstText(selectedMesh);

  const globalGeometry = new THREE[selectedGeometry](); // const globalGeometry = new THREE.BoxGeometry();
  const globalMaterial = new THREE[selectedMesh](); // const globalMaterial = new THREE.MeshBasicMaterial();

  // const aa = selectedGeometry;
  // const ResultComponent = aa.replace("Geometry", "");

  // 재질
  // <meshStandardMaterial color="red" opacity={0.5} transparent={true} />

  return (
    <>
      {/* 마우스&휠 컨트롤러 */}
      <OrbitControls />

      {/* 카메라와 광원 */}
      <ambientLight intensity={0.2} />
      {/* <directionalLight position={[2, 2, 3]} intensity={0.5} /> */}
      <directionalLight position={[2, 2, 3]} />
      <directionalLight position={[1, 2, 8]} intensity={0.5} />

      {/* 3D 객체 렌더링 방식 */}
      {/* <mesh position={[-2, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color={meshColor} />
      </mesh> */}

      {/* 1. 기본 */}
      <mesh position={[-2, 0, 0]}>
        {/* {GeometryComponents.map((item, index) => (Geometry === item.geometry ? item.component : <Geometry key={item.geometry + "_geom_content" + index} />))}
        {MeshComponents.map((item, index) => (Mesh === item.mesh ? item.component : <Mesh key={item.mesh + "_mesh_content" + index} color={meshColor} />))} */}
        {GeometryComponents.map((item, index) =>
          Geometry === item.geometry ? React.cloneElement(item.component, { key: item.geometry + "_geom_content" }) : null
        )}
        {MeshComponents.map((item, index) =>
          Mesh === item.mesh ? React.cloneElement(item.component, { key: item.mesh + "_mesh_content", color: meshColor }) : null
        )}
      </mesh>

      {/* 2. THREE 내장함수 */}
      {/* <Box position={[0, 0, 0]}> */}
      <Box>
        <Mesh color="#8e44ad" />
      </Box>

      {/* 3. 메쉬로 렌더링 */}
      <mesh position={[2, 0, 0]} geometry={globalGeometry} material={globalMaterial} />

      {/* 4. 컴포넌트화 */}
      <MyBox position={[4, 0, 0]}>
        <Mesh color="#e74c3c" />
      </MyBox>
    </>
  );
}

export default GeometryContent;
