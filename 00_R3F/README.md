# Three js

![alt text](./image/three.png)
![alt text](./image/three3.png)

- Renderer - Scene(장면) - Light (광원)
-                        ㄴMesh (Object3D) - Geometry (형상 정의)
-                                          ㄴMaterial (색상 및 투명도)
-          ㄴ Camera (시점 = 카메라)

# BufferGeometry

![alt text](./image/three2.png)

# Shape

## 메쉬, 선, 점 기하학의 표현입니다.

- BoxGeometry (박스)
  - ex) const geometry = new THREE.BoxGeometry(1, 1, 1); (가로,세로,깊이)
- CircleGeometry (원형)
  - ex) CircleGeometry(1, 8, 0, Math.PI X 2); [반지름, 원판을 구성하는 분할개수/세그먼트 수 = 값이 클수록 완전한 형태의 원형(기본8), 시작각도, 연장각도(기본 2PI = 360도)]
- ConeGeometry (원뿔형)
  - ex) ConeGeometry(1, 1, 8, 1, false, 0, Math.PI X 2); [반지름, 높이, 둘레 분할개수, 높이 분햘 개수/층, 밑면 여부, 시작각, 연장각]
- CylinderGeometry (원통형)
  - ex) CylinderGeometry(1, 1, 1, 8, 1, false, 0, Math.PI X 2); [윗면반지름, 아랫면반지름, 높이, 둘레 분할개수, 높이 분할 개수, 밑면 여부, 시작각, 연장각]
- SphereGeometry (구형)
  - ex) SphereGeometry(1, 32, 16, 0, Math.PI X 2, 0, PI) [반지름, 수평방향 분할 수, 수직방향 분할 수 , 수평방향 시작각, 수평방향 연장각, 수직방향 시작각, 수직방향 연장각]
- RingGeometry (링모형)
  - ex) RingGeometry(0.5, 1, 8, 1, 0, Math.PI X 2); // [내부반지름 , 외부반지름, 가장자리 둘레방향 분할개수, 링내부방향 분할개수, 시작각, 연장각]
- PlaneGeometry (사각형) (gis 지리정보시스템 3차원지형 표현시 유용)
  - ex) PlaneGeometry(1, 1, 1, 1); //[ 너비, 높이, 너비방향 분할수, 높이방향 분할 수]
- TorusGeometry (반지모형) (2차원 원이 360도 돌아가있다고 생각하면됨)
  - ex) TorusGeometry(1, 0.4, 8, 6, Math.PI X 2 ); // [ 반지름, 돌아가는 내부원형 반지름 값, 방사방향, 돌아가는 내부원형 수, 연장각길이]
- TorusKnotGeometry (매듭모형)
  - ex) TorusKnotGeometry(1, 0.4, 20, 30, 3, 4); // [ 반지름, 구성 원통 반지름크기, 원형 수, 원형내부 분할수, 꺾임반복횟수?, 꺾임 ]

### 선

![alt text](https://mblogthumb-phinf.pstatic.net/20121013_234/javaking75_13500553141650YoRa_PNG/2012-10-13_002043.png?type=w2)

- quadraticCurveTo(제어점x, 제어점y, 종료점x, 종료점y)
- bezierCurveTo(제어점x, 제어점y, 제어점x2, 제어점y2, 종료점x, 종료점y)

###

- ExtrudeGeometry (평면 shape에 깊이갚을 부여 + mesh의 윗면과 아랫면을 비스듬하게 처리 === 베벨링)
- TextGeometry [ExtrudeGeometry의 파생클래스]
- LatheGeometry (선을 y축 회전하여 얻어지는 3차원 mesh)
  - LatheGeometry(path, 분할수(12), 시작각(0), 연장각(2PI))
- ParametricGeometry (수학적 함수식에 2개의 값을 입력하여 얻을 수 있는 좌표로 구성)
- TubeGeometry (튜브형태로 곡선 구성)
  - TubeGeometry(path, 튜브의 진행방향 분할 수/충(64), 튜브의 원통 반지름(1), 원통 분할 수(8)), 원통 닫을지 여부(false)
- EdgesGeometry (기하학을 구성하는 인접면의 각도에 따라 기하학을 재구성)
- ShapeGeometry (평면 도형 구성)
- WireframeGeometry (외각선 추가)

- PolyhedronGeometry
  - (IcosahedronGeometry [20면체], OctahedronGeometry [8면체], DodecahedronGeometry [12면체],TetrahedronGeometry [4면체])

### bufferGeometry

- 정점(Vertex) = xyz 좌표
- 정점 인덱스(Vertex Index) = 면을 구성
- 수직 벡터(Normal Vector) = 법선 벡터
- 정점 색상(Vertex Color)
- 텍스트 멥핑을 위한 UV 좌표
- 사용자 정의 데이터

# Object3D

- Mesh (3각형 면)
- Line (선)
- Points (점)

## 속성

![alt text](./image/three4.png)

- position (x, y, z) 기본값 0
- rotation (x, y, z 의 회전값) 기본값 0
- scale (x, y, z 의 scale) 기본값 1

# scene graph

![alt text](./image/three5.png)

1. 태양 객체 생성

- 크기 지정 및 재질 추가

2. 지구 추가

- 지구 객체 생성
- 태양의 자식으로 지구를 추가하는 코드 추가
- 지구에대한 재질 추가

3. 달 추가

- 달 객체 생성
- 지구의 자식으로 달을 추가하는 코드 추가
- 달에대한 재질 추가

4. 자전과 공전을 위해 메서드를 따로 불러오고 update 에 해당 y축 회전 값 추가

# Material (3차원 객체를 구성하는 재질)

![alt text](./image/three6.png)

1. Point 재질 (점 재질, 점 객체)

- PointMaterial

2. Line 재질(선 재질, 라인 객체)

- LineBasicMaterial = 실선
  - LineDashedMaterial = 점선

3. Mesh 재질(면 재질)

- MeshBasicMaterial = 평면. 광원의 영향을 받지 않는면 | 반사광, 하이라이트가 없는 재질
- MeshLambertMaterial = 광원의 영향을 받는 면 (기본적인 듯)
- MeshPhongMaterial = 빛나는 글로우 면 (픽셀단위로 광원의 영향을 계산하는 재질 LamerMaterial 보다 정교한 쉐이딩 효과를 얻을 수 있음.)
  , 반사 하이라이트가 있는 광택있는 표면 재질

## 3차원 그래픽에서 가장 많이 사용되는 재질

- 고품질이지만. 속도면에서는 이 전 두개보다 조금 느림.
- MeshStandardMaterial
  - MeshPhysicalMaterial = 반사성을 더 조절할 수 있는 MeshStandardMaterial의 확장 ( 유리같은 표현 가능 )
- MeshDepthMaterial = 음영으로 깊이를 표현 재질
- MeshMatcapMaterial = matcap 이미지 파일을 그대로 입히는 재질. (이미지 파일은 이미 조을 포함하여, 광원이 필요없음)
- MeshNormalMaterial = 법선 벡터의 xyz 값을 rgb값으로 표한한 재질 (xyz 각각 색 입힘) 백터를 RGB 색상으로 매핑하는 재질
- MeshToonMaterial = 작은 픽셀로 만화같은 효과를 주는 재질

* 법선 벡터 = 입체감을 나타냄
  ![alt text](./public/img/법선벡터.jpg)
  - 실제로 돌출되지 않음
  - x,y,z 공간상의 방향에 대한 정보를 가지고 있다 (R,G,B 값을 이용)
  - 면에대한 수직 벡터로 광원에 대한 시각적인 효과를 계산하기 위해 사용함.
  - 어떤 면에 대한 수직 방향의 벡터를 의미 광원에 대한 음영 효과를 변경할 수 있음.

## Drei 재질의 종류

// https://github.com/pmndrs/drei?tab=readme-ov-file

// import {meshReflectorMaterial} from "@react-three/drei"; 이런식으로 추가해줘야함.

- MeshReflectorMaterial = 다른 메쉬가 반사되는 재질 (거울이나 대리석들의 재질)
- MeshRefractionMaterial = 다이아몬드와 같은 반짝거리는 보석을 표현하기 좋음
- MeshTransmissionMaterial = 유리재질 (유리 수정구슬 만들 수 있음)
- MeshWobbleMaterial = shape가 귀엽게 앙탈부리며 흔들리는 애니메이션 재질
- MeshDistortMaterial = shape 이 계란후라이처럼 퍼져서 흔들리는 재질
- MeshDiscardMaterial = 아무것도 렌더링하지 않는 재질입니다. 이에 비해 <mesh visible={false}></mesh>그림자와 하위 항목은 표시하면서 장면에서 객체를 숨기는 데 사용할 수 있습니다.
- shaderMaterial = 그림자 효과

![alt text](https://velog.velcdn.com/images/blcklamb/post/62a4e78c-fc84-46cd-9d02-f9a053c898dd/image.png)
![alt text](./image/three7.png)

## 재질에 대한 다양한 맵핑 속성

> 텍스처 맵핑 = 메시 표면에 이미지 데이터를 사용하여, 보다 사실적인 재질을 표현하기 위한 기술
> Procedural Material = 3차원에서 매우 사실적인 재질을 효과적으로 표현하기 위한 기능이지만, r3f(실시간 렌더링 엔진)에선 구현이 불가능해서 Baking(procedural Material을 텍스쳐 이미지로 만드는 것) 하여 랜더링된 이미지를 다양한 mapping속성을 사용하여 구현.

1. map : 해당 재질 이미지를 입힘
2. roughnessMap, roughnessMap-colorSpace = 거친 재질을 입혀 거칠기를 표현
3. metalnessMap, metalnessMap-colorSpace, metalness : 메탈 속성을 추가한 뒤, 메탈 재질을 넣어 메탈릭함을 표현 (매털락 설정 꼭해야함)
4. normalMap, normalMap-colorSpace, normalScale : 법선 벡터(실제론 돌출되지 않았으나, xyz에 rgb값을 이용하여 공간상 방향에 대한 정보를 가지고있는 이미지)룰 사용하여 광원에 대한 음영 효과를 변경하여, 입체감을 표현
5. displacementMap, displacementMap-colorSpace, displacementScale, displacementBias : 실제 메쉬에 변형을 가하여, 입체감을 표현, 법선벡터는 눈속임 기법이지만, 이건 비트맵 명도에 따라 실제 mesh를 생성해주는 기법
6. aoMap = ambient occlusion map (앰비언트 오클루전 맵) : 그림자 이기 때문에 두가지 추가 요소가 필요함. 1. ambientLight 빛이 필요 2. geometry에 UV2 라는 속성이 필요함.
7. alphaMap = 투명도 (색상이 어두울수록, 투명도가 높아짐) = transparent 를 추가해야함, 필요에따라 alphaToCoverage(안티 앨리어싱(anti-aliasing) 기술 중 하나로, 투명한 객체의 가장자리를 부드럽게 만들어 줌. 물방울이나 유리같은거? 주로 투명한 객체들이 배경과 어우러질 때, 부드럽고 자연스럽게 블렌딩되도록 도와줌.) 추가 가능.

```
const texture = useTexture({
    map: "../img/glass/Glass_Window_002_basecolor.jpg",
    roughnessMap: "../img/glass/Glass_Window_002_roughness.jpg",
    metalnessMap: "../img/glass/Glass_Window_002_metallic.jpg",
    normalMap: "../img/glass/Glass_Window_002_normal.jpg",
    displacementMap: "../img/glass/Glass_Window_002_height.png",
    aoMap: "../img/glass/Glass_Window_002_ambientOcclusion.jpg",
    alphaMap: "../img/glass/Glass_Window_002_opacity.jpg",
  });

  const mesh = useRef();

  useEffect(() => {
    // 앞서 texture로 선언한 것들의 x축 = 수평을 4번 반복함.
    texture.map.repeat.x =
      texture.displacementMap.repeat.x =
      texture.aoMap.repeat.x =
      texture.roughnessMap.repeat.x =
      texture.metalnessMap.repeat.x =
      texture.normalMap.repeat.x =
      texture.alphaMap.repeat.x =
        4;

    // 반복이 시작되는 시점에서 어떻게 이미지를 랜더링할건지 (warpS = x축, warpT = y축)
    texture.map.wrapS =
      texture.displacementMap.wrapS =
      texture.aoMap.wrapS =
      texture.roughnessMap.wrapS =
      texture.metalnessMap.wrapS =
      texture.normalMap.wrapS =
      texture.alphaMap.wrapS =
        THREE.MirroredRepeatWrapping;
    mesh.current.geometry.setAttribute("uv2", new THREE.BufferAttribute(mesh.current.geometry.attributes.uv.array, 2));
  }, []);

  // 텍스쳐 개체 재랜더링
  texture.map.needsUpdate =
    texture.roughnessMap.needsUpdate =
    texture.metalnessMap.needsUpdate =
    texture.normalMap.needsUpdate =
    texture.displacementMap.needsUpdate =
    texture.aoMap.needsUpdate =
    texture.alphaMap.needsUpdate =
      true;

  // aoMap
  // useEffect(() => {
  //   mesh.current.geometry.setAttribute("uv2", new THREE.BufferAttribute(mesh.current.geometry.attributes.uv.array, 2));
  // }, []);

 {/* mapping */}
      <mesh scale={0.4} ref={mesh}>
        <cylinderGeometry args={[2, 2, 3, 256, 256, true]} />
        <meshStandardMaterial
          // wireframe
          side={THREE.DoubleSide}
          map={texture.map}
          // 거칠기
          roughnessMap={texture.roughnessMap}
          roughnessMap-colorSpace={THREE.NoColorSpace}
          // 메탈
          metalnessMap={texture.metalnessMap}
          metalnessMap-colorSpace={THREE.NoColorSpace}
          metalness={0.5}
          // 법선 벡터 normal Vactor
          normalMap={texture.normalMap}
          normalMap-colorSpace={THREE.NoColorSpace}
          normalScale={[1, 1]} // 입체 효과가 강하게 들어가는 정도
          // Displacement map(디스플레이스먼트맵/디스맵) =   wireframe 로 확인
          // - 실제 메쉬에 변형을 가함
          // - 실제 메쉬를 변형하므로 그에 대한 그림자가 생기게되지만, 디테일한 설정이 필요하면 디스맵에 더불어 노멀맵도 같이 사용해야함(아래 참고)
          // 모델링하기 힘든 굴곡들을 displacement map으로 적용된 이미지의 밝고, 어두움을 기준으로 형성해주는 기법 (분할수를 늘려야함 segment가 꼭 필요함)
          // normal map은 눈속임 기법인 것에 반해 displacement map은 비트맵의 명도에 따라 실제 mesh를 생성해주는 기법
          displacementMap={texture.displacementMap}
          displacementMap-colorSpace={THREE.NoColorSpace}
          displacementScale={0.2} // displacementMap을 사용하면 뚱뚱해져서 이걸 조절해야댐
          displacementBias={-0.2} // displacementMap을 사용하면 뚱뚱해져서 이걸 조절해야댐
          // aoMap = ambient occlusion map (앰비언트 오클루전 맵) = 메쉬 표면에 이미 만들어둔 그림자로 입체감을 살리는 역할
          // 그림자 이기 때문에 두가지 추가 요소가 필요함.
          // 1. ambientLight 빛이 필요 2. geometry에 UV2 라는 속성이 필요함.
          aoMap={texture.aoMap}
          // 알파맵 = 투명도 (색상이 어두울수록, 투명도가 높아짐)
          // transparent 를 추가해야함
          alphaMap={texture.alphaMap}
          transparent
          // alphaToCoverage // 안티 앨리어싱(anti-aliasing) 기술 중 하나로, 투명한 객체의 가장자리를 부드럽게 만들어 줍니다. 물방울이나 유리같은거? 주로 투명한 객체들이 배경과 어우러질 때, 부드럽고 자연스럽게 블렌딩되도록 도와줍니다.
        />
      </mesh>

```

## 광원 (Light)

![alt text](./public/img/광원.jpg)

> Three.js에서 제공하는 광원 클래스

1. AmbientLight (주변광)

- <ambientLight color="#ff0000" intensity={0.2} /> = 광원의 색상과 세기
- intensity={0.1} 으로 설정하여 광원의 영향을 받지못하는 객체도 살짝보이게 설정

2. HemisphereLight (주변광, 색상2개)

- <hemisphereLight args={["위에서_아래로_비추는_색상", "땅에서_비추는_색상", 빛의세기]} /> <hemisphereLight args={["#00f", "#f00", 2]} />
- 지상에서 비추는 빛 & 바닥에서 비추는 빛 두가지로 구성되어있음.

3. DirectionalLight (특정 방향으로 향하는 빛)

- <directionalLight color={0xffffff} intensity={1} position={[0, 5, 0]} /> position 은 빛 쏘는 위치
- <directionalLight ref={light} color={0xffffff} intensity={1} position={[0, 5, 0]} target-position={[-10, 2, 10]} /> target-position 빛이 쏘는 타켓 위치
- useHelper을 사용하여 빛의 방향을 확인하기

4. PointLight (모든 방향으로 비추는 빛)

- <pointLight ref={light} color="#fff" intensity={20} position={[0, 5, 0]} distance={2} /> distance 는 빛이 닿는 거리이며, 기본값은 0 = 무한한 거리, 이후 1, 2,.. 까지만 빛이 닿음.

5. SpotLight (조명광 = 깔대기 모양으로 쌰~)

- <spotLight ref={light} color={0xffffff} intensity={10} position={[0, 5, 0]} target-position={[0, 0, 0]} distance={10} angle={THREE.MathUtils.degToRad(30)} penumbra={0.2} /> angle : 꼬깔콘의 크기, penumbra 빛번짐 (0~1) (빛의 감쇄)

6. RectAreaLight (형광등처럼 비추는 빛)

- <rectAreaLight ref={light} color="#fff" intensity={20} width={1} height={3} position={[0, 5, 0]} rotation-x={THREE.MathUtils.degToRad(-90)} /> width, height : 광원의 크기 rotation-x : 빛의 각도

> Drei에서 제공하는 컴포넌트

1. Environment (주위 환경을 촬영한 이미지를 이용한 빛)

- <Environment blur={0.1} background files={"./public/img/4k.hdr"} /> background 속성으로 배경을 보이게 할 수 있고, blur 로 배경을 흐리게 처리도 가능.
- https://polyhaven.com/hdris 에서 맘에드는거 4k hdr, exr로 다운로드
- 배경의 조명을 받고, 배경을 그대로 보일 수 있음.

- 물리기반 렌더링 (PBR = Physically Based Rendering)

## 카메라(Camera)

![alt text](./public/img/카메라jpg)

1. Perspective Camera (원근감을 제공하는 카메라) [ 기본 카메라 ]
2. Orthographic Camera (원근감이 없는 카메라) [ 멀리있어도 같은 크기면 같게보임 ]

> 절두체

![alt text](./public/img/카메라_절두체.jpg)

- 절두체에 포함된 부분만 렌더링됨. 결론은 카메라를 정의한다는건 절두체를 정의한다는 말과 같음.

![alt text](./public/img/카메라_파라메터.jpg)

### R3F

R3F

웹표준 기술 이용 (WebGL/WebGPU)
파이프라인
수학
Shader(GLSL, WGSL)

Three.js
WebGL, WebGPU를 랩핑하는 라이브러리

R3F
React에서 three.js를 효과적으로 사용할 수 있도록 해주는 라이브러리

React 프로젝트 셋팅

1. npm create vite@latest . -> y
2. package 명 입력
3. React
4. Javascript
5. npm i
6. npm run dev

R3f 셋팅 방법

1.  npm i @types/three @react-three/fiber

라이브러리
react-three/drei : "Drei"는 독일어로 "3"을 나타내냄. React와 Three.js를 함께 사용할 때 유용한 몇 가지 도움 함수와 컴포넌트를 제공하는 라이브러리

- OrbitControls [3D 카메라 컨트롤] 3D 장면을 마우스로 돌리고 확대/축소할 수 있음
- Sky: 대기와 하늘을 렌더링하는 데 사용되는 구름, 햇빛 등의 구성 요소를 갖춘 Sky 컴포넌트.

> npm i @react-three/drei

Leva : R3F에서 사용할 수 있는 장면과 상호 작용할 수 있는 조절툴. ex) useControls

> npm i leva
