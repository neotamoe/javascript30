const theVideo = document.querySelector(".viewer"); 
const playButton = document.querySelector(".toggle");
const fastForwardButton = document.querySelector("button[data-skip='25']")
const rewindButton = document.querySelector("button[data-skip='-10']")
const volumeSlider = document.querySelector("input[name='volume']")
const playbackRateSlider = document.querySelector("input[name='playbackRate']")

function playPause() { 
    const playOrPause = theVideo.paused ? 'play' : 'pause';
    theVideo[playOrPause]();
} 

function updatePlayPauseButton() {
    const pause = "\u258C\u258C"
    const icon = this.paused ? "►" : pause;
    playButton.textContent = icon;

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
theVideo.addEventListener("play", updatePlayPauseButton);
theVideo.addEventListener("pause", updatePlayPauseButton);
playButton.addEventListener("click", playPause);
fastForwardButton.addEventListener("click", fastForward);
rewindButton.addEventListener("click", rewind);
volumeSlider.addEventListener("change", adjustVolume);
playbackRateSlider.addEventListener("change", adjustPlaybackRate);
