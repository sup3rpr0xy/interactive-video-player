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

  //Time duration
  var curTimeText = document.getElementById("curtimetext");
  var durTimeText = document.getElementById("durtimetext");
  
  //Event listener for the play/pause button
  playButton.addEventListener("click", function() {
    if (video.paused == true) {
      //Play the video
      video.play();

      //Update the button text to 'Pause'
      playButton.src = "../icons/pause-icon.png";
    } else {
      //Pause the video
      video.pause();

      //Update the button text to 'Play'
      playButton.src = "../icons/play-icon.png";
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
  
  function seekTimeUpdate() {
    
  }

  //Update the seek bar as the video plays
  video.addEventListener("timeupdate", function() {
    //Calculate the slider value
    var value = (100 / video.duration) * video.currentTime;
    
    //Update the slider value
    seekBar.value = value;
  });
  
  //Pause the video when the slider handle is being dragged
  seekBar.addEventListener("mousedown", function() {
    video.pause();
  });
  
  //Play the video when the slider handle is dropped
  seekBar.addEventListener("mouseup", function() {
    video.play();
  });
 
  //Event listener for the volume bar
  volumeBar.addEventListener("change", function() {
    //Update the video volume
    video.volume = volumeBar.value;
  });
  
}