const theVideo = document.querySelector(".viewer"); 
const playButton = document.querySelector(".toggle");
const fastForwardButton = document.querySelector("button[data-skip='25']")
const rewindButton = document.querySelector("button[data-skip='-10']")
const volumeSlider = document.querySelector("input[name='volume']")
const playbackRateSlider = document.querySelector("input[name='playbackRate']")

function playPause() { 
    if (theVideo.paused) {
        theVideo.play(); 
    } 
    else {
        theVideo.pause(); 
    }
} 

function fastForward() {
    theVideo.currentTime += 25;
}

function rewind() {
    theVideo.currentTime -= 10;
}

function adjustVolume() {
    theVideo.volume = volumeSlider.value
}

function adjustPlaybackRate() {
    theVideo.playbackRate = playbackRateSlider.value
}


theVideo.addEventListener("click", playPause);
playButton.addEventListener("click", playPause);
fastForwardButton.addEventListener("click", fastForward);
rewindButton.addEventListener("click", rewind);
volumeSlider.addEventListener("change", adjustVolume);
playbackRateSlider.addEventListener("change", adjustPlaybackRate);
