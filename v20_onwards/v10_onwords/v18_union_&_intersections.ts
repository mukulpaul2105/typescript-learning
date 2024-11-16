/*
   Union type allow us to specify that a variable can hold values of multiple types.
   We use the | (pipe) symbol to define a union type.
   
   When using a union type, it is essential to ensure that at least one of the types in the union includes all the
   required properties. Failure to do so will result in a type error during compilation.


*/

const inputValue = (value: string | number | boolean): void => {
   console.log(value)
}

inputValue(5)
inputValue("string")
inputValue(true)




/*
   Intersection types allow us to combine multiple types into a single type. 
   We use the & (ampersand) symbol to define an intersection type.
*/

type Person2 = {
   name: string;
   age: number;
}

type Employee = {
   emp_id: number;
   department: string;
}

// Intersection
type EmployeeDetails = Person2 & Employee

const employee: EmployeeDetails = {
   name: "Mukul",
   age: 25,
   emp_id: 119911,
   department: "Engineering"
}

console.log(employee)

// Union
type Person3 = Person2 | Employee

const person5: Person3 = {
   name: "Mukul",
   age: 25,
   emp_id: 119911
}

console.log(person5)