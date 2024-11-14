var fruits = ['apple', 'banana', 'orange', 'mango'];
var newUpdateFruits = fruits.push('Kiwi'); // returns index of the newly added element.
console.log(newUpdateFruits);
console.log(fruits);
console.log();
var lastData = fruits.pop();
console.log(lastData);
console.log(fruits);
console.log("for loop");
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
console.log("for in");
for (var idx in fruits) {
    console.log(fruits[idx]);
}
console.log("for of");
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log(fruit);
}
console.log("for each");
fruits.forEach(function (fruit) { return console.log(fruit); });
console.log("Map");
var nums = [1, 2, 3, 4, 5, 6, 7];
var mulBy2 = nums.map(function (number) { return number * 2; });
console.log(mulBy2);
