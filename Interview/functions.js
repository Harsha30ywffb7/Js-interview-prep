
/*
lets call functions
a()
b()
! TYPE ERROR DUE TO b.
Error due to b is variable variable initially in memory it points to undefined, later code excueted then only it gets some value in memory.
*/ 



//function statement or function declaration
function a(){
    console.log("a is called");
}

//function expression
var b = function (){
    console.log("b is called")
}


/*a()
b()
these calls perfectly works 
Where actual difference comes --- HOISTING. */
 



/*
anonymous functions 

function () {

}

It throws SYNTAX ERROR due to ECMA script doesn't suppport anonymous functions. 
But why we use them , in above function b we used anonymous function for function expression. thats the main use of these functions.
*/



// Named function expressions

var c= function xyz(){
    console.log("c is called");
    console.log(xyz)
    // but we can access function from inside this.
}

c() // it actually calls the function. 
// the function inside a variable has not scope for calling from outside , it will throw the reference error. 





// First class Functions

var d= function(param1){
    return function (){
        console.log("returns a function when a function passed as an argument by a value")
    }
}

let param1 = function () {}
console.log(d())
// returns inner function as an output 
console.log(d)

// Hosting will be same as let and const in Js.

//