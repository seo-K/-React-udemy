# 스타일링의 다양한 방법

1. 인라인 스타일링

```jsx
<p
  style={{
    color: "red",
    textAlign: "left",
  }}
>
  텍스트다
</p>
```

2. css 모듈

- build 처리되어 해당 클리스명만 고유한 이름으로 변경됨.

```css
/* Header.module.css */
.paragraph {
  color: red;
}
```

```jsx
import classes from "./Header.module.css";

export default function Header() {
  return <p className={classes.paragraph}>텍스트다</p>;
}
```

3. styled-components

```jsx
const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $invalid }) => ($invalid ? "#f87171;" : "#6b7280")};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background-color: ${({ $invalid }) => ($invalid ? "#fed2d2" : "#d1d5db")};
  color: ${({ $invalid }) => ($invalid ? "#ef4444" : "#374151")};
  border: ${({ $invalid }) => ($invalid ? "#f73f3f" : "transparent")};
`;

<p>
  <Label $invalid={passwordNotValid}>Password</Label>
  <Input type="password" $invalid={passwordNotValid} />
</p>;
```

## 일반 css를 사용하지않고 styled-component 를 사용하는 이유.

    - header.css 등 분리해서 import 해도 컴포넌트 외에 곳에도 해당 styling이 영향을 받기 때문.
