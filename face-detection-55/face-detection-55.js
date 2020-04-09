const video = document.querySelector(".webcam");

const canvas = document.querySelector(".video");
const ctx = canvas.getContext("2d");

const faceCanvas = document.querySelector(".face");
const factCtx = canvas.getContext("2d");

const faceDetector = new window.FaceDetector();

async function populateVideo() {
    const stream = await navigator.mediaDevices.getUserMedia({
        // video: { width: 1280, height: 720 },
        video: true,
    });
    video.srcObject = stream;
    await video.play();
    
    //   size the canvases to be same size as the video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    faceCanvas.width = video.videoWidth;
    faceCanvas.height = video.videoHeight;
}

async function detect() {
    const faces = await faceDetector.detect(video);
    console.log(faces);
    faces.forEach(drawFace);
    //    ask the browser when the next animation frame is and tell them to run detect
    requestAnimationFrame(detect);
}

function drawFace(face) {
    const { width, height, top, left } = face.boundingBox;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 2;
    ctx.strokeRect(left, top, width, height);
}

populateVideo().then(detect);
