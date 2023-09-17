const about = document.getElementById('about');
const fullText = document.getElementById('fullText');
const smallText = document.getElementById('smallText');

const music = document.getElementById("music");
const cardMusic = document.getElementById("cardMusic");

const albumPhoto = document.getElementById('albumPhoto')
const album = document.getElementById('album')
const musicName = document.getElementById('musicName')
const currentMusic = document.getElementById('currentMusic')

const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");

const progressBar = document.getElementById("progressBar");
const progressContainer = document.getElementById("progressContainer");

const videoPlayer = document.getElementById('videoPlayer')
const video = document.getElementById('video')
const body = document.getElementById('body')

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('change', window.scrollY > 10);
});

function moreText() {
    smallText.style.display = 'none'
    fullText.style.display = 'block'
    about.style.background = 'linear-gradient(180deg, rgba(12, 12, 12, 0.8) 0%, rgb(12, 12, 12) 90%)'
}

function lessText() {
    smallText.style.display = 'block'
    fullText.style.display = 'none'
    about.style.background = 'linear-gradient(180deg, rgba(12, 12, 12, 0.5) 20%, rgb(12, 12, 12) 90%)'
}

// PLAYER DE MÚSICA
playBtn.addEventListener("click", () => {
    music.play();
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
});

pauseBtn.addEventListener("click", () => {
    music.pause();
    playBtn.style.display = "block";
    pauseBtn.style.display = "none";
});


music.addEventListener("timeupdate", () => {
    const progress = (music.currentTime / music.duration) * 100;
    progressBar.style.width = `${progress}%`;
});

music.addEventListener("timeupdate", () => {
    const progress = (music.currentTime / music.duration) * 100;
    progressBar.style.width = `${progress}%`;
});

progressContainer.addEventListener("click", (e) => {
    const progress = (e.offsetX / progressContainer.offsetWidth) * music.duration;
    music.currentTime = progress;
});



function music1() {
    cardMusic.style.display = 'flex'
    musicName.innerHTML = 'Reflections'
    albumPhoto.src = "./img/HTITNEC-capa.png"
    album.innerHTML = 'Hard To Imagine The Neighbourhood <br> Ever Changing'
    music.src = "Reflections_192.mp3"
    music.play()
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function music2() {
    cardMusic.style.display = 'flex'
    musicName.innerHTML = 'Daddy Issues <span class="paragrafoCard">Remix</span>'
    album.innerHTML = 'Daddy Issues Remix'
    albumPhoto.src = "./img/daddyIssues (1).png"
    music.src = "The-Neighbourhood-Daddy-Issues.mp3"
    music.play()
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function music3() {
    cardMusic.style.display = 'flex'
    musicName.innerHTML = 'Nothing Is Lost '
    albumPhoto.src = "./img/avatar.png"
    album.innerHTML = 'Song by The Weeknd'
    music.src = "Nothing-is-Lost_320(PagalWorld).mp3"
    music.play()
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function music4() {
    cardMusic.style.display = 'flex'
    musicName.innerHTML = 'Unholy'
    album.innerHTML = 'Song by Kim Petras and Sam Smith'
    albumPhoto.src = "./img/unholy.png"
    music.src = "Unholy_320.mp3"
    music.play()
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
}



function exitModal() {
    videoPlayer.style.display = 'none'
    body.style.overflow = 'auto'
    video.src = '##'
}


function video1() {

    window.scrollTo(0, document.body.scrollHeight);

    music.pause();
    cardMusic.style.display = 'none'
    videoPlayer.style.display = 'flex'
    body.style.overflow = 'hidden'
    video.src = 'https://www.youtube.com/embed/GCdwKhTtNNw'
}

function video2() {
    window.scrollTo(0, document.body.scrollHeight);
    music.pause();
    cardMusic.style.display = 'none'
    videoPlayer.style.display = 'flex'
    body.style.overflow = 'hidden'
    video.src = 'https://www.youtube.com/embed/_lMlsPQJs6U?si=HkQ0FOx_ci0azAzd'
}


function video3() {
    window.scrollTo(0, document.body.scrollHeight);
    music.pause();
    cardMusic.style.display = 'none'
    videoPlayer.style.display = 'flex'
    body.style.overflow = 'hidden'
    video.src = 'https://www.youtube.com/embed/8giBPUpzKRw'
}

function video4() {
    window.scrollTo(0, document.body.scrollHeight);
    music.pause();
    cardMusic.style.display = 'none'
    videoPlayer.style.display = 'flex'
    body.style.overflow = 'hidden'
    video.src = 'https://www.youtube.com/embed/Jir-WItz1OI'
}