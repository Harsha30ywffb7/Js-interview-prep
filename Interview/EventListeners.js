const colors = ["black", "blue", "pink", "orange", "green" , "red"]
function attachEventListeners(){
    let count =0;
    document.getElementById('button').addEventListener("click", ()=>{
    console.log('button clicked', count++);
})
}

//attachEventListeners();

document.getElementById('button').addEventListener('click',()=>{
    document.body.style.backgroundColor= colors[Math.floor(Math.random()*6)];
    console.log(Math.floor(Math.random()*6))
})
