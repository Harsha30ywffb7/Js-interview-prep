
// normal program 
arr = [1,2,3,4]

const calculateArea = function(radius){
    const output =[]

    for(let i=0; i<radius.length; i++){
        output.push(radius[i]*radius[i]*Math.PI);
    }
    return output;
}

const calculateCircumference = function(radius){
    const output =[]

    for(let i=0; i<radius.length; i++){
        output.push(2*radius[i]*Math.PI);
    }
    return output;
}


const calculateDiameter = function (radius){
    const output =[]

    for(let i=0; i<radius.length; i++){
        output.push(2* radius[i]);
    }
    return output;
}

console.log(calculateArea(arr))
console.log(calculateCircumference(arr))
console.log(calculateDiameter(arr))


// the above nrml but for Higher order function no cde is repeats,.

function area(radius){
    return radius*radius*Math.PI;
}

const diameter = function(radius){
    return 2*radius;
}

const circumference = function(radius){
    return 2*Math.PI*radius;
}

const calculate= function(arr, logic){
    const output = []
    
    for(let i=0; i<arr.length; i++){
        output.push(logic(arr[i]))
    }
    return output;
}


console.log(calculate(arr, area));
console.log(calculate(arr, diameter));
console.log(calculate(arr, circumference));




const data = [
    {
        name:"harsha",
        lname:'vardhan',
        age:'12',
        completed:true
    },
    {
        name:"chinna",
        lname:'gunna',
        age:'12',
        completed:true
    },
    {
        name:"vardhan",
        lname:'harsa',
        age:'12',
        completed:false
    },
    {
        name:"kanna",
        lname:'chimki',
        age:'12',
        completed:true
    },
    {
        name:"DoM",
        lname:'bosco',
        age:'12',
        completed:true
    }
]

function logic1(obj){
    return obj.name;
}

const higherOrder1=(data, logic)=>{
    const names = data.map(logic);
    return names;
}
console.log("new map Array", higherOrder1(data, logic1))

// ! 2.only completed.

function logic2(obj){
    if(obj.completed) return obj.name;
}

const higherOrder2 =(data, logic)=>{
    //const newArray = data.map(logic);
    const completedNames=[]

    for(let i=0; i<data.length;i++){
        if(data[i].completed) completedNames.push(logic(data[i]));
    }
    return completedNames;
}

console.log(higherOrder2(data,logic2));

//!  Q3. 

//! Q4.
function logic4(obj){
    const {name, lname} = obj;
    return name + lname;
}

const higherOrder4 =(data, logic)=>{
    const fullNames = data.map(logic)
    return fullNames;
}
console.log(higherOrder4(data, logic4))

// ! Q5.

function logic5(obj){
    const name = logic4(obj)
    return name.charAt(0).toUpperCase()+ name.substring(1);
}

const higherOrder5 =(data, logic)=>{
    const capitalizednames = data.map(logic)
    return capitalizednames;
}

console.log(higherOrder5(data, logic5));