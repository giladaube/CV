

var elements = ["summary", "experience", "military", "education", "knowledge", "language"];
var height;
var media = window.matchMedia("only screen and (max-device-width: 500px)");
if (media.matches) {
  console.log("true");
  height = -1800;
} else {
  height = -400;
}

var windowHeight;
$(document).scroll(function() {
  windowHeight = window.innerHeight;
  checkPosition();
})



function checkPosition() {
  for (var i = 0; i < elements.length; i++) {
    var element = document.querySelector("#" + elements[i] + " .hidden");
    if (element != null) {
      var positionFromTop = element.getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= height) {
        element.classList.add("display-none");
        element.classList.remove("hidden");
        if (i % 2 != 0) {
          $("#" + elements[i] + " .display-none").show(1200);
        } else {
          $("#" + elements[i] + " .display-none").slideDown(1200);
        }
      }
    }
    if (i % 2 != 0) {
      $("#" + elements[i]).addClass("color-section2");
      $("#" + elements[i] + " h1").addClass("font-Big-Heading-color2");
      $("#" + elements[i] + " p").addClass("font-text-color2");
    } else {
      $("#" + elements[i] + " p").addClass("font-text-color1");
      $("#" + elements[i] + " h1").addClass("font-Big-Heading-color1");
    }
  }
}
