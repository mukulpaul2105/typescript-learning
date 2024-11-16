"use strict";
/*
   Inheritance allows a class to reuse the functionality of an existing class without rewriting it.

   Inheritance is a mechanism in which one class acquires the property of another class.
   For examle, a child inherits the traits of his/her parents.
*/
class Person2 {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies || ["riding", "reading"];
    }
    introduce() {
        return `Hi, I'm  ${this.name} and my hobbies are ${this.hobbies.join(', ')}`;
    }
}
// Inheritance
class Student extends Person2 {
    constructor(name, age, grade, marks, hobbies) {
        super(name, age, hobbies);
        this.grade = grade;
        this.marks = marks;
    }
    introduce() {
        return `${super.introduce()} . I am in grade ${this.grade} and I aqquired ${this.marks} marks`;
    }
}
const nandita1 = new Person2("Nandita", 5, ["reading", "painting"]);
const sujay1 = new Person2("Sujay", 12);
console.log(sujay1);
console.log(nandita1);
console.log(nandita1.introduce());
const rimi = new Student("Nandita", 5, 6, 98, ["reading", "painting"]);
console.log(rimi.introduce);
