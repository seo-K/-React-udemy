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

2. map

- 이런식으로 뿌릴 수도 있음.

```js
{
  dataList.map((item, index) => <CoreConcept key={item.title} item={item} />);
}
{
  dataList.map((item) => <CoreConcept key={item.title} {...conceptItem} />);
}
```

3. props 가져오는 법.

   - props나 props.children, children 으로 가져오기
   - attribute 값 사용

   ```js
       // 1.
       <TabButton label="버튼내용 넣기"></TabButton>

       export default function TabButton({ label }) {
       function handleClick() {
           console.log("눌림");
       }
       return (
           <li>
           <button type="button" onClick={handleClick}>
               {label}
           </button>
           </li>
       );

       // 2.
       <TabButton>버튼내용 넣기</TabButton>
       export default function TabButton({ children, onSelect, isSelected }) {
           return (
               <li>
               <button className={isSelected ? "active" : undefined} type="button" onClick={onSelect}>
                   {children}
               </button>
               </li>
           );
       }
   ```

4. 컴포넌트화 시키는 이유.

- 변경된 state가 있는 컴포넌트만 재랜더링 하려구.

ex) 1번째는 변경이 되면 전체 header, menu, p 태그가 다 다시 랜더링되고, 2번째는 변경되는곳 컴포넌트만 리랜더링된다.

```js
<body>
  <header></header>
  <main>
    <menu></menu>
    <p></p>
    <div>변경되는곳</div>
  </main>
</body>
```

```js
<body>
  <header></header>
  <main>
    <Menu />
    <변경되는곳 />
  </main>
</body>
```
