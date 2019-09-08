const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

let photoRoll = [];
function takePhoto(){
    snap.play();
    console.log("TAKE PHOTO!");
    const snapped = ctx.drawImage(video, 0,0, canvas.width, canvas.height);
    var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.

    photoRoll.unshift(image)
    console.log(photoRoll)

    strip.innerHTML = photoRoll
        .map(photo => `<img src="${photo}" />`)
        .join('');
}

function startVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(function (stream) {
        video.srcObject = stream;
    })
    .catch(function (error) {
        console.log("Uh-oh!  Something went wrong!");
    });
};

function paintToCanvas(){
    window.requestAnimationFrame(paintToCanvas)

    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(video, 0,0, width, height);
}

startVideo();
paintToCanvas();
