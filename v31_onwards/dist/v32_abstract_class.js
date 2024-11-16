"use strict";
/*
   Abstract classes provide a way to define common properties and methods that multiple derived classes can share.
   This promotes code reuse and helps establish a common interface for related classes.

   Note:
      -> Abstract classes cannot be instantiated
      -> abstract classes focus on class inheritance and sharing common functionality,
         whereas the useContext hook in React focuses on managing global state and allowing components to consume
         that state.

   Example: Shape Hierarchy
      Suppose we're bu9lding a graphics application, and we want to create a hierarchy of different shapes.
      We can use an abstract base class shape to define common properties and methods that all shapes share.
*/
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.color = color;
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius;
    }
    displayArea() {
        console.log(`This is a ${this.color} circle with radius ${this.radius}`);
    }
}
const circle = new Circle("red", 5);
console.log(circle.calculateArea());
console.log(circle.displayArea());
