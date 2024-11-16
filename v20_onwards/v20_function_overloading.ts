

/*
   when we use generic and non generic type together then while calling the function we need to defined
   the type in a manner but with non generic we don't
*/

// Normal Function
// function add(a: number, b: number): number;

// function add(a: string, b: string): string;

// function add(a: any, b: any): any {
//    return a + b;
// }




// Generic
function add <Type1, Type2> (a: Type1, b: Type2): void {
   console.log(typeof a)
   console.log(typeof b)
}

const result1= add <number, string> (5, "thapa");
const result2= add("thapa", 5);
