
// Recursion and Stack

function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }
  
  console.log( pow(2, 3) ); // 8

  let company = { // the same object, compressed for brevity
    sales: 
    [
        {name: 'John', salary: 1000},
        {name: 'Alice', salary: 1600 }
    ],
    development: {
      sites: 
    [
        {name: 'Peter', salary: 2000}, 
        {name: 'Alex', salary: 1800 }
    ],
      internals: 
      [
        {name: 'Jack', salary: 1300}
    ]
    }
  };
  
  // The function to do the job
  function sumSalaries(department) {
    if (Array.isArray(department)) { // case (1)
      return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
    } else { // case (2)
      let sum = 0;
      for (let subdep of Object.values(department)) {
        sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
      }
      return sum;
    }
  }
  
  console.log(sumSalaries(company)); // 7700



  // Rest parameters and spread syntax

  function showName(firstName, lastName, ...titles) {
    console.log( firstName + ' ' + lastName ); // Julius Caesar
  
    // the rest go into titles array
    // i.e. titles = ["Consul", "Imperator"]
    console.log( titles[0] ); // Consul
    console.log( titles[1] ); // Imperator
    console.log( titles.length ); // 2
  }
  
  showName("Julius", "Caesar", "Consul", "Imperator");


  // Spread syntax(...)

  let arr = [3, 5, 1];

 console.log( Math.max(...arr) ); 

 let arr1 = [1, -2, 3, 4];
 let arr2 = [8, 3, -8, 1];

 console.log( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25

 let arr3 = [3, 5, 1];
let arr4 = [8, 9, 15];

let merged = [0, ...arr3, 2, ...arr4];

console.log(merged);

// Copy an array/object

let arr5 = [1, 2, 3];

let arrCopy = [...arr5]; 


console.log(JSON.stringify(arr5) === JSON.stringify(arrCopy)); // true


console.log(arr5 === arrCopy); // false )

// modifying our initial array does not modify the copy:
arr.push(4);
console.log(arr); // 1, 2, 3, 4
console.log(arrCopy); // 1, 2, 3

// Also we can copy an object:


// Variable scope, closure

{
    let x=10;
    console.log(x);;
    
}
// console.log(x); =>error;

// Nested Fucntions
function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  console.log( counter() ); // 2


  // Global Object

//   window.alert("Hello from global scope!");
//   var gVar = 5;

//  alert(window.gVar)

//  let gLet = 5;

// alert(window.gLet); // undefined 
if (!window.Promise) {
  alert("Your browser is really old!");
}


// Function object, NFE

function sayHi() {
  alert("Hi");
}

console.log(sayHi.name); // sayHi


function f(sayHi = function() {}) {
  console.log(sayHi.name); // sayHi (works!)
}

f();

function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

console.log(f1.length); // 1
console.log(f2.length); // 2
console.log(many.length); // 2



// for example

function add(a,b){
  
  return a+b;
}

add.sub=(a,b)=>a-b;

console.log(add(2,3)); 
console.log(add.sub(3,2)); 
// delete add.sub;
// console.log(add.sub); // undefined
console.log(add.length); // 2
console.dir(add); // 


// Named function expressions
let sayHii = function func(who) {
  console.log(`Hello, ${who}`);
};

sayHii("John"); // Hello, John

let sayHiii = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    func("Guest"); // Now all fine
  }
};

let welcome = sayHiii;
sayHiii = null;

welcome(); // Hello, Guest (nested call works)


// new function syntax
// let func = new Function ([arg1, arg2, ...argN], functionBody);

let sum = new Function('a', 'b', 'return a + b');

console.log( sum(1, 2) ); // 3


// SetTimeout
// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)

// function sayHi(phrase, who) {
//   console.log( phrase + ', ' + who );
// }

// setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John

 // setTimeout(() => alert('Hello'), 1000);

// let timerId=setTimeout(()=>console.log("Hello"),1000);
// console.log(timerId);
// clearTimeout(timerId);

 // SetInterval
// let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)

// repeat with the interval of 2 seconds
// let timerId1 = setInterval(() => console.log('tick'), 2000);

// after 5 seconds stop
// setTimeout(() => { clearInterval(timerId1); console.log('stop'); }, 5000);

// setTimeout(() => {  console.log('hi'); }, 5000);

// Zero delay SetTimeout

// setTimeout(() => alert("World"));

 // alert("Hello");

