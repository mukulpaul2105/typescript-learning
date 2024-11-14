
/*
   Enums in TS are commonly used when we want to represent a set of related values and choose one value from multiple options.
   Enums provide a convenient way to define a set of named values and associate them with specific meanings.

   In TS, when enums constants are not explicitly assigned numberic values, they are automatically assigned numeric values 
   starting from 0. The default numeric value for the first enum constant is 0, and subsequent enum constants receive values
   increamented by 1.
*/

enum Roles {
   user = "user",
   admin = "admin"
}

type LoginDetails = {
   name?: string;
   email: string;
   password: string;
   role: Roles
}

const user1: LoginDetails = {
   email: 'mukul@gmail.com',
   password: 'abc@123',
   role: Roles.admin
}

const user2: LoginDetails = {
   email: 'bablu@gmail.com',
   password: 'abc@123',
   role: Roles.user
}

console.log(user1)
console.log(user2)