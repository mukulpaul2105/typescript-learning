"use strict";
/*
   A typeof guard in TS lets us narrow down the type of a vairable based on its runtime value.
   In TS, type narrowing allows us to write type-save code by ensuring us only operate on the correct type under certain circumtances.
   this is particularly useful with unionn types and generic types.
*/
const favHobbies = (hobbies) => {
    // return hobbies.map(() => {})
    // Type guard
    if (typeof hobbies === "object" && Array.isArray(hobbies)) {
        return hobbies.filter((hobby) => hobby.includes('ng'));
    }
    else {
        return hobbies;
    }
};
console.log(favHobbies("coding"));
const arr = ["coding", "painting", "singing"];
const favHob = favHobbies(arr);
console.log(favHob);
