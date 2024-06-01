

 // passing a function in inside is not better, 

 // But attach callback to the promise is better.

// const promise = fetch("https://api.github.com/users/harsha30ywffb7");

// console.log(promise)

// promise. then(function (data){
//     console.log(data);
// })

// primise chain

// promise.then(function(data){
//     return data;
// }).then(function (arg1){
//     ap1(arg1)
// }).then(function(agr2){
//     ap2(arg2);
// })

// const username = "harsha"

//const username = null

// const prms = createUser(username);

// function createUser(username){
//     const promise = new Promise(function (resolve,reject){
//         if(username) resolve();

//         else reject("There is an error");
//     })
// }

// console.log(prms);


// ! create call an async Api and get a promise.
const cart = ["shoes","pants","mobile"];
const promise = createOrder(cart);

// promise gets , handle consume it.

console.log(promise)

promise.
then( function(orderId){
    console.log(orderId);
    return orderId;
    //returns order Id
})
.then((orderId)=>{
    return proceedToPayment(orderId);
    // returns promises to next step.
})
.then((paymentInfo)=>{
    console.log(paymentInfo);
})
.catch(function (err){
    console.log(err.message)
})


function createOrder(cart){
    const promise = new Promise(function (resolve, reject){

        //create some order 
        // send some orderid from server as a promise

        if(validateCart(cart)){
            const orderId = 123456;
            // setTimeout(function (){
            //     resolve(orderId);
            // }, 5000);
            resolve(orderId);
            
        }else{
            const err = new Error("cart is empty. Add some items");
            reject(err);
        }
    });

    return promise;
}

const proceedToPayment =(orderId) =>{
    return new Promise((resolve, reject)=>{
        if(!orderId){
            //Generate a payment Id
            const paymentId = "Harsha1234567890";
            resolve(`Payment successful at id ${paymentId}`);
        }else{
            const err= new Error("Transaction unsucessful");
            reject(err);
        }
    });
}

function validateCart(cart){
    if(cart) return true;
}