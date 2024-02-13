import { Box, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import React from "react";

// geometry
import GeomBox from "./geometry/GeomBox";
import GeomCylinder from "./geometry/GeomCylinder";
import GeomRing from "./geometry/GeomRing";
import GeomSphere from "./geometry/GeomSphere";
import GeoTours from "./geometry/GeoTours";
// mesh
import MatrBasic from "./mesh/MatrBasic";
import MatrLambert from "./mesh/MatrLambert";
import MatrPhong from "./mesh/MatrPhong";
import MatrStandard from "./mesh/MatrStandard";
import MatrPhysical from "./mesh/MatrPhysical";
import MatrDepth from "./mesh/MatrDepth";
import MatrMatcap from "./mesh/MatrMatcap";
import MatrNormal from "./mesh/MatrNormal";
import MatrToon from "./mesh/MatrToon";
import MatrReflector from "./mesh/MatrReflector";
import MatrRefraction from "./mesh/MatrRefraction";
import MatrTransmission from "./mesh/MatrTransmission";
import MatrWobble from "./mesh/MatrWobble";
import MatrDistort from "./mesh/MatrDistort";
import MatrShader from "./mesh/MatrShader";

function MyBox(props) {
  const geom = new THREE.BoxGeometry();

  return <mesh {...props} geometry={geom}></mesh>;
}

function GeometryContent({ selectedGeometry, selectedMesh, selectedDreiMesh }) {
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
      geometry: "ringGeometry",
      component: <GeomRing />,
    },
    {
      geometry: "torusGeometry",
      component: <GeoTours />,
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
      mesh: "meshMatcapMaterial",
      component: <MatrMatcap />,
    },
    {
      mesh: "meshNormalMaterial",
      component: <MatrNormal />,
    },
    {
      mesh: "meshToonMaterial",
      component: <MatrToon />,
    },
  ];

  const dreiMeshComponents = [
    {
      mesh: "meshReflectorMaterial",
      component: <MatrReflector />,
    },
    {
      mesh: "meshRefractionMaterial",
      component: <MatrRefraction />,
    },
    {
      mesh: "meshTransmissionMaterial",
      component: <MatrTransmission />,
    },
    {
      mesh: "meshWobbleMaterial",
      component: <MatrWobble />,
    },
    {
      mesh: "meshDistortMaterial",
      component: <MatrDistort />,
    },
    {
      mesh: "shaderMaterial",
      component: <MatrShader />,
    },
  ];

  const Geometry = lowerCaseFirstText(selectedGeometry);
  const Mesh = lowerCaseFirstText(selectedMesh);
  const dreiMesh = lowerCaseFirstText(selectedDreiMesh);

  // console.log(dreiMesh);
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
      <directionalLight position={[2, 2, 3]} />
      <directionalLight position={[1, 2, 8]} intensity={0.5} />

      {/* 3D 객체 렌더링 방식 */}
      {/* <mesh position={[-2, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color={meshColor} />
      </mesh> */}
      {/* {GeometryComponents.map((item, index) => (Geometry === item.geometry ? item.component : <Geometry key={item.geometry + "_geom_content" + index} />))}
        {MeshComponents.map((item, index) => (Mesh === item.mesh ? item.component : <Mesh key={item.mesh + "_mesh_content" + index} color={meshColor} />))} */}

      {/* 1. 기본 */}
      <mesh position={[-2, 0, 0]}>
        {GeometryComponents.map((item, index) =>
          Geometry === item.geometry ? React.cloneElement(item.component, { key: item.geometry + "_geom_content" }) : null
        )}
        {MeshComponents.map((item, index) => (Mesh === item.mesh ? React.cloneElement(item.component, { key: item.mesh + "_mesh_content" }) : null))}
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

      {/* Drei Mesh Componets */}
      {dreiMeshComponents.map((item, index) => (dreiMesh === item.mesh ? React.cloneElement(item.component, { key: item.mesh + "_drei_mesh_content" }) : null))}
    </>
  );
}

export default GeometryContent;
