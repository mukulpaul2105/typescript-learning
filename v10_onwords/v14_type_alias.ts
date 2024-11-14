

/*
   Type alias is a way to give a name to a specific type or combination of types. It allows us to create a custom name for a type,
   making it easier to reuse and refer to the same type in different parts of our code. 
   Type aliases provide better readability, organization, and abstraction of complex types.

   -> Similar to Interface
*/

// For type alias use Uppercase first letter
type Person = {
   name: string;
   age: number;
   isStudent: false;
   class?: number
   address: {
      city: string;
      country: string;
   };
}



const person3: Person = {
   name: 'MUKUL PAUL',
   age: 25,
   isStudent: false,
   address: {
      city: "Kokrajhar",
      country: "INDIA"
   }
}

console.log(person3)