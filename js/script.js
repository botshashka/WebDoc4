// in js/js.js
function makeBig() {
    console.log('makeBig() detected a click')
    myVideo.width = 1000;
}

// eventListener for make big
big_btn.addEventListener('click', makeBig)
