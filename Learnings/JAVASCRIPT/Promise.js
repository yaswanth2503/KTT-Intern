// promise is object



function booking(){
  return new Promise((resolve,reject)=>{
    let bookingSuccess=true;
    if(bookingSuccess){
        resolve(850);
    }else{
        reject();
    }
})
}

// booking().then((amt)=>console.log(`Thanks budyy I have transfered ${amt}`))
// .catch(()=> console.log("Thanks for trying"))


function tossCoin(){
    // 0-head(success),1-tail(failure)
    return new Promise((resolve,reject)=>{
        const rand=Math.floor(Math.random()*2);
        if(rand===0){
            resolve();
        }else{
            reject();
        }
    })
}

// tossCoin().then(()=>console.log("Congrats Its head You won"))
// .catch(()=>console.log("Sorry Its tail You lost"))

let reachA=new Promise((resolve,reject)=>{
    const reached=false;
    if(reached){
        setTimeout(resolve,3000,"Vidya Reached");
    }
    else{
        reject("Vidya not reached");
    }
})

// let reachB=new Promise((resolve,reject)=>{
//     const reached=true;
//     if(reached){
//         setTimeout(resolve,1000,"Ramya Reached");
//     }
//     else{
//         reject("Ramya not reached");
//     }
// })

// let reachC=new Promise((resolve,reject)=>{
//     const reached=true;
//     if(reached){
//         setTimeout(resolve,2000,"Latha Reached");
//     }
//     else{
//         reject("Latha not reached");
//     }
// })

// Promise.race([reachA,reachB,reachC])
// .then((message)=>{console.log(message);})
// .catch((message)=>{
//     console.log(message);
// })

/*
promise-pending,resolved,rejected(settled)
promise.all
👉 Waits for all promises to resolve.
❌ Fails fast: If any promise rejects, the entire thing rejects.

promise.allsettled
👉 Waits for all promises to finish, whether they resolve or reject.
✅ You get status and value/reason for each promise.

promise.any
👉 Returns the first resolved promise.
❌ Ignores rejected promises.
❌ If all promises reject, it throws an AggregateError.   

promise.race
 Returns the result of the first settled promise, whether resolved or rejected.
*/

// Async Await

async function fn(){
    return 'hello';
}

// console.log(fn());

// fn().then((msg)=>console.log(msg));

async function asyncStatus(){
    try{
        console.log('hii...');
        res=await reachA;
        console.log(res);
        console.log('bye');
    }
    catch(err){
        console.log(err);
        
    }
    
}

asyncStatus();
