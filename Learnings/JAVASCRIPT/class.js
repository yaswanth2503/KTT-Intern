
// Class basic syntax

// class MyClass {
//      class methods
//     constructor() { ... }
//     method1() { ... }
//     method2() { ... }
//     ...
//   }


 class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    sayHi(){
        return `Hi ${this.name}, you are ${this.age} years old.`;
    }
}
let person=new Person("Yaswanth",22);
console.log(person.sayHi());
console.log(typeof Person); //function


console.log(Person === Person.prototype.constructor); // true

// The methods are in User.prototype, e.g:
console.log(Person.prototype.sayHi); // the code of the sayHi method


console.log(Object.getOwnPropertyNames(Person.prototype)); // constructor, sayHi


// class can be named as a function and expression

let User = class MyClass {
    sayHi() {
      console.log(MyClass); // MyClass name is visible only inside the class
    }
  };
  
  new User().sayHi(); // works, shows MyClass definition
  
// console.log(MyClass); error


function makeClass(phrase) {
    // declare a class and return it
    return class {
      sayHi() {
        console.log(phrase);
      }
    };
  }
  
  // Create a new class
  let User1 =  makeClass("Hello");
  
  new User1().sayHi(); // Hello



  class User2 {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  
  let user = new User2("John");
  console.log(user.name); // John
  
  user = new User2("");

// computed names
  class User3 {

    ['say' + 'Hi']() {
      console.log("Hello");
    }
  
  }
  
  new User3().sayHi();

 
  class User4 {
    name = "John";
  }
  
  let user4 = new User4();
  console.log(user4.name); // John
  console.log(User4.prototype.name); // undefined



  class Button {
    constructor(value) {
      this.value = value;
    }
    click = () => {
      console.log(this.value);
    }
  }
  
  let button = new Button("hello");
  
  setTimeout(button.click, 1000); // hello


