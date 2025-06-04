"use strict";
let product = {
    id: 101,
    name : "Bag",
    price : 500,
    discount: 10,
    
}
 
function calculate(prod){
    return {
        ...prod,
        finalPrice:prod.price+prod.discount
    }
};

let result=calculate(product);

console.log(result); // 







let arr = [1, 2, 3, 4, 5];

arr.push(6);
arr.push(7);
arr.push(8); 
arr[100]="hello";


arr.splice(100,1)


let arr1=[];
for(let i=0;i<arr.length;i++){
    if(isFinite(arr[i])){
            arr1.push(arr[i]);
    }
   
}

console.log(arr1.length);

// console.log(arr.length);
// console.log(arr[99])

// let count=0;
// for(let i=0;i<arr.length;i++){
//     if(isFinite(arr[i])){
//         count++;
//     }
// }

// console.log(count);



// console.log(arr);


let studentMarks=[90,97,86,77,68,82,95];

console.log("push");
studentMarks.push(100); 
console.log(studentMarks); // 90,97,86,77,68,82,95,100


console.log("pop");
studentMarks.pop();
console.log(studentMarks); // 90,97,86,77,68,82,95

console.log("unshift");
studentMarks.unshift(100);
console.log(studentMarks); // 100,90,97,86,77,68,82,95

console.log("shift");
studentMarks.shift();
console.log(studentMarks); // 90,97,86,77,68,82,95

console.log("splice");
studentMarks.splice(4,1); 
console.log(studentMarks); // 90,97,86,77,82,95

console.log("slice");
console.log(studentMarks); // 90,97,86,77,82,95

console.log(studentMarks.slice(1,2)); //97


console.log("forEach");
studentMarks.forEach(marks=>console.log(marks+3)); // 97,86,77,82,95


console.log("filter");
console.log(studentMarks.filter(marks=>marks>90));

console.log("reduce");
console.log(studentMarks);
console.log(studentMarks.reduce((sum,mark)=>sum+mark,0));

console.log("map");
let doubleMarks=studentMarks.map(marks=>marks*2);
console.log(doubleMarks); // [180, 194, 172, 154, 164, 190]


console.log("find");
studentMarks.push(77);
console.log(studentMarks);
console.log(studentMarks.find(mark=>mark==77));

console.log("sort");
console.log(studentMarks.sort((a,b)=>a-b));
console.log(studentMarks.sort((a,b)=>b-a));


console.log("for of loop");
for(let mark of studentMarks){
    console.log(mark);
}

console.log("for loop");
for(let i=0;i<studentMarks.length;i++){
    console.log(studentMarks[i]);
}

console.log("reverse");
console.log(studentMarks);
studentMarks.reverse();
console.log(studentMarks);

 