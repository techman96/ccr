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


// window.onscroll = function() {myFunction()};

// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;
// var unstickPoint = sticky + (window.innerHeight * 1); // Adjust the multiplier to set the number of pages

// function myFunction() {
//   if (window.pageYOffset > sticky && window.pageYOffset < unstickPoint) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

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

const sliders = document.querySelectorAll(".image-comparison .slider");
const beforeImages = document.querySelectorAll(".image-comparison .before-image");
const sliderLines = document.querySelectorAll(".image-comparison .slider-line");
const sliderIcons = document.querySelectorAll(".image-comparison .slider-icon");

sliders.forEach((slider, index) => {
  slider.addEventListener("input", (e) => {
    let sliderValue = e.target.value + "%";

    beforeImages[index].style.width = sliderValue;
    sliderLines[index].style.left = sliderValue;
    sliderIcons[index].style.left = sliderValue;
  });
});


// const slider_1 = document.querySelectorAll(".image-comparison .slider")[1];
// const beforeImage_1 = document.querySelectorAll(".image-comparison .before-image")[1];
// const sliderLine_1 = document.querySelectorAll(".image-comparison .slider-line")[1];
// const sliderIcon_1 = document.querySelectorAll(".image-comparison .slider-icon")[1];

// slider_1.addEventListener("input", (e) => {
//   let sliderValue_1 = e.target.value + "%";

//   beforeImage_1.style.width = sliderValue_1;
//   sliderLine_1.style.left = sliderValue_1;
//   sliderIcon_1.style.left = sliderValue_1;
// });

// const slider_2 = document.querySelectorAll(".image-comparison .slider")[2];
// const beforeImage_2 = document.querySelectorAll(".image-comparison .before-image")[2];
// const sliderLine_2 = document.querySelectorAll(".image-comparison .slider-line")[2];
// const sliderIcon_2 = document.querySelectorAll(".image-comparison .slider-icon")[2];

// slider_2.addEventListener("input", (e) => {
//   let sliderValue_2 = e.target.value + "%";

//   beforeImage_2.style.width = sliderValue_2;
//   sliderLine_2.style.left = sliderValue_2;
//   sliderIcon_2.style.left = sliderValue_2;
// });


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



