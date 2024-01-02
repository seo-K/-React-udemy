const 취미들2 = ["스포츠", "요리"];
const user = {
  이름: "거기서여",
  나이: 32,
};

const 새로운취미 = ["독서"];

const 취미합치기 = [...취미들2, ...새로운취미];
// const 취미합치기 = [취미들2, 새로운취미];
console.log(취미합치기);

const extendedUser = {
  isAdmin: true,
  ...user,
};

console.log(extendedUser);

for (const hobby of 취미들2) {
  console.log(hobby, "for of 반복문");
}
