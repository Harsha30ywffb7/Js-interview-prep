function attachEventListeners(){
    let count =0;
    document.getElementById('button').addEventListener("click", ()=>{
    console.log('button clicked', count++);
})
}

attachEventListeners();
