let button = document.querySelector('button'); 
let body = document.querySelector('body'); 
button.addEventListener('click', function(e){ 
    if(document.fullscreenElement){ 
    document.exitFullscreen() 
    }
    else{
    body.requestFullscreen();
    }
})