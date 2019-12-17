// *** This practice project is to create effects on your own webcam that you can play with and adjust and use.
// $$$ This project not completed, haven't yet figured out how to get the webcam to work with it. $$$ //

const video = document.querySelector('.player');
// canvas is where the actual video work will be done.
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
            console.log(localMediaStream);

            video.srcObject = localMediaStream;
            // play video
            video.play();
        }).catch(err => {
            console.error(`Oh noes, you denied the webcam`, err);
        });

    // *** Other possible try to make webcam show. Not working either *** 
    // navigator.webkitGetUserMedia(
    //     {video: true, audio: false}, // Options
    //     function(localMediaStream) { // Success
    //         stream = localMediaStream;
    //         //video.src = window.webkitURL.createObjectURL(stream);
    //         video.srcObject = stream;
    //    },
    //    function(err) { // Failure
    //       alert('getUserMedia failed: Code ' + err.code);
    //    }
}

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
    }, 16);
}