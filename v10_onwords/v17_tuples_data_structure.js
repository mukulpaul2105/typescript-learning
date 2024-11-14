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
var person4 = ['Mukul', 25, true];
var displayPersoninfo = function (person) {
    var name = person[0], age = person[1], hasDrivingLicence = person[2];
    console.log("Name: ".concat(name, ", Age: ").concat(age, ", Driver's Licence: ").concat(hasDrivingLicence ? "yes" : "no"));
};
displayPersoninfo(person4);
