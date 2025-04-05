

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

