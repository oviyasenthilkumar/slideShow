let slideCount = 0;
let autoSlideCount = 0;
let pre = document.querySelector(".pre");
let next = document.querySelector(".nex");

pre.addEventListener("click", function(){
    slide(slideCount -= 1);
});
next.addEventListener("click", function(){
    slide(slideCount += 1);
});

function slide(n){
let slides = document.querySelectorAll(".slider-img");
if(n > slides.length-1 ) {
    slideCount = 0;
}else if(n < 0){
    slideCount = slides.length - 1;
}
for (let i = 0; i < slides.length ; i++) {
  slides[i].style.display = "none";
}
slides[slideCount].style.display = "block";
}
slide(slideCount);


//additional function to auto slideshow
function autoSlide(n){
    let slides = document.querySelectorAll(".slider-img");
    
    if(n > slides.length-1 ) {
        autoSlideCount = 0;
    }else if(n < 0){
        autoSlideCount = slides.length - 1;
    }
    for (let i = 0; i < slides.length ; i++) {
      slides[i].style.display = "none";
    }
    // During the auto slideshow. after the last slide automatically displays the first slide.
    if(autoSlideCount > slides.length-1){
        autoSlideCount = 0;
    }
    slides[autoSlideCount].style.display = "block";
    slides[autoSlideCount++];
    }
autoSlide(autoSlideCount);
setInterval(autoSlide, 3000);

//to get all the div elements

let dots = document.querySelectorAll(".empty-cls");
console.log(dots);

dots.forEach(function(ele){
    ele.addEventListener("click", function(e){
        let value = e.target.getAttribute("data-slide-count");
        dotSlide(value);
    })
})

function dotSlide(n){
    let slides = document.querySelectorAll(".slider-img");
    for (let i = 0; i < slides.length ; i++) {
      slides[i].style.display = "none";
    }
    console.log(n);
    slides[n-1].style.display = "block";
}