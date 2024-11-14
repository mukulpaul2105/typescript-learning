
// Normal JS code
// const sumJS = (a, b) => {
//     return a + b;
// };

// console.log(sumJS(5, "mukul"))


// Same code in TS
const sumTS = (a: number, b: number): number => {
    return a + b;
};

const result = sumTS(4, 7);
console.log(result)