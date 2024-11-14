/*
   If their is no return statement then by default return type becomes void
   If their is return statement then return type changes based on that
*/

function great(name: string, id: number): object {
   return{key: `Welcome, ${name}, and your id is ${id}`};
}

console.log(great("Mukul", 1101))




const greatArrow = (name: string, id: number): string => {
   return `Welcome, ${name}, and your id is ${id}`;
}

console.log(greatArrow("Mukul", 1101))