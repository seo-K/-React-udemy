# 프로젝트 관리 앱 만들어보기

## 1. 프로젝트 소개 및 목적

리액트 공부를 위한 프로젝트 관리 앱입니다. 이 앱은 사용자가 프로젝트를 추가하고 관리할 수 있는 간단한 기능을 제공합니다.

## 2. 설치 및 시작하기

프로젝트를 실행하기 위해서는 다음 명령어를 사용합니다:

```bash
npm install
npm run dev
```

## 3. 사용법

- 프로젝트 추가 버튼을 클릭하여 새로운 프로젝트를 추가할 수 있습니다.
- 각 프로젝트는 수정 및 삭제할 수 있는 기능을 포함합니다.

## 4. 구조 및 파일 설명

- src/: 소스 코드가 있는 디렉토리
- public/: 정적 파일이 위치하는 디렉토리
- package.json: 프로젝트 의존성 및 스크립트 정의

### useState, useRef

- useState
  - 가장 많이 사용되는 리액트 훅 중 하나.
  - 컴포넌트에서 상태를 관리할때 사용되며, 상태값을 선언하고 업데이트하는데 활용됨.
  - 상태값이 바뀔때마다 재랜더링 됨.
  - ui 렌더링 시에 변수가 초기화되어 버리기때문에 상태를 유지하려면 useState의 사용을 권장. (timer 의 경우 다시 0부터 시작할걸?)

- ref (reference 참조)
  - React 앱에서 저장 공간 및 DOM 요소를 선택하는 셀렉터로 사용
  - 저장 공간으로서의 역할로, 상태를 저장하는 기능
  - 변수를 이용하여 값의 변화를 UI에 반영할 수 있지만, 이 때 UI가 다시 렌더링되지 않음 (상태값이 변경되더라도 굳이 리렌더링이 필요없는 경우 좋음)
  - 변수를 이용할 때 UI 렌더링 시 값이 초기화되는 문제가 발생할 수 있음

1. useState

```jsx
// 매번 버튼 클릭시에 new Audio('your-audio-file.mp3')를 통해 새로운 Audio 인스턴스를 생성
const Component = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleAudioToggle = () => {
    const audio = new Audio("your-audio-file.mp3");

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button onClick={handleAudioToggle}>버튼</button>
    </div>
  );
};
```

2. useRef

```jsx
//  useRef를 사용하여 한 번 생성한 Audio 인스턴스를 계속해서 재활용
// 버튼 클릭시에는 해당 인스턴스를 직접 제어하고 있으며, 이는 기존에 재생 중이던 오디오를 중지시키지 않고, 현재의 인스턴스를 계속해서 사용할 수 있음
const Component = () => {
  const audioRef = useRef(new Audio());
  const [isPlaying, setIsPlaying] = useState(false); // useRef.current 로 업데이트가능하지만, 코드의 직관성을 위해 사용.

  const handleAudioToggle = () => {
    setIsPlaying((prev) => !prev);
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
  };

  return (
    <div>
      <button onClick={handleAudioToggle}>버튼</button>
    </div>
  );
};
```