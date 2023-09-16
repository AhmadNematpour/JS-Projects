
const videoPlayer = document.querySelector('#videoPlayer');
const myVideo = document.querySelector('#myVideo');


function stopPlayer() {
    videoPlayer.style.display = "none";
}

function playVideo(source) {
    videoPlayer.style.display="block";
    myVideo.src = source;
}









