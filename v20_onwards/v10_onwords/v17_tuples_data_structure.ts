
/*
   Tuples are a data structure that allows us to store a fixed-size collection of elements of different types. 
   They are similar to arrays, but with a key difference: the types of elements in a tuple are fixed and
   declared at the time of creation, whereas arrays can hold elements of the smae type, and their size can vary.

   order matters

   Example
   Let's consider a scenario where we want to represent a person's basic information, including their name, age
   and whether they have a driver's license. Using a tuple can be an appropriate choice because these three
   elements have a specific order and type
*/

type PersonInfo = readonly [string, number, boolean] // readonly ensures the tupple should have only these 3 values not more thant that

const person4: PersonInfo = ['Mukul', 25, true]

const displayPersoninfo: (person: PersonInfo) => void = (person: PersonInfo): void => {
   const [name, age, hasDrivingLicence] = person;
   console.log(`Name: ${name}, Age: ${age}, Driver's Licence: ${hasDrivingLicence ? "yes": "no"}`)
}

displayPersoninfo(person4)