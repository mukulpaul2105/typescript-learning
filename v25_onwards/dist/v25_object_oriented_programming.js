"use strict";
/*
   A class is like a blueprint for creating similar things

   In TypeScript, there is a convention to use PascalCase (also known as UpperCamelCase)
   for class names. This means that class names should start with a capital letter and
   each subsequent word in the class name should also begin with a capital letter.
*/
class Person {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies || ["riding", "reading"];
    }
}
const sujay = new Person("Nandita", 5, ["reading", "painting"]);
const nandita = new Person("Sujay", 12);
console.log(sujay);
console.log(nandita);
