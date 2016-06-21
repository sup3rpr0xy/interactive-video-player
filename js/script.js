window.onload = function() {
  //Video 
  var video = document.getElementById("video");
  
  //Buttons
  var playButton = document.getElementById("play-pause");
  var muteButton = document.getElementById("mute");
  var fullScreenButton = document.getElementById("full-screen");
  
  //Sliders
  var seekBar = document.getElementById("seek-bar");
  var volumeBar = document.getElementById("volume-bar");

  //Current time and total duration
  var curTimeText = document.getElementById("curtimetext");
  var durTimeText = document.getElementById("durtimetext");
  
  //Empty time placeholder
  curTimeText.innerHTML = "0:00";
  durTimeText.innerHTML = "0:00";
  
  //Event listener for the play/pause button
  playButton.addEventListener("click", function() {
    if (video.paused == true) {
      //Play the video
      video.play();

      //Update the button text to 'Pause'
      playButton.src = "icons/pause-icon.png";
    } else {
      //Pause the video
      video.pause();

      //Update the button text to 'Play'
      playButton.src = "icons/play-icon.png";
    }
  });

  //Event listener for the mute button
  muteButton.addEventListener("click", function() {
    if (video.muted == false) {
      //Mute the video
      video.muted = true;
      
      //Update the button text
      muteButton.src = "../icons/volume-off-icon.png";
    } else {
      //Unmute the video
      video.muted = false;
      
      //Update the button text
      muteButton.src = "../icons/volume-on-icon.png";
    }
  });
  
  //Event listener for the full-screen button
  fullScreenButton.addEventListener("click", function() {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen(); //Firefox
    } else if (video.webkitRequestFullScreen) {
      video.webkitRequestFullscreen(); //Chrome and Safari
    }
  });
  
  //Event listener for the seek bar
  seekBar.addEventListener("change", function() {
    //Calculate the new time
    var time = video.duration * (seekBar.value / 100);
    
    //Update the video time
    video.currentTime = time;
  });  

  //Update the seek bar as the video plays
  video.addEventListener("timeupdate", function() {
    
    //Calculate the slider value
    var value = (100 / video.duration) * video.currentTime;
    
    //Calculates the current time every second
    var fullSec = parseInt(video.currentTime);
    console.log(fullSec);
    
    //Highlighting text formula
    if (fullSec <= 3) { 
      $('span').removeClass('highlight');
      $('#text-one').addClass('highlight'); //Text-one is highlighted
    } else if (fullSec > 3 && fullSec <= 6) {
      $('span').removeClass('highlight');
      $('#text-two').addClass('highlight'); //Text-two is highlighted
    } else if (fullSec > 6 && fullSec <= 10) {
      $('span').removeClass('highlight');
      $('#text-three').addClass('highlight'); //Text-three is highlighted
    } else if (fullSec > 10 && fullSec <= 13) {
      $('span').removeClass('highlight');
      $('#text-four').addClass('highlight'); //Text-four is highlighted
    } else if (fullSec > 13 && fullSec <= 17) {
      $('span').removeClass('highlight');
      $('#text-five').addClass('highlight');
    } else if (fullSec > 17 && fullSec <= 21) {
      $('span').removeClass('highlight');
      $('#text-six').addClass('highlight');
    } else if (fullSec > 21 && fullSec <= 26) {
      $('span').removeClass('highlight');
      $('#text-seven').addClass('highlight');
    } else if (fullSec > 26 && fullSec <= 30) {
      $('span').removeClass('highlight');
      $('#text-eight').addClass('highlight');
    } else if (fullSec > 30 && fullSec <= 34) {
      $('span').removeClass('highlight');
      $('#text-nine').addClass('highlight');
    } else if (fullSec > 34 && fullSec <= 38) {
      $('span').removeClass('highlight');
      $('#text-ten').addClass('highlight');
    } else if (fullSec > 38 && fullSec <= 40) {
      $('span').removeClass('highlight');
      $('#text-eleven').addClass('highlight');
    } else if (fullSec > 40 && fullSec <= 45) {
      $('span').removeClass('highlight');
      $('#text-twelve').addClass('highlight');
    } else if (fullSec > 45 && fullSec <= 48) {
      $('span').removeClass('highlight');
      $('#text-thirteen').addClass('highlight');
    } else if (fullSec > 48 && fullSec <= 53) {
      $('span').removeClass('highlight');
      $('#text-fourteen').addClass('highlight');
    } else if (fullSec > 53 && fullSec <= 57) {
      $('span').removeClass('highlight');
      $('#text-fifteen').addClass('highlight');
    } else if (fullSec > 57 && fullSec <= 60) {
      $('span').removeClass('highlight');
      $('#text-sixteen').addClass('highlight');
    } else {
      $('span').removeClass('highlight');
    }
    
    //Update the slider value
    seekBar.value = value;
    
    //Formula to get the current time and duration time
    var curmins = Math.floor(video.currentTime / 60);
    var cursecs = Math.floor(video.currentTime - curmins * 60);
    var durmins = Math.floor(video.duration / 60);
    var dursecs = Math.floor(video.duration - durmins * 60);
    
    //Check to see if the video duration isn't blank
    if (cursecs < 10) {
      cursecs = "0"+cursecs;
    }
    if (dursecs < 10) {
      dursecs = "0"+dursecs;
    }
    
    //Insert the current time and duration on the page
    curTimeText.innerHTML = curmins+":"+cursecs;
    durTimeText.innerHTML = durmins+":"+dursecs;
    
  });
  
  //Pause the video when the slider handle is being dragged
  seekBar.addEventListener("mousedown", function() {
    video.pause();
  });
  //Play the video when the slider handle is dropped
  seekBar.addEventListener("mouseup", function() {
    video.play();
    playButton.src = "../icons/pause-icon.png";
  });
  
  //Event listener for the VOLUME BAR
  volumeBar.addEventListener("change", function() {
    //Update the video volume
    video.volume = volumeBar.value;
  });
  

  
  
}