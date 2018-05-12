
class Person {

  constructor(name, age, certificates) {
    this.name=name;
    this.age=age;
    this.certificates=certificates;
  }

   speak() {
    console.log(`Hi !! my name is ${this.name} and my age is ${this.age}.`);

    console.log(`My certificates are: ${this.certificates}`);
  }

   addCertification(certificate) {
      this.certificates.push(certificate);
      return this.certificates;
  }
};


const tChaka = new Person("T'Chaka",35,["ocjp","ccna",]);

tChaka.speak();

tChaka.addCertification("AWS")

console.log(tChaka);

tChaka.speak();
