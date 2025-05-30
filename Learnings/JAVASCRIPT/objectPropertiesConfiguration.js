
// "use strict";
// Property flags and descriptors

// let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

let user = {
    name: "John"
  };
  
  let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  
  console.log( JSON.stringify(descriptor, null, 2 ) );

  // Object.defineProperty(obj, propertyName, descriptor)

  let user1 = {};

Object.defineProperty(user1, "name", {
  value: "John"
});

let descriptor1 = Object.getOwnPropertyDescriptor(user1, 'name');

console.log( JSON.stringify(descriptor1, null, 2 ) );

//Non writable
// let user3 = {
//     name: "John"
//   };
  
//   Object.defineProperty(user, "name", {
//     writable: false
//   });
  
//   user.name = "Pete"; error

// Non enumerable
let user4 = {
    name: "John",
    toString() {
      return this.name;
    }
  };
  
  Object.defineProperty(user4, "toString", {
    enumerable: false
  });
  
  // Now our toString disappears:
  for (let key in user4) console.log(key); // name


// Non configurable
//   let user5 = {
//     name: "John"
//   };
  
//   Object.defineProperty(user5, "name", {
//     configurable: false
//   });
  
//   user5.name = "Pete"; // works fine
//   delete user5.name; // Error



  
// Object.defineProperties(user, {
//     name: { value: "John", writable: false },
//     surname: { value: "Smith", writable: false },
//     ...
//   });


// Getter and Setter
let user6 = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };
  
  console.log(user6.fullName); // John Smith


  let user7 = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    },
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    }
  };
  
  // set fullName is executed with the given value.
  user7.fullName = "Alice Cooper";
  
  console.log(user7.name); // Alice
  console.log(user7.surname); // Cooper