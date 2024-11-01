let videos = document.querySelectorAll('video')
let video = document.getElementById('video')
let playBtn = document.getElementById('video-button')

let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.play()
    } else{
      entry.target.pause()
    }
  })
})
videos.forEach(el => {
  observer.observe(el)
})


window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
var unstickPoint = sticky + (window.innerHeight * 1); // Adjust the multiplier to set the number of pages

function myFunction() {
  if (window.pageYOffset > sticky && window.pageYOffset < unstickPoint) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// window.onscroll = function() {yourFunction()};

// var pic_container = document.getElementById("mypic_container");
// var sticky = pic_container.offsetTop;
// var unstickPoint = sticky + (window.innerHeight * 1); // Adjust the multiplier to set the number of pages

// function yourFunction() {
//   if (window.pageYOffset > sticky && window.pageYOffset < unstickPoint) {
//     pic_container.classList.add("sticky");
//   } else {
//     pic_container.classList.remove("sticky");
//   }
// }

const slider = document.querySelector(".image-comparison .slider");
const beforeImage = document.querySelector(".image-comparison .before-image");
const sliderLine = document.querySelector(".image-comparison .slider-line");
const sliderIcon = document.querySelector(".image-comparison .slider-icon");

slider.addEventListener("input", (e) => {
  let sliderValue = e.target.value + "%";

  beforeImage.style.width = sliderValue;
  sliderLine.style.left = sliderValue;
  sliderIcon.style.left = sliderValue;
});

// function background(){

// }


// window.onscroll = function() { changeBackground() };

// function changeBackground() {
//   var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
//   var body = document.body;

//   if (scrollPosition < 300) {
//     body.style.backgroundColor = "lightblue";
//   } else if (scrollPosition < 600) {
//     body.style.backgroundColor = "lightgreen";
//   } else if (scrollPosition < 900) {
//     body.style.backgroundColor = "lightcoral";
//   } else {
//     body.style.backgroundColor = "lightgoldenrodyellow";
//   }
// }



