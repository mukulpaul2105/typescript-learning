
const fruits: string[] = ['apple', 'banana', 'orange', 'mango']

const newUpdateFruits = fruits.push('Kiwi') // returns index of the newly added element.
console.log(newUpdateFruits)
console.log(fruits)

console.log()

const lastData = fruits.pop()
console.log(lastData)
console.log(fruits)

console.log("for loop")

for (let i = 0; i < fruits.length; i++) {
   console.log(fruits[i])
}

console.log("for in")

for (const idx in fruits) {
   console.log(fruits[idx])
}


console.log("for of")

for (const fruit of fruits) {
   console.log(fruit)
}

console.log("for each")
fruits.forEach(fruit => console.log(fruit))


console.log("Map")
const nums: number[] = [1, 2, 3, 4, 5, 6, 7]

const mulBy2 = nums.map((number: number) => number * 2)
console.log(mulBy2)

