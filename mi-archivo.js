function toggleVideo() {
  var videoContainer = document.getElementById("video-container");
  var video = document.getElementById("my-video");

  if (window.getComputedStyle(videoContainer).display === "none") {
    videoContainer.style.display = "block";
    video.play();
  } else {
    videoContainer.style.display = "none";
    video.pause();
  }
}
$(document).ready(function() {
  $('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true
  });
});

