
// Iterables

const arr=[1,2,3,4,5];
const arrIter=arr[Symbol.iterator]();

console.log(arrIter.next().value);
console.log(arrIter.next().value);
console.log(arrIter.next().value);
console.log(arrIter.next().value);
console.log(arrIter.next().value);
console.log(arrIter.next());

const iterator=arr[Symbol.iterator]();  
let result=iterator.next();

while(!result.done){
    const element=result.value;
    console.log(element);
    result=iterator.next();
}



// Array.from() method
let str = '𝒳😂';

// splits str into array of characters
let chars = Array.from(str);

console.log(chars[0]); // 𝒳
console.log(chars[1]); // 😂
console.log(chars.length); // 2


// Map
console.log("-------------------Map-------------------");

/*
new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the element (the key/value pair) by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.
*/

let map=new Map();
map.set("name","yash");
map.set("age",22);
map.set("Intern","KT_telematics");
map.set(613,"id");
map.set(true,"boolean");

console.log("size of map:",map.size);
console.log(map.get(true));
console.log(map.has(613));
console.log(map.delete("age"));

for(let mp of map){
    console.log(map.get("Intern"));
}

let john = { name: "John" };
let ben = { name: "Ben" };

let visitsCountObj = {}; // try to use an object

visitsCountObj[ben] = 234; 
visitsCountObj[john] = 123; // try to use john object as the key, ben object will get replaced


console.log( visitsCountObj["[object Object]"] ); // 123


/*
map.keys() – returns an iterable for keys,
map.values() – returns an iterable for values,
map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
*/

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
  
  // iterate over keys (vegetables)
  for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion
  }
  
  // iterate over values (amounts)
  for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
  }
  
  // iterate over [key, value] entries
  for (let entry of recipeMap) { 
    console.log(entry); 
  }

  recipeMap.forEach( (value, key, map) => {
    console.log(`${key}: ${value}`); 
  });


  console.log(recipeMap.keys()); // cucumber tomatoes onion

  let object={
    name:"Yash",
    age:22,
    intern:"KT_telematics"
  }
  let map1=new Map(Object.entries(object));
  console.log(map1.get("name"));

  let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
  ]);
  
  // now prices = { banana: 1, orange: 2, meat: 4 }
  
  console.log(prices.orange); // 2

/*
  Object.entries()
  Converts an object → into an array of [key, value] pairs.

  Object.fromEntries()
  Converts an array of [key, value] pairs → into an object
*/

// Set

/*
new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.
*/
console.log("-------------------Set-------------------");


let set = new Set();

let johnn = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(johnn);
set.add(pete);
set.add(mary);
set.add(johnn);
set.add(mary);


console.log( set.size ); // 3

for (let user of set) {
  console.log(user.name); // John Pete and Mary
}

let sett = new Set(["oranges", "apples", "bananas"]);

for (let value of sett) console.log(value);

// the same with forEach:
sett.forEach((value, valueAgain, sett) => {
  console.log(value);
});

/*
set.keys() – returns an iterable object for values,
set.values() – same as set.keys(), for compatibility with Map,
set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.
  */
 
  
// WeakMap
console.log("-------------------WeakMap-------------------");

/*
occupy only objects as keys, not primitives
WeakMap has only the following methods:

weakMap.set(key, value)
weakMap.get(key)
weakMap.delete(key)
weakMap.has(key)
*/

let weakMap = new WeakMap();

let user = { name: "Alice" };
weakMap.set(user, "private data");
user=null; // removed from memory even cant accsess it with weakMap

console.log(weakMap.get(user)); // false


// WeakSet
console.log("-------------------WeakSet-------------------");
//Like Set, it supports add, has and delete, but not size, keys() and no iterations.
// occupy only objects, not primitives

let weakSet = new WeakSet();

let user1 = { name: "Alice" };
let user2 = { name: "Bob" };
let user3 = { name: "Charlie" };

weakSet.add(user1);
weakSet.add(user2);
weakSet.add(user3); // user1 and user2 are not garbage collected        

console.log(weakSet.has(user1)); // true
console.log(weakSet.has(user2)); // true
console.log(weakSet.has(user3)); // true


// Destructuring Assignment

console.log("-------------------Destructuring Assignment-------------------");

const arr1=["Jack","Sparrow"];
const [firstName,lastName]=arr1;
console.log(firstName);
console.log(lastName);



let [FirstName, surname] = "John Smith".split(' ');
console.log(FirstName); // John
console.log(surname);  // Smith

let user4 = {};
[user4.name, user4.surname] = "John Smith".split(' ');

console.log(user4.name); // John
console.log(user4.surname); // Smith

let user5 = {
    name: "John",
    age: 30
  };


  for (let [key, value] of Object.entries(user5)) {
    console.log(`${key}:${value}`); // name:John, then age:30
  }

  let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest is an array of items, starting from the 3rd one
console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2

// default values
let [name = "Guest", surrname = "Anonymous"] = ["Julius"];

console.log(name);    // Julius (from array)
console.log(surrname); // Anonymous (default used)


// Object Destructuring
console.log("-------------------Object Destructuring-------------------");

let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
  let {title, width, height} = options;
  
  console.log(title);  // Menu
  console.log(width);  // 100
  console.log(height); // 200

 // ...rest is same as above

 //Nested destructuring 
 console.log("-------------------Nested destructuring-------------------");

 let person = {
    name5: "John",
    age: 30,
    address: {
      city: "New York",
      country: "USA"
    }
  };
  
  let {name5, age, address: {city, country}} = person;
  
  console.log(name5); // John
  console.log(age); // 30
  console.log(city); // New York
  console.log(country); // USA

  // smart function parameters
  console.log("-------------------smart function parameters-------------------");
  
  let options3 = {
    title: "My menu",
    items: ["Item1", "Item2"]
  };
  
  function showMenu({
    title = "Untitled",
    width: w = 100,  // width goes to w
    height: h = 200, // height goes to h
    items: [item1, item2] // items first element goes to item1, second to item2
  }) {
    console.log( `${title} ${w} ${h}` ); // My Menu 100 200
    console.log( item1 ); // Item1
    console.log( item2 ); // Item2
  }
  
  showMenu(options3);
 
 