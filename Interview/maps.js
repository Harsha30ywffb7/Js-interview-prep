const arr=[1,2,3,4,5]

const double = function(x){
    return x*2;
}
const arr1 = arr.map(double);

console.log(arr1);

const filter = arr.filter(x=> x%2 ==0);

console.log(filter)