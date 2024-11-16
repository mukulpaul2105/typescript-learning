/*
   An Interface is a powerful feature that allows us to define a contract for an object's shape.
   It specifies the properties and their types that an object must have to be considered of that 
   particular interface type. interfaces are primarily used for type-checking during development
   and do not generate any JavaScript code at runtime.

   Similar to type alias
   type in alias is used in older version and interface is the newer feature added in TypeScript
*/

interface Person5 {
   name: string;
   age: number;
}

const person6: Person5 = {
   name: "Mukul 25Paul",
   age: 25
}

// If we want to have default value in interface then
interface Person6 {
   name: string;
   age: number;
   city?: string
}

const createPerson = (person: Person6): Person6 => {
   return {
      name: person.name || "",
      age: person.age || 0,
      city: person.city || "Kokrajhar"
   }
}

const person: Person6 = createPerson({
   name: "Mukul Paul",
   age: 25
})

console.log(person)