const pianokeys = document.querySelector("piano-keys .key");

let audio = new Audio("voice/a.wav"); // by default,audio src is "a" tune

const playtune  = (key) => {
 audio.src ='voice/${key},wav';// passing audio src based on key pressed
   audio.play(); //playing audio

}

pianokeys.forEach(key => {
 aclling playtune function with passing data-ket value as on argument//
  key.addEventListener("click", () => playTune(key.dataset.key));
 console.log();
});












