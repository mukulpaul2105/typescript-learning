/*
   Generics in TypeScript allow us to create reusable components or functions that can work with multile data types.
*/
// Normal Function
function logAndReturn(value) {
    return value;
}
var numberResult = logAndReturn(42);
var stringResult = logAndReturn("Hello, Generics");
console.log(numberResult);
console.log(stringResult);
// Generic function to log and return an input value
function logAndReturnGeneric(value) {
    return value;
}
var genericNumber = logAndReturnGeneric(45);
var genericString = logAndReturnGeneric("Hello, Generics");
console.log(genericNumber);
console.log(genericString);
