$(document).ready(function() {
    var isPlaying = false;
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '../audio/kahon.mp3');
    
    audioElement.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    
    $('.play').click(function() {
        if (isPlaying) {
            audioElement.pause();
            $('.play').css('background', 'url(../../src/img/sprite-item.png) no-repeat -119px -4px')
            isPlaying = false;
        } else{
            audioElement.play();
            $('.play').css('background', 'url(../../src/img/sprite-item.png) no-repeat -70px -4px')
            isPlaying = true;
        }
    });

    $('.close').click(function(){
        if (isPlaying) {
            audioElement.pause();
            $('.play').css('background', 'url(../../src/img/sprite-item.png) no-repeat -119px -4px')
            isPlaying = false;
        }
    });
});