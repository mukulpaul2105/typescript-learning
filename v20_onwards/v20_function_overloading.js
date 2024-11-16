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
function add(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}
var result1 = add(5, "thapa");
var result2 = add("thapa", 5);
