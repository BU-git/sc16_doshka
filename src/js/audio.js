$(document).ready(function() {
    var isPlaying = false;
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '../audio/kahon.mp3');
    
    audioElement.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    
    $('#pButton').click(function() {
        if (isPlaying) {
            audioElement.pause();
            isPlaying = false;
        } else{
            audioElement.play();
            isPlaying = true;
        }
    });
});