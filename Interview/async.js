
// async alwasys returns a promises

const p = new Promise(function(resolve, reject){
    return resolve("Data from a actual promise");
})



async function fetchdata(){
    return p;
}

const data = fetchdata();
// const readData = data.then(res => console.log(`data from the async function${res}`));
