cart = ["shoes","pants","mobile"]

// passing a function in inside is not better, 

// But attach callback to the promise is better.

const promise = fetch("https://api.github.com/users/harsha30ywffb7");

console.log(promise)

promise. then(function (data){
    console.log(data);
})

// primise chain

// promise.then(function(data){
//     return data;
// }).then(function (arg1){
//     ap1(arg1)
// }).then(function(agr2){
//     ap2(arg2);
// })

const username = "harsha"

//const username = null

const prms = createUser(username);

function createUser(username){
    const promise = new Promise(function (resolve,reject){
        if(username) resolve();

        else reject("There is an error");
    })
}

console.log(prms);