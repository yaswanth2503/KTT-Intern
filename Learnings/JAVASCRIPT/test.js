
let amount;
let product = {
    id: 101,
    name : "Bag",
    price : 500,
    discount: 10,
    finalPrice:0
}
 product.finalPrice=product.price-(product.price*product.discount)/100;

console.log(product); // Output: 450