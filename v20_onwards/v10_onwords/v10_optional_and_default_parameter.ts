/*
   Optional and Default Parameters:
   -> TypeScript allows us to define optional and default parameters in functions.
   -> Optional parameters are denoted by appending a ? symbol after the parameter name,
      and default parameters are specified by providing a default value in the paremeter declaration.
*/

// Default Parameter
const greatDefault = (name: string, id: number = 1) => {
   return `Welcome ${name} and your id is ${id}`
}

console.log(greatDefault("Mukul"))


// Optinoal Parameter
const greatOptional = (name: string, id?: number) => {
   return `Welcome ${name} ${id ? " and your id is " + id : ""}`
}

console.log(greatOptional("Mukul"))
console.log(greatOptional("Mukul", 2))