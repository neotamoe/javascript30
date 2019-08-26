const theVideo = document.querySelector(".viewer"); 
const playButton = document.querySelector(".toggle");
const fastForwardButton = document.querySelector("button[data-skip='25']")
const rewindButton = document.querySelector("button[data-skip='-10']")
const volumeSlider = document.querySelector("input[name='volume']")
const playbackRateSlider = document.querySelector("input[name='playbackRate']")
const progressBar = document.querySelector(".progress__filled")
const progress = document.querySelector(".progress")

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

function handleProgress() {
    const percentDone = (theVideo.currentTime / theVideo.duration) * 100;
    progressBar.style.flexBasis = `${percentDone}%`;
}

function scrub(e){
    console.log('progress bar clicked')
    // get where on bar is clicked and divide by width of bar to get %
    const scrubTime = (e.offsetX / progress.offsetWidth) * theVideo.duration;
    theVideo.currentTime = scrubTime;
}

theVideo.addEventListener("click", playPause);
theVideo.addEventListener("play", updatePlayPauseButton);
theVideo.addEventListener("pause", updatePlayPauseButton);
theVideo.addEventListener("timeupdate", handleProgress);
playButton.addEventListener("click", playPause);
fastForwardButton.addEventListener("click", fastForward);
rewindButton.addEventListener("click", rewind);
volumeSlider.addEventListener("change", adjustVolume);
playbackRateSlider.addEventListener("change", adjustPlaybackRate);
let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);
