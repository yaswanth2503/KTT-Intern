/*let message;

message = 'Hello!';

message = 'World!'; 

alert(message);



//type of operator

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)


Name = prompt("Enter you name",'yash');
alert(`Hi ${Name}!`); 

let isBoss = confirm("Are you the boss?");

 alert( isBoss ); // true if OK is pressed, false if cancel is pressed
 */

 // Type conversion

 //string conversion
//  let value = true;
// alert(typeof value); // boolean

// value = String(value); // now value is a string "true"
// alert(typeof value); // string

/*Numeric Conversion
Numeric conversion in mathematical functions and expressions happens automatically.

For example, when division / is applied to non-numbers:*/

// alert( "6" / "2" ); // 3, strings are converted to numbers
// /*We can use the Number(value) function to explicitly convert a value to a number:*/

// let str = "123";
// alert(typeof str); // string

// let num = Number(str); // becomes a number 123

// alert(typeof num); // number

 // Boolean Conversion 
// alert( Boolean(1) ); // true
// alert( Boolean(0) ); // false

// alert( Boolean("hello") ); // true
// alert( Boolean("") ); // false
// alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)

// let login=prompt("Enter your login name","");
// message=(login=='Employee')?'Hello':(login=='Director')?'Greetings':(login=='')?'No Login':'';


// Nullish coalescing operator '??'

//if one value is null or undefined, the other value is returned

// a={
//     name:'yash',
//     age:0
// };
// console.log(a.age ?? 100);


/* var global scope
   It can be redeclared and reassigned
   Initialized with the value undefined
    var name="yash";
    var name="ajith";
    console.log(name);
*/

/* let block scope
   It can be reassigned
   Initialized with the value undefined
    let age=10;
    age=12;
    console.log(age);
*/

/*  Const block scope
    It cannot be reassigned and redeclared
    It cant be initialized if we initialize we will get syntax error
    const age=10;
    console.log(age);

  */
 

    // Call back function
 

  //    function handle(callback){
  //     setTimeout(()=>{
  //       console.log(`Hello ${callback}`);
  //     },3000)
  //    }

  //    function greet(name,callback){
  //     console.log(`Hi ${name}`);

  //    callback(name);

  //    }

  //    greet('yash',handle)

  //   function delayedMessage(callback) {
  //     setTimeout(() => {
  //         console.log("This message appears after 3 seconds");
   
  //         callback();
  //     }, 3000);
  //     console.log("This message appears before 3 seconds");
  // }
  
  // function done() {
  //     console.log("Callback function executed");
  // }
  
  // delayedMessage(done);
  
  // debugger
 /*
 let a=10*6;
  debugger;
  document.getElementById('demo').innerHTML=a;
  */

  // object

  /*let user = {     
    name: "John",  
    age: 30,
    "like birds":true     
  };

  console.log(user); 
   user.isAdmin=true;
   console.log(user);
   delete user.isAdmin;
   console.log(user);
 
   let user1 = {
     name: "John",
     age: 30,
    
   };
   let key=prompt("Enter key","");
   alert(user1[key]);

   */

  //  let user={
  //   name:"Jhon",
  //   surname:"Smith",
  //  }

  //  user.name="Pete";
  //  console.log(user);
  //  delete user.name;
  //  console.log(user);

  //  let user2 = {
  //   name: "John",
  //   age: 30
  // };
  
  // let clone = {}; 
  // for (let key in user2) {
  //   clone[key] = user2[key];
  // }
  
  
  // clone.name = "Pete"; 
  
  // alert( user2.name ); 


  // object cloning and nested objects

  // let user3 = {
  //   name: "John",
  //   sizes: {
  //     height: 182,
  //     width: 50
  //   }
  // };
  
  // let clones = Object.assign({}, user3);
  
  // alert( user3.sizes === clones.sizes );
  
 
  // user3.sizes.width = 60;
  // alert(clones.sizes.width); 
