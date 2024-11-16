
/*
   Inheritance allows a class to reuse the functionality of an existing class without rewriting it.

   Inheritance is a mechanism in which one class acquires the property of another class.
   For examle, a child inherits the traits of his/her parents.
*/

class Person2 {
   name: string;
   age: number;
   hobbies: string[];

   constructor (name: string, age: number, hobbies?: string[]) {
      this.name = name;
      this.age = age;
      this.hobbies = hobbies || ["riding", "reading"]
   }

   introduce (): string{
      return `Hi, I'm  ${this.name} and my hobbies are ${this.hobbies.join(', ')}`
   }
}


// Inheritance
class Student extends Person2 {
   grade: number;
   marks: number;

   constructor (name: string, age: number, grade: number, marks: number, hobbies?: string[]) {
      super(name, age, hobbies);
      this.grade = grade;
      this.marks = marks;
   }

   introduce(): string {
      return `${super.introduce()} . I am in grade ${this.grade} and I aqquired ${this.marks} marks`
   }
}

const nandita1: Person2 = new Person2("Nandita", 5, ["reading", "painting"])
const sujay1: Person2 = new Person2("Sujay", 12)
console.log(sujay1);
console.log(nandita1);
console.log(nandita1.introduce());

const rimi: Student = new Student("Nandita", 5, 6, 98, ["reading", "painting"])
console.log(rimi.introduce)