

/*
   the function call signature refers to the declaration or definition of a function,
   which includes the function's name, parameters, and return type.
   It defines the structure and type information of a function without including the function's
   implementation or body.

   Call signatures are typically used inside object type notations to describe the shape of functions within object types.
*/

type Student = {
   name: string;
   age: number;
   gender?: string;
   great: (country?: string) => string // Method call signature
}

const student1: Student = {
   name: "Mukul",
   age: 25,
   great: function(country?: string): string { return `Welcome, My name is ${this.name}, I am ${this.age}yrs old & I am from ${country}`}
}

console.log(student1.great("India"))

const student2: Student = {
   name: "Mukul",
   age: 25,
   great: (country: string = "India"): string => `Welcome, My name is ${student2.name}, I am ${student2.age}yrs old & I am from ${country}`
}

console.log(student2.great("Bhutan"))
console.log(student2.great())


const introduction = (student: Student): string => {
   const { name, age } = student;
   return `Welcome, My name is ${name}, I am ${age}yrs old`;
}

console.log(introduction(student1));