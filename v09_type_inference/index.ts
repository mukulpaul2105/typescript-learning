/*
   Type inference in typeScript refers to the ability of the TypeScript compiler to automatically determine and assign
   types to variables, expressions, and function return values based on their usage and context in the code.
*/

let myName = "Mukul";
// myName = 5  // it doesn't allow to change data type. ts compiler automatically assigned type as string

/*
   Best Practices for usoing type inference in TypeScript
   -> use type inference for simple cases where the assigned value clearly indicates the intended type.
   -> When in doubt, provide explicit type annotations to make our intentions clear.
   -> Avoid relying too heavily on type inference when the assigend value is complex or ambigious.
   -> Regular review and and refactor our code to ensure the inferred types align with our intentions.

*/
