
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
 
  
 
