// prototype and inheritance

let user1={
    name:"Yash"
}

let userAge={
    age:22
}

user1.__proto__=userAge;

console.log(user1.age);
console.log(user1.name);

let user2={
    name:"Yash",
    age:22,
    Work(){
        console.log(`${this.name} is working as intern in KT_telematics`)
    }
}

let userId={
    id:613,
    __proto__:user2
}

userId.Work();


let animal = {
    eats: true,
    walk() {
      console.log("Animal walk");
    }
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  
  let longEar = {
    earLength: 10,
    __proto__: rabbit
  };
  
  longEar.walk(); // Animal walk
  console.log(longEar.jumps); // true (from rabbit)


  let animal1= {
    eats: true,
    walk() {
      /* this method won't be used by rabbit */
    }
  };
  
  let rabbit1 = {
    __proto__: animal1
  };
  
  rabbit1.walk = function() {
    console.log("Rabbit! Bounce-bounce!");
  };
  
  rabbit1.walk(); 


  let user3={
    firstName:"Yash",
    lastName:"Kumar", 
    set fullName(value){
        [this.firstName,this.lastName]=value.split(" ");
    },

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    
}

 let admin={
    age:22,
    __proto__:user3
 }

 console.log(admin.fullName);

 admin.fullName="Yaswanth Kumar";
 console.log(admin.fullName);
 console.log(user3.fullName);
 
 console.log(Object.keys(admin));
 console.dir(Object.keys(admin));

 for(let key in admin){
    console.log(key);
 }

console.log("-------");

 for(let prop in admin) {
    let isOwn = admin.hasOwnProperty(prop);
  
    if (isOwn) {
      console.log(`admin: ${prop}`); // 
    } else {
      console.log(`Inherited: ${prop}`);
  }
}
 
    
// F.prototype

let animal2 = {
    eats: true
  };
  
  function Rabbit(name) {
    this.name = name;
  }
  
  Rabbit.prototype = animal2;
  
  let rabbit2 = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
  
  console.log( rabbit2.eats ); // true
  console.log( rabbit2.name ); // White Rabbit

//   Default F.prototype, constructor property

function Rabbit1() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

console.log( Rabbit1.prototype.constructor == Rabbit1 ); // true

function Fruit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

let fruit = new Fruit(); // inherits from {constructor: Rabbit2}

console.log(fruit.constructor == Fruit); // true (from prototype)

console.log("-----------");

// Native prototypes

// object.prototype
let obj = {};

console.log(obj.__proto__ === Object.prototype); // true
console.log(obj.toString === obj.__proto__.toString); //true
console.log(obj.toString === Object.prototype.toString); //true

console.log(Object.prototype.__proto__); // null
// Object.prototype is the top of the prototype chain, it doesn't inherit from anything


let arr = [1, 2, 3];
console.dir(arr);

// it inherits from Array.prototype?
console.log( arr.__proto__ === Array.prototype ); // true

// then from Object.prototype?
console.log( arr.__proto__.__proto__ === Object.prototype ); // true

// and null on the top.
console.log( arr.__proto__.__proto__.__proto__ ); // null


String.prototype.show = function() {
    console.log(this);
  };
  
  "BOOM!".show(); // BOOM!


  // borrowing from prototypes

  let obj1 = {
    0: "Hello",
    1: "world!",
    length: 2,
  };
  
  obj1.join = Array.prototype.join;
  
  console.log( obj1.join(',') ); // Hello,world!

  // Prototype methods, objects without __proto__

/*
The modern methods to get/set a prototype are:

Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.
*/

let animal4 = {
    eats: true
  };
  
  // create a new object with animal as a prototype
  let rabbit4 = Object.create(animal4); // same as {__proto__: animal}
  
  console.log(rabbit4.eats); // true
  
  console.log(Object.getPrototypeOf(rabbit4) === animal4); // true
  
  Object.setPrototypeOf(rabbit4, {}); // change the prototype of rabbit to {}

  console.log(rabbit4.eats); // undefined  



  let obj3 = {};

let key = prompt("What's the key?", "__proto__");
obj3[key] = "some value"; // primitive has no prototype in js so it ignores the __proto__ property

console.log(obj3[key]); // [object Object], not "some value"!