1. JSX(JavaScript XML)

- React에서 사용되는 문법으로, JavaScript 코드에서 XML 또는 HTML과 유사한 구조를 표현할 수 있게 해줍
- React 요소를 생성하는데 사용되며, 가독성이 뛰어나고 작성하기 쉽기 때문에 React 컴포넌트를 작성하는 데 흔히 사용됩
- 브라우저에서는 JSX를 직접 이해하지 못하지만, Babel과 같은 도구를 사용하여 JSX 코드를 일반 JavaScript 코드로 변환함.

```js
// JSX
const element = <h1>Hello, JSX!</h1>;

// 변환 후
const element = React.createElement("h1", null, "Hello, JSX!");
```

- JS 와 JSX의 차이

```js
// 1. javascript
// JavaScript 코드
const greeting = "Hello, World!";
const element = document.createElement("div");
element.textContent = greeting;
document.body.appendChild(element);

// 2. JSX
// JSX 코드
const greeting = "Hello, World!";
const element = <div>{greeting}</div>;
```
