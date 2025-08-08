const songs = [
  {
    name: "Papa Meri Jaan",
    file: "songs/song1.mpeg",
  },
  {
    name: "Sanson Ki Mala",
    file: "songs/sanson-ki-mala.mp3",
  },
  {
    name: "Saiyaara (Music)",
    file: "songs/saiyaara.mp3",
  },
  {
    name: "Abhi Mujh Main Kahin",
    file: "songs/abhi-mujh-main-kahin.mp3",
  },
  {
    name: "Sun raha hai",
    file: "songs/sunn-raha-hai-n.mp3",
  },
  {
    name: "Tu jaane na",
    file: "songs/tu-jaane-na.mp3",
  },


];

let currentSongIndex = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("song-title");
const playPauseBtn = document.getElementById("playPauseBtn");

function loadSong(index) {
  audio.src = songs[index].file;
  title.textContent = songs[index].name;
}

function togglePlay() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "⏸️";
  } else {
    audio.pause();
    playPauseBtn.textContent = "▶️";
  }
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
  playPauseBtn.textContent = "⏸️";
}

function prevSong() {
  currentSongIndex =
    (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
  playPauseBtn.textContent = "⏸️";
}

function selectSong(index) {
  currentSongIndex = index;
  loadSong(currentSongIndex);
  audio.play();
  playPauseBtn.textContent = "⏸️";
}

// Autoplay next song when current ends
audio.addEventListener("ended", nextSong);

// Initial load
loadSong(currentSongIndex);
