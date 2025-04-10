// prototype and inheritance

let user1={
    name:"Yash"
}

let userAge={
    age:22
}

user1.__proto__=userAge;

console.log(user1.age);
console.log(user1.name);

let user2={
    name:"Yash",
    age:22,
    Work(){
        console.log(`${this.name} is working as intern in KT_telematics`)
    }
}

let userId={
    id:613,
    __proto__:user2
}

userId.Work();


let animal = {
    eats: true,
    walk() {
      console.log("Animal walk");
    }
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  
  let longEar = {
    earLength: 10,
    __proto__: rabbit
  };
  
  longEar.walk(); // Animal walk
  console.log(longEar.jumps); // true (from rabbit)


  let animal1= {
    eats: true,
    walk() {
      /* this method won't be used by rabbit */
    }
  };
  
  let rabbit1 = {
    __proto__: animal1
  };
  
  rabbit1.walk = function() {
    console.log("Rabbit! Bounce-bounce!");
  };
  
  rabbit1.walk(); 


  let user3={
    firstName:"Yash",
    lastName:"Kumar", 
    set fullName(value){
        [this.firstName,this.lastName]=value.split(" ");
    },

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    
}

 let admin={
    age:22,
    __proto__:user3
 }

 console.log(admin.fullName);

 admin.fullName="Yaswanth Kumar";
 console.log(admin.fullName);
 console.log(user3.fullName);
 
 console.log(Object.keys(admin));
 console.dir(Object.keys(admin));

 for(let key in admin){
    console.log(key);
 }

console.log("-------");

 for(let prop in admin) {
    let isOwn = admin.hasOwnProperty(prop);
  
    if (isOwn) {
      console.log(`admin: ${prop}`); // 
    } else {
      console.log(`Inherited: ${prop}`);
  }
}
 
    
// F.prototype

let animal2 = {
    eats: true
  };
  
  function Rabbit(name) {
    this.name = name;
  }
  
  Rabbit.prototype = animal2;
  
  let rabbit2 = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
  
  console.log( rabbit2.eats ); // true
  console.log( rabbit2.name ); // White Rabbit

//   Default F.prototype, constructor property

function Rabbit1() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

console.log( Rabbit1.prototype.constructor == Rabbit1 ); // true

function Fruit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

let fruit = new Fruit(); // inherits from {constructor: Rabbit2}

console.log(fruit.constructor == Fruit); // true (from prototype)