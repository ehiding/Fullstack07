var container = document.querySelector(".player"),
  mainVideo = container.querySelector("audio"),
  videoTimeline = container.querySelector(".play-timer"),
  currentVidTime = container.querySelector(".current-time"),
  videoDuration = container.querySelector(".video-duration"),
  progressBar = container.querySelector(".progress"),
  playPauseBtn = container.querySelector(".player-btn i");

playPauseBtn.addEventListener("click", () => {
  mainVideo.paused ? mainVideo.play() : mainVideo.pause();
});

mainVideo.addEventListener("play", () => {
  playPauseBtn.classList.replace("fa-play", "fa-pause");
});

mainVideo.addEventListener("pause", () => {
  playPauseBtn.classList.replace("fa-pause", "fa-play");
});

var formatTime = (time) => {
  var seconds = Math.floor(time % 60),
    minutes = Math.floor(time / 60) % 60,
    hours = Math.floor(time / 3600);

  seconds = seconds < 10 ? `0${seconds}` : seconds;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  hours = hours < 10 ? `0${hours}` : hours;

  if (hours == 0) {
    return `${minutes}:${seconds}`;
  }
  return `${hours}:${minutes}:${seconds}`;
};

mainVideo.addEventListener("timeupdate", (e) => {
  var { currentTime, duration } = e.target;
  var percent = (currentTime / duration) * 100;
  progressBar.style.width = `${percent}%`;
  currentVidTime.innerText = formatTime(currentTime);
});

mainVideo.addEventListener("loadeddata", (e) => {
  videoDuration.innerText = formatTime(e.target.duration);
});

videoTimeline.addEventListener("click", (e) => {
  var timelineWidth = videoTimeline.clientWidth;
  mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
});

var draggableProgressBar = (e) => {
  var timelineWidth = videoTimeline.clientWidth;
  progressBar.style.width = `${e.offsetX}px`;
  mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
  currentVidTime.innerText = formatTime(mainVideo.currentTime);
};

videoTimeline.addEventListener("mousedown", () => {
  videoTimeline.addEventListener("mousemove", draggableProgressBar);
});

container.addEventListener("mouseup", () => {
  videoTimeline.removeEventListener("mousemove", draggableProgressBar);
});

videoTimeline.addEventListener("mousemove", (e) => {
  var progressTime = videoTimeline.querySelector(".time");
  var offsetX = e.offsetX;
  progressTime.style.left = `${offsetX}px`;
  var timelineWidth = videoTimeline.clientWidth;
  let percent = (e.offsetX / timelineWidth) * mainVideo.duration;
  progressTime.innerText = formatTime(percent);
});
