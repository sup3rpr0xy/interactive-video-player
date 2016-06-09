$(document).ready(function() {
  console.log("jQuery Ready!");
  
  //Hiding bottom buttons on mouse hover
  var videoContainer = $("#video-container");
  var controls = $("#bottom-buttons");
  
  videoContainer.mouseleave(function() {
    controls.fadeOut('400');
  });
  
  videoContainer.mouseenter(function() {
    controls.fadeIn('400');
  });
});
