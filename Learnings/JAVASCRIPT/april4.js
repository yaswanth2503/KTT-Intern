// "use strict";    
// Garbage collection

function marry(man,woman){
    woman.husband = man;
    man.wife = woman;
    return{
        father:man,
        mother:woman
    }
}

let family=marry({
    name:'yash'
},{
    name:'Ann'
});

delete family.father;
delete family.mother.husband;

console.log(family);

// object methods, "this" keyword

let user1={
    name:'John',
    age:20,

    sayHi(){
        console.log(`Hello, my name is ${this.name}`);
    }
}
user1.sayHi();


let user2={name:'Jhon'};
let admin2={name:'Admin'};

function sayHi(){
    console.log(this.name);
}

user2.f=sayHi;
admin2.f=sayHi;

user2.f();
admin2.f(); //dot notation
 
admin2['f'](); //square bracket notation

function Hi(){
    console.log(this);
}
Hi();

let user3={
    name:'Alice',
    Hii(){
        let arr=()=> console.log(this.name);
        arr();
        
    }
};
user3.Hii();


// Constructor , operator new

function User(name){
    this.name='yash';
    this.isAdmin=true;
}

let user4=new User('yash');

console.log(user4.name);
console.log(user4.isAdmin);

//constructor function

let user5=new function(){
    this.name='Alice';
    this.isAdmin=true;
};

console.log(user5.name);
console.log(user5.isAdmin);

// Return from constructor

function BigUser() {

    this.name = "John";
  
    return { name: "Godzilla" };  // <-- returns this object
  }
  
  console.log( new BigUser().name );  // Godzilla, got that object
  
  // Methods in constructor

  function User(name) {
    this.name = name;
  
    this.sayHi = function() {
      console.log( "My name is: " + this.name );
    };
  }
  
  let john = new User("John");
  
  john.sayHi();

  // Optional Chaining

  let user6={};
  console.log(user6?.name);


  let userAdmin = {
    admin() {
      console.log("I am admin");
    }
  };
  
  let userGuest = {};
  
  userAdmin.admin?.(); // I am admin
  
  userGuest.admin?.();


  let key="firstName";
  let user7={
    firstName:'yash',
  }

  let user8=null;

  console.log(user7?.[key]);
  console.log(user8?.[key]);


  // delete user?.name; delete user.name if user exists
   

  // Symbol type -unique identifier

  let id1 = Symbol("id");
  let id2 = Symbol("id");

  console.log(id1 == id2); //false

  let id=Symbol("id");
  console.log(id.toString());

  console.log(id.description); //symbol

 
  let user9={
    name:'Jhon'
  };

  let id3=Symbol("id");
  user9[id3]=1;
  console.log(user9[id3]);
  

  // read from the global registry
let id4 = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
console.log( id4 === idAgain ); // true


let sym1=Symbol.for("name");
let sym2=Symbol.for("id");

console.log(Symbol.keyFor(sym1));
console.log(Symbol.keyFor(sym2));

// Object to primitive conversion

//symbol to primitive

let user10={
    name:'Jhon',
    money:1000,
    [Symbol.toPrimitive](hint){
        console.log(`hint:${hint}`);
        return hint=="string"?`{name:"${this.name}`:this.money;
    }
}

console.log(user10);
console.log(+user10);

console.log(user10+500);



let user11={
    name:'Jhon',
}

console.log(user11);
console.log(user11.valueOf()==user11);

console.log("Value of and to String");
let user12 = {
    name: "John",
    money: 1000,
  
    // for hint="string"
    toString() {
      return `{name: "${this.name}"}`;
    },
  
    // for hint="number" or "default"
    valueOf() {
      return this.money;
    }
  
  };
  
  console.log(user12); // toString -> {name: "John"}
  console.log(+user12); // valueOf -> 1000
  console.log(user12 + 500); // valueOf -> 1500


  // Methods of primitive

  
  let str="Hello";
  console.log(str.toUpperCase());
  console.log(str.toLowerCase());
  console.log(str.charAt(0));   
  console.log(str.slice(1));   
  console.log(str.substring(1,3));   
  console.log(str.indexOf("l"));   
  console.log(str.lastIndexOf("l"));   
  console.log(str.includes("l"));   
  console.log(str.startsWith("H"));                       
  console.log(str.endsWith("o"));
  
  let num=10.1234;
  console.log(num.toFixed(2));
  console.log(num.toPrecision(2));
  console.log(num.toString(2));
            
 
  let num1=1000000000;
  let num2=1_000_000_000;
  console.log(num1===num2);

  console.log(0xff); // 15*16^0+15*16^1 255
  console.log(0xFF); // 255

  console.log(0b11111111); // 255
  console.log(0o377); // 255

  let num3=255;
  console.log(num3.toString(16));
  console.log(num3.toString(2));
 
  let num4=3.24567;
  console.log(Math.floor(num4));
  console.log(Math.ceil(num4));
  console.log(Math.round(num4));
  console.log(Math.trunc(num4));

  console.log(Math.round(num4*100)/100); //324.567->324.57->325->3.25
  console.log(num4.toFixed(1));

  /* a nummber represented in 64-bit format
  52-digits
  11-decimal points
  1-sign bit
  */

  console.log(0.1+0.3==0.4);
  console.log(0.1+0.2==0.3);

  console.log(0.1.toString(2));
  console.log(0.2.toString(2))
  console.log((0.1 + 0.2).toString(2));


  console.log(isNaN(NaN));
  console.log(isNaN("str"));
  console.log(NaN===NaN);
  console.log(isNaN("str"/2));


  console.log(isFinite('15'));
  console.log(isFinite('str'));
  console.log(isFinite(Infinity));
  
  console.log( Number.isFinite("123") ); // false, because "123" belongs to the string type, not the number type
  console.log( isFinite("123") ); // true, because isFinite converts string "123" into a number 123
  
  console.log(+"100px");
  console.log(parseInt("100px"));
  console.log(parseFloat("12.5rem"));

  console.log(parseInt("12.3"));
  console.log( parseFloat('12.3.4'));

  console.log(parseInt('a123')); //NaN

  console.log( parseInt('0xff', 16) ); // 255
  console.log( parseInt('ff', 16) ); // 255, without 0x also wconsole.log
  console.log( parseInt('2n9c', 36) ); // 123456
 
  console.log( Math.random() );
  console.log( Math.max(3, 5, -10, 0, 1) ); // 5
  console.log( Math.min(1, 2) ); // 1 
  console.log( Math.pow(2, 10) ); 



  

  













