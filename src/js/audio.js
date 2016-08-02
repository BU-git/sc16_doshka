var music = document.getElementById('audio_player');
  
function playAudio() {
  if (music.paused) {
    music.play();
    pButton.className = "";
    pButton.className = "pause";
  } else {
    music.pause();
    pButton.className = "";
    pButton.className = "play";
  }
  {
 		console.log (playAudio);
	}
}

function setVolume(volume) {
   music.volume = volume;
}