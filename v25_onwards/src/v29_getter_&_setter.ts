

/*
   We can use getter and setter methods control the acess and modification of class properties.
   Getter methods allow us to retrieve the value of a propertiy, while setter methods allow us
   to set the value of a property with additional logic or validation.
*/

class Person5 {
   private _age: number | undefined;

   constructor (
      private _name: string,
      private _hobies: string[]
   ) { }

   public set age (age: number) {
      if (age > 120 || age < 0) {
         throw new Error('Age must be between 0 and 120');
      }
      this._age = age;
   }

   public get age (): number {
      if (this._age === undefined) {
         throw new Error('age is not defined')
      }
      return this._age;
   }

   introduceParent ():string {
      return `Hi, I'm ${this._name} and I'm ${this._age} years old. I love ${this._hobies.join(', ')}`;
   }
}

const rahul: Person5 = new Person5("Rahul", ["Reading", "Painting"]);
console.log(rahul.introduceParent());
rahul.age = 14;
console.log(rahul.introduceParent());