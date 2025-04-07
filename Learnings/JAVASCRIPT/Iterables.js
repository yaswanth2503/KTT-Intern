
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
    result=iterator.next()
}



// Array.from() method
let str = '𝒳😂';

// splits str into array of characters
let chars = Array.from(str);

console.log(chars[0]); // 𝒳
console.log(chars[1]); // 😂
console.log(chars.length); // 2


