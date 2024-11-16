const person = {
   name: 'MUKUL PAUL',
   age: 25,
   isStudent: false,
   address: {
      city: "Kokrajhar",
      country: "INDIA"
   }
}

console.log(person.address.country)

person.address.country = 'THAILAND'
console.log(person.address.country)




const person2: {
   name: string;
   age: number;
   isStudent: boolean;
   address: {
      city: string;
      country: string
   }
} = {
   name: 'MUKUL PAUL',
   age: 25,
   isStudent: false,
   address: {
      city: "Kokrajhar",
      country: "INDIA"
   }
}

console.log(person2)