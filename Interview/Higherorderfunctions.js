
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





