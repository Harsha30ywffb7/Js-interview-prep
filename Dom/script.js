let heading = document.getElementsByTagName('h1');

let headingChange = document.querySelector('h1');

console.log(headingChange)

headingChange.innerText= "harsha"
const buttonChanger = document.getElementById("myButton");
console.log(buttonChanger)

let isOn = false;
let cnt =0;
buttonChanger.onclick=(e)=>{

    
    if(isOn){
        headingChange.innerText ="Dom bg is in orange"
        document.body.style.backgroundColor="orange"
    }else{
        headingChange.innerText ="Dom bg is in pink"
        document.body.style.backgroundColor="pink"
    }
    isOn = !isOn;

    function count(){
        console.log(cnt++);
    }
    count();
    
    console.log("button clicked");
}

// create a new element and append it in a 

let newButton = document.createElement('button');
newButton.innerHTML = 'Click me'
newButton.style.backgroundColor = 'red';
newButton.style.color = 'white'

let position = document.querySelector('body');

console.log(position)

position.prepend(newButton);