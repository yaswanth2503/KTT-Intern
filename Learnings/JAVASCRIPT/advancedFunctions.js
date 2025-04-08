
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