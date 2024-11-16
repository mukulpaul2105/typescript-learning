/*
   the function call signature refers to the declaration or definition of a function,
   which includes the function's name, parameters, and return type.
   It defines the structure and type information of a function without including the function's
   implementation or body.

   Call signatures are typically used inside object type notations to describe the shape of functions within object types.
*/
var student1 = {
    name: "Mukul",
    age: 25,
    great: function (country) { return "Welcome, My name is ".concat(this.name, ", I am ").concat(this.age, "yrs old & I am from ").concat(country); }
};
console.log(student1.great("India"));
var student2 = {
    name: "Mukul",
    age: 25,
    great: function (country) {
        if (country === void 0) { country = "India"; }
        return "Welcome, My name is ".concat(student2.name, ", I am ").concat(student2.age, "yrs old & I am from ").concat(country);
    }
};
console.log(student2.great("Bhutan"));
console.log(student2.great());
var introduction = function (student) {
    var name = student.name, age = student.age;
    return "Welcome, My name is ".concat(name, ", I am ").concat(age, "yrs old");
};
console.log(introduction(student1));
