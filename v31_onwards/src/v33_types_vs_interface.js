// ?  Types
// ?     -> Use custom types when we need unions, intersections, or mapped types.
// ?     -> Custom types can use unions and intersections for more complex type compositions.
var typeBioData = {
    name: "Mukul",
    age: 26,
    city: "Kokrajhar",
    state: "Assam",
};
console.log(typeBioData);
// const interfaceBio: InterfaceData = {
//    name: "Debajeet",
//    age: 19,
//    city: "Kokrajhar",
//    state: "Assam",
// }
// console.log(interfaceBio)
// ? or
var BioData = /** @class */ (function () {
    function BioData(name, age, city, state) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.state = state;
    }
    return BioData;
}());
var classBio = new BioData("Debajeet", 19, "Kokrajhar", "Assam");
console.log(classBio);
