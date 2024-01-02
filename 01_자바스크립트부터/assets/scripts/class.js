class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("안녕");
  }
}

const user1 = new User("Manual", 35);
console.log(user1);
user1.greet();
