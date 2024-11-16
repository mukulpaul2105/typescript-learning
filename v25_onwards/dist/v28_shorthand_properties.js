"use strict";
class Person4 {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        var _a;
        return `Hi, I'm  ${this.name} and my hobbies are ${(_a = this.hobbies) === null || _a === void 0 ? void 0 : _a.join(', ')}`;
    }
}
// Inheritance
class Student3 extends Person4 {
    constructor(name, age, grade, marks, hobbies) {
        super(name, age, hobbies);
        this.grade = grade;
        this.marks = marks;
    }
    introduce() {
        return `${super.introduce()} . I am in grade ${this.grade} and I aqquired ${this.marks} marks`;
    }
}
const nandita3 = new Person4("Nandita", 5, ["reading", "painting"]);
const sujay3 = new Person4("Sujay", 12);
console.log(sujay3);
console.log(nandita3);
console.log(nandita3.introduce());
const rimi3 = new Student3("Nandita", 5, 6, 98, ["reading", "painting"]);
console.log(rimi3.introduce());
