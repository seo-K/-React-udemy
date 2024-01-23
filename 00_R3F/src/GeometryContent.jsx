import {Box, OrbitControls} from "@react-three/drei";
import * as THREE from "three";
// geometry
import GeomBox from "./geometry/GeomBox";
import GeomCylinder from "./geometry/GeomCylinder";
import GeomSphere from "./geometry/GeomSphere";
import MatrBasic from "./mesh/MatrBasic";
import MatrLambert from "./mesh/MatrLambert";
import MatrPhong from "./mesh/MatrPhong";
import MatrStandard from "./mesh/MatrStandard";

function MyBox(props) {
  const geom = new THREE.BoxGeometry();

  return <mesh {...props} geometry={geom}></mesh>;
}

function GeometryContent({selectedGeometry, selectedMesh}) {
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
  ];

  const MeshComponents = [
    {
      mesh: "meshBasicMaterial",
      component: <MatrBasic meshColor="#1abc9c" />,
    },
    {
      mesh: "meshLambertMaterial",
      component: <MatrLambert meshColor="#1abc9c" />,
    },
    {
      mesh: "meshPhongMaterial",
      component: <MatrPhong meshColor="#1abc9c" />,
    },
    {
      mesh: "meshStandardMaterial",
      component: <MatrStandard meshColor="#1abc9c" />,
    },
    // {
    //   mesh: "meshPhysicalMaterial",
    //   component: <MatrPhysical/>,
    // },
    // {
    //   mesh: "meshDepthMaterial",
    //   component: <MatrDepth/>,
    // },
    // {
    //   mesh: "meshNormalMaterial",
    //   component: <MatrNormal/>,
    // },
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
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 2, 3]} intensity={0.5} />

      {/* 3D 객체 렌더링 방식 */}
      {/* <mesh position={[-2, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="#1abc9c" />
      </mesh> */}

      {/* 1. 기본 */}
      <mesh position={[-2, 0, 0]}>
        {GeometryComponents.map((item) => (Geometry === item.geometry ? item.component : <Geometry key={item.geometry} />))}
        {MeshComponents.map((item) => (Mesh === item.mesh ? item.component : <Mesh key={item.mesh} color="#1abc9c" />))}
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
