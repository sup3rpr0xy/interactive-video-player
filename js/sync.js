$(document).ready(function() {
  console.log("jQuery Ready!");
  
  //Hiding bottom buttons on mouse hover
  var videoContainer = $(".wrapper");
  var controls = $("#bottom-buttons");
  var progressBar = $("#seek-bar");
  var wholeControls = $('#control');
  
  videoContainer.mouseleave(function() {
//    controls.toggle("blind");
    controls.hide();
    wholeControls.removeClass('controlSection');
    wholeControls.addClass('progressDown');
  });
  
  videoContainer.mouseenter(function() {
    controls.fadeIn('100');
    wholeControls.removeClass('progressDown');
    wholeControls.addClass('controlSection');
  });

});

//
//
//  videoContainer.mouseleave(function() {
//    progressBar.removeClass('controlSection');
//    controls.fadeOut('100');
//  });