

/*
   Generics in TypeScript allow us to create reusable components or functions that can work with multile data types.
*/

// Normal Function
function logAndReturn (value: number | string): number | string {
   return value
}

const numberResult: string | number = logAndReturn(42)
const stringResult: string | number = logAndReturn("Hello, Union")
console.log(numberResult)
console.log(stringResult)




// Generic function to log and return an input value
function logAndReturnGeneric <GenericType> (value: GenericType): GenericType {
   return value
}

const genericNumber: number = logAndReturnGeneric(45)
const genericString: string = logAndReturnGeneric("Hello, Generics")
console.log(genericNumber)
console.log(genericString)
