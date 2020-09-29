

var elements = ["summary", "experience", "military", "education", "knowledge", "language"];
var height;
if (window.innerWidth > 800) {
  height = -350;
} else {
  height = -800;
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
        $("#" + elements[i] + " .display-none").show(1500);
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
