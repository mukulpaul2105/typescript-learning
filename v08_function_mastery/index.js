/*
   If their is no return statement then by default return type becomes void
   If their is return statement then return type changes based on that
*/
function great(name, id) {
    return { key: "Welcome, ".concat(name, ", and your id is ").concat(id) };
}
console.log(great("Mukul", 1101));
var greatArrow = function (name, id) {
    return "Welcome, ".concat(name, ", and your id is ").concat(id);
};
console.log(greatArrow("Mukul", 1101));
