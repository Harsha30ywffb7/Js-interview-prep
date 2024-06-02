
// async alwasys returns a promises

const p = new Promise(function(resolve, reject){
    return resolve("Data from a actual promise");
})



async function fetchdata(){
    return p;
}

const data = fetchdata();
// const readData = data.then(res => console.log(`data from the async function${res}`));


// ! check how async works here.

const promise1 = new Promise(function (resolve,reject){
    setInterval(function (){
        resolve("promise 1 is resolved");
    }, 40000); 
});

const promise2 = new Promise(function (resolve,reject){
    setInterval(function (){
        resolve("promise 2 is resolved");
    }, 20000);
});

// without await
async function getData1(){
    // returns resolve of the promise.
   return promise1;
}

//!const data1 = getData().then(res => console.log(res));

// with await

async function getData2(){
    
    const data1 = await promise1;
    console.log(data1)
    console.log("Harsha, How are you?")
    // after 10sec only console prints if promise is only resolved then next line prints.


    const data2 = await promise2;
    console.log(data2)
    console.log("Harsha, How are you * 2?")
}

//getData2();


async function getData3(){
    
    const data1 = await promise2;
    console.log(data1)
    console.log("Harsha, How are you?")
    // after 10sec only console prints if promise is only resolved then next line prints.


    const data2 = await promise1;
    console.log(data2)
    console.log("Harsha, How are you * 2?")
}

getData3();