
// Strings

let guestList1 = `Guests:
 * John
 * Pete
 * Mary
`;
console.log(guestList1);

let guestList2 = "Guests:\n * John\n * Pete\n * Mary";

console.log(guestList2);
console.log(`length:${guestList2.length}`);

console.log('I\'m the Walrus!' );

let str = `Hello`;

// the first character
console.log( str[0] ); // H
console.log( str.at(0) ); // H

// the last character
console.log( str[str.length - 1] ); // o
console.log( str.at(-1) );
console.log( str[-2] ); // undefined
console.log( str.at(-2) ); // l

for (let char of str) {
    console.log(char);
}


/* 
Strings are immutable
let str = 'Hi';

str[0] = 'h'; // error
alert( str[0] ); 

*/

//we can replace the character

let str2 = 'Hello bro';
str2 = str2.replace('H', 'h');
console.log(str2);
str2='H'+str2.slice(1);
console.log(str2);
console.log(str2[1].toUpperCase())
console.log(str2.toUpperCase());
console.log(str2.toLowerCase());
console.log(str2.indexOf('llo'));
console.log(str2.indexOf('abc'));
console.log(str2.indexOf('l', 3));
console.log(str2.includes('bro'));
console.log(str2.includes('bye'));


let str3 = "stringify";
console.log( str3.slice(0, 5) );
console.log( str3.slice(0) );
console.log( str3.slice(-4, -1) );

console.log( str3.substring(0, 5) );
console.log( str3.substring(2, 6) );
console.log( str3.substring(6, 2) ); // js swaps which is greater start<end here start=end end=start

console.log( str3.substring(-2 )); // single negative index not allowed here it returns the original string

console.log( str3.substr(-4, 2) ); // 'gi', from the 4th position get 2 characters
console.log(str3.substr(-1)); // y

console.log("hi");

console.log(str3.substr(2,-1)); // does not work ,only start with negative works

// Compare strings
console.log('a' > 'Z' ); // true
console.log('Österreich' > 'Zealand'); //true   214>90



console.log( "Z".codePointAt(0) ); // 90
console.log( "z".codePointAt(0) ); // 122
console.log( "z".codePointAt(0).toString(16) ); // 122->0x7a

console.log( String.fromCodePoint(90) ); // Z
console.log( String.fromCodePoint(0x5a) ); // Z

console.log('Österreich'.localeCompare('Zealand')); //-1

let str4="  Hello World  ";
console.log(str4);
console.log(str4.trim());
console.log(str4.repeat(3));


// Arrays

let arr = new Array();
// let arr = [];

let fruits = ["Apple", "Orange", "Plum"];

console.log(fruits[2]);
fruits[2] = "Pear";
console.log(fruits[2]);
console.log(fruits.length);
console.log(fruits);
console.log(fruits[fruits.length-1]);
console.log( fruits.at(-1) );



let login=["login",{"name":"yash","password":"123456"},function(){console.log("Login Successful")}];
console.log(login[2]());

let cart=['oppo','samsung','vivo','one plus'];
console.log(cart);
cart.push('iphone');
cart.pop();
console.log(cart);
cart.unshift('xiaomi'); // adding at the beginning
console.log(cart);
cart.shift(); // removing from the beginning
console.log(cart);
cart.push('xiomi','realme');
cart.unshift('nokia');
console.log(cart);


let fruits1 = ["Banana"]

let arr1 = fruits1; // copy by reference (two variables reference the same array)

console.log( arr1 === fruits1 ); // true

arr1.push("Pear"); // modify the array by reference

console.log( fruits1 ); // Banana, Pear - 2 items now
console.log( arr1 ); // Banana, Pear - 2 items now


let fruits2 = ["Apple", "Orange", "Plum"];

for (let fruit of fruits2) {
  console.log( fruit );
}

let fruits3 = [];
fruits3[123] = "Apple";

console.log( fruits3.length ); // 124

let arr2 = [1, 2, 3, 4, 5];

arr2.length = 2; // truncate to 2 elements
console.log( arr2 ); // [1, 2]

arr2.length = 5; // return length back
console.log( arr2[3] ); // undefined: the values do not return

/*
another way to declare a array
let arr = new Array("Apple", "Pear", "etc");
*/

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
console.log( matrix[0][1] );


let arr3 = [1, 2, 3];

console.log( arr3 ); // 1,2,3
console.log( String(arr3) === '1,2,3' ); // true


console.log( [] + 1 ); // "1"
console.log( [1] + 1 ); // "11"
console.log( [1,2] + 1 ); // "1,21"

console.log( "" + 1 ); // "1"
console.log( "1" + 1 ); // "11"
console.log( "1,2" + 1 ); // "1,21"

console.log( 0 == '' ); //true
console.log('0' == '' ); //false
console.log( 0 == [] ); //true
console.log('0' == [] ); //false

//splice method

let arr4=["I","am","a","javascript"];
delete arr4[1]; //it just deletes the reference not the value,now arr4[1] becomes undefined
console.log(arr4);
console.log(arr4.length);
arr4.splice(1,2,"do","not","study");  //3,1 means remove 2 element from index 1 and prepend "do","not","study" and return it
console.log(arr4); // I do not study javascript
arr4.splice(4,0,"complex");
console.log(arr4); 


let arr5 = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr5.splice(-1, 0, 3, 4); // negative indexing allowed

console.log( arr5 ); // 1,2,3,4,5

//slice method

let arr6 = ["t", "e", "s", "t"];

console.log( arr6.slice(1, 3) ); 
console.log( arr6.slice(-2) );

// concat method

let result=arr6.concat([1,2]);
result=result.concat([3,4]);
result=result.concat([5,6]);
console.log(arr6);
console.log(result);

// foreach method

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
  });

  let arr7 = [1, 0, false];

console.log( arr7.indexOf(0) ); // 1
console.log( arr7.indexOf(false) ); // 2
console.log( arr7.indexOf(null) ); // -1
console.log( arr7.includes(1) ); // true

let fruits4 = ['Apple', 'Orange', 'Apple']

console.log( fruits4.indexOf('Apple') ); // 0 (first Apple)
console.log( fruits4.lastIndexOf('Apple') ); // 2 (last Apple)
console.log(fruits4.map(item=>item.length));

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  let user = users.find(item => item.id == 1);
  
  console.log(user.name); // John

  let users1 = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "John"}
  ];
  
  // Find the index of the first John
  console.log(users1.findIndex(user => user.name == 'John')); // 0
  
  // Find the index of the last John
  console.log(users1.findLastIndex(user => user.name == 'John')); // 3

  let users2 = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  // returns array of the first two users
  let someUsers = users2.filter(item => item.id < 3);
  
  console.log(someUsers.length); // 2

  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }

let num=[4,2,1,3,0,7];
console.log(num.sort(compareNumeric));

let arr8 = [ 1, 2, 15 ];

arr8.sort(function(a, b) { return a - b; });
// arr8.sort(); not allowed

console.log(arr8);  // 1, 2, 15
arr8.reverse();
console.log(arr8);  // 15, 2, 1

let names = 'Bilbo, Gandalf, Nazgul';

let ar = names.split(', ');

for (let name of ar) {
  console.log( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}

let arr9 = [1, 2, 3, 4, 5];

let result2 = arr9.reduce((sum, current) => sum + current);

console.log(result2); // 15 
console.log(typeof arr9);

console.log(Array.isArray({})); // false

console.log(Array.isArray([])); // true 




let map=new Map();
map.set("key1","value1");
map.set("key2","value2");
map.set("key3","value3");
map.set("key4","value4");

for (let [key, value] of map) {
  console.log(`${key}: ${value}`);
}



















