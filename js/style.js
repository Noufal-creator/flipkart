var slide = document.getElementsByClassName("slide");
var indicator = document.getElementById("indicator");
var dots = document.getElementsByClassName("dots");
var autoplay = document
  .getElementsByClassName("container")[0]
  .getAttribute("data-autoplay");
var l = slide.length;
var interval = 5000;
var set;

window.onload = function () {
  initialize();
  slide[0].style.opacity = "1";
  for (var j = 0; j < l; j++) {
    indicator.innerHTML += "<div class='dots' onclick=change(" + j + ")></div>";
  }

  dots[0].style.background = "#696969";
};

function initialize() {
  if (autoplay === "true")
    set = setInterval(function () {
      next();
    }, interval);
}

function change(index) {
  clearInterval(set);
  count = index;
  for (var j = 0; j < l; j++) {
    slide[j].style.opacity = "0";
    dots[j].style.background = "#bdbdbd";
  }
  slide[count].style.opacity = "1";
  dots[count].style.background = "#696969";
}

var count = 0;
function next() {
  clearInterval(set);
  slide[count].style.opacity = "0";
  count++;
  for (var j = 0; j < l; j++) {
    dots[j].style.background = "#bdbdbd";
  }

  if (count == l) {
    count = 0;
    slide[count].style.opacity = "1";
    dots[count].style.background = "#696969";
  } else {
    slide[count].style.opacity = "1";
    dots[count].style.background = "#696969";
  }
  initialize();
}

function prev() {
  clearInterval(set);
  slide[count].style.opacity = "0";
  for (var j = 0; j < l; j++) {
    dots[j].style.background = "#bdbdbd";
  }
  count--;

  if (count == -1) {
    count = l - 1;
    slide[count].style.opacity = "1";
    dots[count].style.background = "#696969";
  } else {
    slide[count].style.opacity = "1";
    dots[count].style.background = "#696969";
  }
  initialize();
}





// SETUP

// Sets variables to return inner div and images
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// Sets variables to return buttons
const prevBtn = document.querySelector('#prevbutton');
const nextBtn = document.querySelector('#nextbutton');

// Creates a counter to track which image we are on
let counter = 1;
// Selects initial width of image so prog knows how much to slide left or right
const size = carouselImages[0].clientWidth;
// Moves carousel back to start with first image instead of clone
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; 

// FUNCTIONS

// Add a function to track next button clicks
nextBtn.addEventListener('click', function () {
  // If user reaches end of carousel, stop execution 
  if (counter >= carouselImages.length -1) return;
  carouselSlide.style.transition = 'transform 0.3s ease-in-out';
  // Add 1 to the counter 
  counter++;  
  // Move carousel 
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

//create function to look for PREV button clicks
prevBtn.addEventListener('click',() => {
  if (counter <= 1) return;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// This function is triggered after transformation


// carouselSlide.addEventListener('transitionend', () => {
//   if (carouselImages[counter].id === 'lastClone') {


//     // Removes transition effect and translates back to original picture

//     carouselSlide.style.transition = 'none';

//     // -2 because we have duplicate and first image

//     counter = carouselImages.length -2 ;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//   }
//   if (carouselImages[counter].id === 'firstClone') {

//     //removes transition effect and translates back to original picture

//     carouselSlide.style.transition = 'none';

//     //-2 because we have duplicate and first

//     counter = carouselImages.length - counter;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//   }
// });







// SETUP

// Sets variables to return inner div and images
const carouselSlide1 = document.querySelector('.carousel-slide1');
const carouselImages1 = document.querySelectorAll('.carousel-slide1 img');

// Sets variables to return buttons
const prevBtn1 = document.querySelector('#prevbutton1');
const nextBtn1 = document.querySelector('#nextbutton1');

// Creates a counter to track which image we are on
let counter1 = 1;
// Selects initial width of image so prog knows how much to slide left or right
const size1 = carouselImages1[0].clientWidth;
// Moves carousel back to start with first image instead of clone
carouselSlide1.style.transform = 'translateX(' + (-size1 * counter1) + 'px)'; 

// FUNCTIONS

// Add a function to track next button clicks
    nextBtn1.addEventListener('click', function () {
  // If user reaches end of carousel, stop execution 
  if (counter1 >= carouselImages1.length -1) return;
  carouselSlide1.style.transition = 'transform 0.3s ease-in-out';
  // Add 1 to the counter 
  counter1++;  
  // Move carousel 
  carouselSlide1.style.transform = 'translateX(' + (-size1 * counter1) + 'px)';
});

//create function to look for PREV button clicks
prevBtn1.addEventListener('click',() => {
  if (counter1 <= 1) return;
  carouselSlide1.style.transition = 'transform 0.4s ease-in-out';
  counter1--;
  carouselSlide1.style.transform = 'translateX(' + (-size1 * counter1) + 'px)';
});





// SETUP

// Sets variables to return inner div and images
const carouselSlide2 = document.querySelector('.carousel-slide2');
const carouselImages2 = document.querySelectorAll('.carousel-slide2 img');

// Sets variables to return buttons
const prevBtn2 = document.querySelector('#prevbutton2');
const nextBtn2 = document.querySelector('#nextbutton2');

// Creates a counter to track which image we are on
let counter2 = 1;
// Selects initial width of image so prog knows how much to slide left or right
const size2 = carouselImages2[0].clientWidth;
// Moves carousel back to start with first image instead of clone
carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)'; 

// FUNCTIONS

// Add a function to track next button clicks
    nextBtn2.addEventListener('click', function () {
  // If user reaches end of carousel, stop execution 
  if (counter2 >= carouselImages2.length -1) return;
  carouselSlide2.style.transition = 'transform 0.3s ease-in-out';
  // Add 1 to the counter 
  counter2++;  
  // Move carousel 
  carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
});

//create function to look for PREV button clicks
prevBtn2.addEventListener('click',() => {
  if (counter2 <= 1) return;
  carouselSlide2.style.transition = 'transform 0.4s ease-in-out';
  counter2--;
  carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
});




// SETUP

// Sets variables to return inner div and images
const carouselSlide3 = document.querySelector('.carousel-slide3');
const carouselImages3 = document.querySelectorAll('.carousel-slide3 img');

// Sets variables to return buttons
const prevBtn3 = document.querySelector('#prevbutton3');
const nextBtn3 = document.querySelector('#nextbutton3');

// Creates a counter to track which image we are on
let counter3 = 1;
// Selects initial width of image so prog knows how much to slide left or right
const size3 = carouselImages3[0].clientWidth;
// Moves carousel back to start with first image instead of clone
carouselSlide3.style.transform = 'translateX(' + (-size3 * counter3) + 'px)'; 

// FUNCTIONS

// Add a function to track next button clicks
    nextBtn3.addEventListener('click', function () {
  // If user reaches end of carousel, stop execution 
  if (counter3 >= carouselImages3.length -1) return;
  carouselSlide3.style.transition = 'transform 0.3s ease-in-out';
  // Add 1 to the counter 
  counter3++;  
  // Move carousel 
  carouselSlide3.style.transform = 'translateX(' + (-size3 * counter3) + 'px)';
});

//create function to look for PREV button clicks
prevBtn3.addEventListener('click',() => {
  if (counter3 <= 1) return;
  carouselSlide3.style.transition = 'transform 0.4s ease-in-out';
  counter3--;
  carouselSlide3.style.transform = 'translateX(' + (-size3 * counter3) + 'px)';
});
