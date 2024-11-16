
// ?  Types
// ?     -> Use custom types when we need unions, intersections, or mapped types.
// ?     -> Custom types can use unions and intersections for more complex type compositions.

// ?  Interface
// ?     -> use interface when defining object shapes or classes that adhere to a contract
// ?     -> Interface can extend other interfaces to inherit their members.

//? Type
type TypeStud = {
   name: string;
   age: number;
}

type TypeStudAdd = {
   city: string;
   state: string;
}

type TypeData =  TypeStud | TypeStudAdd


const typeBioData: TypeData = {
   name: "Mukul",
   age: 26,
   city: "Kokrajhar",
   state: "Assam",
}

console.log(typeBioData)


//? Interface
interface IntefaceStud {
   name: string;
   age: number;
}

interface InterfaceStudAdd {
   city: string;
   state: string;
}

interface InterfaceData extends IntefaceStud, InterfaceStudAdd {}


// const interfaceBio: InterfaceData = {
//    name: "Debajeet",
//    age: 19,
//    city: "Kokrajhar",
//    state: "Assam",
// }

// console.log(interfaceBio)

// ? or

class BioData implements InterfaceData {
   constructor (
      public name: string,
      public age: number,
      public city: string,
      public state: string
   ) { }
}

const classBio = new BioData(
      "Debajeet",
      19,
      "Kokrajhar",
      "Assam",
   )

console.log(classBio)