/*
   An Interface is a powerful feature that allows us to define a contract for an object's shape.
   It specifies the properties and their types that an object must have to be considered of that
   particular interface type. interfaces are primarily used for type-checking during development
   and do not generate any JavaScript code at runtime.

   Similar to type alias
   type in alias is used in older version and interface is the newer feature added in TypeScript
*/
var person6 = {
    name: "Mukul 25Paul",
    age: 25
};
var createPerson = function (person) {
    return {
        name: person.name || "",
        age: person.age || 0,
        city: person.city || "Kokrajhar"
    };
};
var person = createPerson({
    name: "Mukul Paul",
    age: 25
});
console.log(person);
