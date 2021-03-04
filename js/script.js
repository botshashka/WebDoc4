// in js/js.js
function makeBig() {
    console.log('makeBig() detected a click')
    myVideo.width = 1000;
}
let myVideo = document.getElementById("myVideo");
// preload
myVideo.controls = false;

function playPause() {

  if (myVideo.paused) {
    myVideo.play();
    myVideo.controls = false;
      }
  else {
    myVideo.pause();
    myVideo.controls = true;
    }
}
// muting sound
function shutUpPlease() {
    document.getElementById("myVideo").muted = true;
    myVideo.muted = true;
}
// "unmuting" sound
function orangeAmp() {
    // ... logic here: write some code that will mute the video ...
    document.getElementById("myVideo").muted = true;
    myVideo.muted = false;
}
