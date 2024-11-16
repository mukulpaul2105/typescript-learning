"use strict";
/*
   Static Properties & methods
   Static properties and methods belong to the class itself rather than to instances of the class.
   by making methods and properties static, we can access them directly from the class without needing to
   create an instance of the class. this is useful for utility functions or properties that don't rely on
   instance-specific data.

   Example: Math Operations Utility - createing a utility class to perform various mathematical operations.
*/
class MathOperations {
    static add(num1, num2) { return num1 + num2; }
    static sub(num1, num2) { return num1 - num2; }
}
MathOperations.PI = Math.PI;
console.log(MathOperations.add(5, 6));
console.log(MathOperations.sub(11, 6));
