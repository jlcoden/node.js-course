//object
// const person = {
//     name: 'John Doe',
//     age: 30
// };

//class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //method
  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
}

//module.exports = person;
module.exports = Person;
