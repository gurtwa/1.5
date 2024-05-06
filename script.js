document.addEventListener('DOMContentLoaded', function() {
    let mySwiper = new Swiper('.swiper', {
       slidesPerView: 'auto',
       loop: false,
       spaceBetween: 15,
       pagination: {
         el: '.swiper-pagination',
         clickable: true,
         type: 'bullets',
       },
       breakpoints: {
         768: {
           enabled: false,
           spaceBetween: 24,
           autoHeight: false,
           slidesPerView: 3,
           slidesPerGroup: 3,
           slidesPerColumn: 2,
         }
 
       },
     });
 
     const expendButton = document.querySelector(".expend");
     expendButton.addEventListener("click", function() {
         const buttonText = this.querySelector("span").innerHTML;
         const swiperSlides768 = document.querySelectorAll(".swiper-slide__768");
    
         const buttonImage = this.querySelector(".expend__button-image");
 
         if (buttonText === "Показать все") {
             swiperSlides768.forEach(function(slide) {
                 slide.style.display = "flex";
             });
             this.querySelector("span").innerHTML = "Скрыть";
             buttonImage.classList.add("rotate180");
         } 
         else {
             if (window.innerWidth >= 924) {
                 swiperSlides768.forEach(function(slide) {
                     slide.style.display = "none";
                 });
                 document.querySelectorAll(".swiper-slide__show924").forEach(function(slide) {
                     slide.style.display = "flex";
                 });
                 this.querySelector("span").innerHTML = "Показать все";
                 buttonImage.classList.remove("rotate180");
             } else if (window.innerWidth >= 768) {
                 swiperSlides768.forEach(function(slide) {
                     slide.style.display = "none";
                 });
                 document.querySelectorAll(".swiper-slide__show924").forEach(function(slide) {
                     slide.style.display = "none";
                 });
                 this.querySelector("span").innerHTML = "Показать все";
                 buttonImage.classList.remove("rotate180");
             } else {
                 swiperSlides768.forEach(function(slide) {
                     slide.style.display = "none";
                 });
                 document.querySelectorAll(".swiper-slide__show924").forEach(function(slide) {
                     slide.style.display = "flex";
                 });
                 this.querySelector("span").innerHTML = "Показать все";
                 buttonImage.classList.remove("rotate180");
             }
         }
     });
 
     window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            mySwiper.slideTo(0, 0); 
         }
    });
 });
 