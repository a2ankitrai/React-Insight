
function Person(name, age) {

  this.name = name;
  this.age = age;

}

Person.prototype.speak = function () {
  console.log(`Hi !! my name is ${this.name} and my age is ${this.age}.`);
};

const p1 = new Person("Jack",28);

console.log(p1);

p1.speak();
