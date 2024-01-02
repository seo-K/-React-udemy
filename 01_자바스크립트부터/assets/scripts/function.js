// 여러 함수 선언 방법
function 시간지남() {
  console.log("시간지남");
}
const 시간지남2 = () => {
  console.log("시간또지남");
};
setTimeout(시간지남, 2000);
setTimeout(시간지남2, 3000);
setTimeout(() => console.log("시간이 아에 감"), 4000);

// 함수 안의 함수
function init() {
  function greet() {
    console.log("안뇽");
  }

  greet(); // init 함수 안에서만 사용가능한 함수.
}

init();
