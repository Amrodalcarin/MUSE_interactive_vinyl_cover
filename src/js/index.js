var x = document.getElementById("algorithm_8bits_audio"); 


document.getElementById("cover").addEventListener("mousedown", function(){ 
    x.play(); 
});

document.getElementById("cover").addEventListener("mouseup", function(){ 
    x.pause(); 
});