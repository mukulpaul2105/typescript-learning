let num: number = 10;
console.log(num.toString())


/*
   1. Number
      -> the number type represents numeric values, including integers and floating-point numbers.
      -> the result of any arithmatic operations on numbers also of type number.
*/
let myNum: number = 5;
let myAge: number = 29;
let pi: number = 3.14;

let invalidResult: string = myAge + " years";
console.log(invalidResult);

let computeValue: number = Math.sqrt(16);
console.log(computeValue);

let nanValue = NaN
console.log(nanValue)



/*
 2. String
   -> Any value under single or double quotes are teated as string, 
   -> Also any expresseion result string as output.
*/
let myFName = "Mukul";
let myLName = "Paul";
let myFullName = myFName + " " + myLName;
console.log(myFullName)
console.log(myFullName.length);


/*
   3. Boolean
      -> Represents a value that can be either true or false
*/

const checkEven = (a: number): boolean => {
   return a % 2 === 0;
}

console.log(checkEven(6))


/*
   3. BigInt
      -> allows us to work with nubmers that are larger than the range supported by the regular number type
      -> BigInt literals are written by appending the n suffix to an integer literal
*/

// const bigNumber = BigInt("90071992547409917");
// console.log(bigNumber)


/*
   4. Any
      -> It is the most flexible type in TypeScript.
      -> It essentially turns of all type checking the variables or expressions it is applied to.

      Usecases
      -> Working with Dynamic Data: When dealing with data from dynamic sources like user inputs, 
         network responses, or desrialized JSON objects, the any type can be useful.

      -> Migration from JavaScript: When migrating an existing JavaScript codebase to TypeScript, using the 
         any type can be a convenient way to quickly annotate variables and functions without immediately
         specifying their precise type.
*/
let maxNumber = (Number as any).MAX_SAFE_INTEGER
console.log(maxNumber)

/*
   5. Unknown
      -> This is a safer alternative to any because it still enforces type checking and type safety.
      -> Variables of type unknown can hold values of any type, but you must perform type checks
         or type assertions before using them in specific ways.
      -> as the variable changes it sticks the type w.r.t. the current value
*/

let unknownValue: unknown;
unknownValue = 5;

console.log(typeof unknownValue)
if (typeof unknownValue === "number") {
   console.log(unknownValue + 5)
}

unknownValue = 'Mukul';
console.log(typeof unknownValue)
if (typeof unknownValue === "string") {
   console.log(unknownValue + " Paul")
}