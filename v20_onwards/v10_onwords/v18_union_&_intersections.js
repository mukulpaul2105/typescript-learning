/*
   Union type allow us to specify that a variable can hold values of multiple types.
   We use the | (pipe) symbol to define a union type.
   
   When using a union type, it is essential to ensure that at least one of the types in the union includes all the
   required properties. Failure to do so will result in a type error during compilation.


*/
var inputValue = function (value) {
    console.log(value);
};
inputValue(5);
inputValue("string");
inputValue(true);
var employee = {
    name: "Mukul",
    age: 25,
    emp_id: 119911,
    department: "Engineering"
};
console.log(employee);
var person5 = {
    name: "Mukul",
    age: 25,
    emp_id: 119911
};
console.log(person5);
