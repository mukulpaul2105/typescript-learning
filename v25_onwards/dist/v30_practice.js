"use strict";
/*
   Bank Account Balance
   -> Create a TS class Bank Account with a private property _balance initialized to 0.
   -> Implement a getter method balance that returns the current balance.
   -> Implement a setter method balance that updates the balance if the new value is non-negative.
      Otherwise, log an error message.
   -> Instantiate an object of the Bank Account class.
   -> use the setter to set the balance to 1000 and use the getter to display the updated balance.
   -> Try setting a negative balance using the setter. What output do you expect?
*/
class BankAccount {
    constructor(_name, _accNumber) {
        this._name = _name;
        this._accNumber = _accNumber;
        this._balance = 0;
    }
    set balance(amount) {
        if (amount >= 0) {
            this._balance += amount;
        }
        else {
            throw new Error("Amount should a positive number");
        }
    }
    get balance() {
        return this._balance;
    }
}
const arunAcc = new BankAccount("Arun", 11223344);
console.log(arunAcc);
arunAcc.balance = 1000;
console.log(arunAcc.balance);
// arunAcc.balance = -110
console.log(arunAcc);
/*
   Temperature Converter
   -> Define a TS class Temperature with a private property _celsius set to 0.
   -> Implement a getter method celsius that returns the temperature in celcius.
   -> Implement a setter method celsius that sets the temperature in celsius.
   -> Implement a getter method fehrenheit that converts Celsius to Fahrenheit using the formula (C * 9/5) + 32.
   -> Implement a setter method fahrenheit that converts Fahrenheit to Celsius using the formula (F - 32) * 5/9.
   -> Create an instance of the Temperature class.
   -> Use the setter to set the temperature in Celsius to 25 and then use the getter for Fahrenheit.
      What Fahrenheit value do you expect?
   -> Use the setter to set the temperature in Fahrenheit to 98.6 and then use the getter for Celsius.
      What Celsius value do you expect ?
*/
class Temperature {
    constructor(place) {
        this.place = place;
        this._celsius = 0;
    }
    get celsius() {
        return this._celsius;
    }
    set celsius(temp) {
        this._celsius = temp;
    }
    get getTempInFar() {
        return (this._celsius * (9 / 5)) + 32;
    }
    set setTempFromFar(temp) {
        this._celsius = (temp - 32) * (5 / 9);
    }
}
const kokrajhar = new Temperature("Kokrajhar");
console.log(kokrajhar);
kokrajhar.celsius = 25;
console.log(kokrajhar.getTempInFar);
kokrajhar.setTempFromFar = 98.6;
console.log(kokrajhar.celsius);
