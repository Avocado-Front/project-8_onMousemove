let box = document.querySelector('.container')
window.addEventListener('load',function(){
    window.addEventListener('mousemove',function(event){
        // console.log(event);
        let x = event.clientX
        let y = event.clientY
        if(true){
            box.style.top = y+'px'
            box.style.left = x+'px'
        }
    })
})