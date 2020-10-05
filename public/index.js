
var elements = ["summary", "experience", "military", "education", "knowledge", "language"];
var height;
var windowHeight;
var notMobileView = true;
// checks if the current view is in a mobile device
var media = window.matchMedia("only screen and (max-device-width: 500px)");
// if it is a mobile device, it won't use the animation.
if (media.matches) {
  notMobileView = false;
} else {
  height = -390;
}
// what to do while using mobile view
if (!notMobileView) {
  goThroughElements(routineMobileView);
}

$(document).scroll(function() {
  if (notMobileView) {
    goThroughElements(routineNotMobileView);
  }
})

// go through all elements and run the given function
function goThroughElements(runFunction) {
  for (let i = 0; i < elements.length; i++) {
    runFunction(i);
    // add style to the content
    addStyle(i);
  }
}

// what to do if the view is in mobile
function routineMobileView(index) {
  let element = getDocElement(index, " .hidden");
  // make sure the given element is hidden
  if (element != null) {
    element.classList.remove("hidden");
  }
}

// what to do if the view isn't in mobile
function routineNotMobileView(index) {
  let element = getDocElement(index, " .hidden");
  // make sure the given element is hidden
  if (element != null) {
    windowHeight = window.innerHeight;
    if (getBoundingTop(index) - windowHeight <= height) {
      element.classList.add("display-none");
      element.classList.remove("hidden");
      // add animation to show the content
      addAnimation(index);
    }
  }
}

// get an element based on the index in "elements"
function getElements(index) {
  return $("#" + elements[index]);
}
// get an element based on the index in "elements" and a className in Query format
function getElement(index, classNameQuery) {
  return $("#" + elements[index] + classNameQuery);
}

// get an element based on the index in "elements" and a className in Query format (not with jQuery)
function getDocElement(index, classNameQuery) {
  return document.querySelector("#" + elements[index] + classNameQuery);
}

// get the positionFromTop for a given element (based on a given index for elements)
function getBoundingTop(index) {
  return getElements(index).get(0).getBoundingClientRect().top;
}

// add className to an element (getting it based on index and classNameQuery using getElement func)
function addClassElement(index, classNameQuery, addClassName) {
  getElement(index, classNameQuery).addClass(addClassName);
}

// remove className from an element (getting it based on index and classNameQuery using getElement func)
function removeClassElement(index, classNameQuery, removeClassName) {
  getElement(index, classNameQuery).removeClass(removeClassName);
}

// add animation to an element based on the index
function addAnimation(index) {
  if (index % 2 != 0) {
    getElement(index, " .display-none").show(1200);
  } else {
    getElement(index, " .display-none").slideDown(1200);
  }
}

// add a different style based on the index
function addStyle(index) {
  if (index % 2 != 0) {
    addClassElement(index, "", "color-section2");
    addClassElement(index, " h1", "font-Big-Heading-color2");
    addClassElement(index, " p", "font-text-color2");
  } else {
    addClassElement(index, " h1", "font-Big-Heading-color1");
    addClassElement(index, " p", "font-text-color1");
  }
}
