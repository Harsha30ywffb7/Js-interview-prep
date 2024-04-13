
# functions

- Difference between function statement and function expression ?
* Hoisting 

- What is Function Statement ?
*     A normal function that we create using Naming convention. & By this we can do the Hoisting.
      For Ex  -  function xyz(){
                            console.log("Function Statement");
                       }

- What is Function Expression ?
*  When we assign a function into a variable that is Function Expression. & We can not do Hoisting by this becz   it acts like variable.
      For Ex - var a = function(){
                            console.log("Function Expression");
                    }

-  What is Anonymous Function ?
*  A Function without the name is known as Anonymous Function. & It is used in a place where function are treated as value.
      For Ex - function(){
                     }

-  What is Named Function Expression ?
*  A function with a name is known as Named Function Expression.
      For Ex - var a = function xyx(){
                            console.log("Names Function Expression");
                     }

-   Difference b/w Parameters and Arguments ?
*   When we creating a function  & put some variabels in this ( ) that is our Parameters.
       For Ex - function ab( param1, param2 ){
                              console.log("param1")
                      }
       & When we call this function & pass a variable in this ( ) that is our Arguments
       For Ex - ab( 4, 5 );

-  What is First Class Function Or First class citizens?
*   - The Ability of use function as value,

    - The ability to use functions as a parameters inside a function. use functions as a values and pass to other functions and returns functions as an output. These all represents as First class functions.

    - Can be passed as an Argument,

    - Can be executed inside a closured function &

    - Can be taken as return form.
       For Ex - var b = function(param){
                             return function xyz(){
                                     console.log(" F C F ");
                             }
                     } 

# callback Functions

- what is call back functions?
*   - a function is pass in a function are called call back functions.
    - callbacks executed after the function is executed. only depends on that function. 
    - These functions unlocked whole asynchronous world in a single threaded and synchronous javascript language.

- How async works by callaback in sync js?
*    Ex - setTimeout (function (){
                console.log("async works")
            }, 5000);

            function x(){
                console.log("x is printed);
            }
    - now here program does not stops untill setTimeout for 5 sec executes next lines, but callback function inside works for it and exceute it after 5 sec.
    - setTimeout changes javascript to sync to async
    - after timer time the functions runs inside in call stack.

- Blocking main thread
*   - 

- EventListeners
*   - eventListeners invoke the callback functions.
    - Event listeners can also invoke closures with scope.

- Garbage Collection and remove EventListeners
*   - Event listeners are too heavy and occupies more memory.
    - Even after completetion of eventlistener , they still in browser and they attach with call back functions, those functions are not free up space from call stack.
    - They slow up the page. so we need to remove them after event executed.


