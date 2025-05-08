/* make dound using single function to work on both mouse press and keyboard press */
function soundGenerate(key){
        
            switch (key) {
            case "w":
                let playTom1=new Audio("./sounds/tom-1.mp3");
                playTom1.play();
                break;
            case "a":
                let playTom2=new Audio("./sounds/tom-2.mp3");
                playTom2.play();
                break;    
            
            case "s":
                let playTom3=new Audio("./sounds/tom-3.mp3");
                playTom3.play();
                break;

            case "d":
                let playTom4=new Audio("./sounds/tom-4.mp3");
                playTom4.play();
                break;
        
            case "j":
                let playCrash=new Audio("./sounds/crash.mp3");
                playCrash.play();
                break;
            case "k":
                let playKick=new Audio("./sounds/kick-bass.mp3");
                playKick.play();
                break;
            
            case "l":
                let playSnare=new Audio("./sounds/snare.mp3");
                playSnare.play();
                break;
            default: console.log(key);
    }
}


function buttonAnimationFlush(presentKey) {
   let presentButton = document.querySelector("." + presentKey);
   presentButton.classList.toggle("pressed");

   setTimeout( function() {
    presentButton.classList.remove("pressed");
   }, 1000);

} // end buttonAnimationFlush


// Detect mouse button press
let btnListener = document.querySelectorAll(".drum"); //array of buttons
for(let i=0; i<btnListener.length;i++){
    btnListener[i].addEventListener("click", 
    function (){
        let mousekey=this.innerHTML;
        soundGenerate(mousekey);
        buttonAnimationFlush(mousekey);
    });
} //end for loop


// Detect keyboard down press
document.addEventListener("keydown", function(event){
    soundGenerate(event.key);
    buttonAnimationFlush(event.key);
});

