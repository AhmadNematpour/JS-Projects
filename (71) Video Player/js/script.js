
const videoPlayer = document.querySelector('.video-player');
const video = document.querySelector('.video');
const playButton = document.querySelector('.play-button');
const volume = document.querySelector('.volume');
const CurrentTimeElement = document.querySelector('.current');
const durationTimeElement = document.querySelector('.duration');
const progress = document.querySelector('.video-progress');
const progressBar = document.querySelector('.video-progress-fill');



playButton.addEventListener('click', function(e) {
    if(video.paused) {
        video.play();
        e.target.textContent = "▌▌";
    }else {
        video.pause();
        e.target.textContent = "▶";
    }
});

volume.addEventListener('mousemove', (e)=> {
    video.volume = e.target.value;
});


const CurrentTime = ()=> {
    let currentMinutes = Math.floor(video.currentTime / 60);
    let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(video.duration / 60);
    let durationSeconds = Math.floor(video.duration - durationMinutes * 60) + '0';

    CurrentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0' + currentSeconds:currentSeconds}`;
    durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds}`;
}

video.addEventListener('timeupdate', CurrentTime);


//progress bar

video.addEventListener('timeupdate', ()=> {
    const precentage = (video.currentTime / video.duration)*100;
    progressBar.style.width = `${precentage}%`;
});


progress.addEventListener('click', (e)=> {
    const progressTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = progressTime
})



















