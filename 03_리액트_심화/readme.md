1. public VS src/assets/폴더

- 빌드 프로세스에 의해 처리되지 않는 이미지는 public 폴더를 사용해야하고, index.html , favicon 같은 이미지.
  - public/에 저장된 이미지 (또는 일반적으로: 파일)은 프로젝트 개발 서버 및 빌드 프로세스에 의해 공개적으로 제공
    - ex\_) localhost:5173/some-image.jpg 으로 접근가능
  - src 또는 src/assets/와 같은 하위 폴더에 저장된 모든 파일(어떤 형식이든)은 공개적으로 제공되지 않음.
    - 코드 파일에 가져온 이미지는 빌드 프로세스에 의해 인식되어 최적화되며, 웹사이트에 제공하기 직전에 public/ 폴더에 "삽입"됩니다. 가져온 이미지는 참조한 위치에서 자동으로 링크가 생성되어 사용됩니다.
    - ex\_) localhost:5173/src/assets/some-image.jpg 으로 접근 불가
    - 컴포넌트 내에게 사용되느 이미지는 일반적으로 src/ 폴더에 위치.

2. props 와 함수를 가져오고 내보낼 수 있음.

```js
// ...props 를 사용하여 통으로 받아올 수 있음.
export default function TabButton({children, isSelected, ...props}) {
  console.log("TABBUTTON COMPONENT EXECUTING");
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}

<TabButton isSelected={selectedTopic === "components"} onClick={() => handleSelect("components")}>
  Components
</TabButton>;
```

3. React 는 상태를 최대한 적게 사용하도록 하고, 최대한 많은 값을 파생 및 연사하도록 하는 것.
