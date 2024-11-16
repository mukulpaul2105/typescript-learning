
/*
              / parent class / child class / outside class
      public  /      ✅      /     ✅       /     ✅
   protected  /      ✅      /     ✅       /     ❌
      private /      ✅      /     ❌       /     ❌
*/

class Person3 {
   public name: string;
   protected age: number;
   private hobbies: string[];

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
class Student2 extends Person3 {
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

const nandita2: Person3 = new Person3("Nandita", 5, ["reading", "painting"])
const sujay2: Person3 = new Person3("Sujay", 12)
console.log(sujay2);
console.log(nandita2);
console.log(nandita2.introduce());

const rimi2: Student2 = new Student2("Nandita", 5, 6, 98, ["reading", "painting"])
console.log(rimi2.introduce)