





class Person4 {
   constructor (
      public name: string, 
      public age: number, 
      protected hobbies?: string[]
   ) {}

   introduce (): string{
      return `Hi, I'm  ${this.name} and my hobbies are ${this.hobbies?.join(', ')}`
   }
}


// Inheritance
class Student3 extends Person4 {
   constructor (
      name: string, 
      age: number, 
      public grade: number, 
      public marks: number, 
      hobbies?: string[]
   ) {
      super(name, age, hobbies)
    }

   introduce(): string {
      return `${super.introduce()} . I am in grade ${this.grade} and I aqquired ${this.marks} marks`
   }
}

const nandita3: Person4 = new Person4("Nandita", 5, ["reading", "painting"])
const sujay3: Person4 = new Person4("Sujay", 12)
console.log(sujay3);
console.log(nandita3);
console.log(nandita3.introduce());

const rimi3: Student3 = new Student3("Nandita", 5, 6, 98, ["reading", "painting"])
console.log(rimi3.introduce())