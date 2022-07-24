//
function navMenu(){
  let navBar = document.querySelector('.navbar-sticky');
   window.onscroll = function(){
    //var scroll = document.documentElement.scrollTop;
    if(document.body.scrollTop >= 120){
      navBar.classList.add("navbar-sticky-moved-up");
    }else{
      navBar.classList.remove("navbar-sticky-moved-up");
    }
    //Apply transition
    if(document.body.scrollTop >= 250){
      navBar.classList.add("navbar-sticky-transitioned");
     
      }else{
        navBar.classList.remove("navbar-sticky-transitioned");
      
    }
  // Sticky on
  if(document.body.scrollTop >= 500){
    navBar.classList.add("navbar-sticky-on");
    }else{
      navBar.classList.remove("navbar-sticky-on");
          }
  }
}
navMenu();
//counter design
document.addEventListener("DOMContentLoaded",() =>{
  function counter(id,start,end, duration){
    let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration/range)),
    timer = setInterval(() =>{
      current += increment;
      obj.textContent = current;
      if(current == end){
        clearInterval(timer);
      }
  } , step);
  }
  counter("count1", 0,10,2000);
  counter("count2", 100,20,3000);
  counter("count3", 0,30,4000);
  counter("count4", 0,10,2000);
});

//APP-Screenshots

  var swiper = new Swiper('.swiper-container.app-screen', {
    effect: 'coverflow',
    loop:true,
    autoplaySpeed:3000,
    centeredSlides:true,
    slidesPerView:'auto',
    autoplay:{
      delay:5000,
      disableOnInteraction:false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
    paginationClickable:true,
    coverflow: {
      rotate: 0,
      stretch: 100,
      depth: 150,
      modifier: 1.5,
      slideShadows: false,
    },
    
  });
// scroll top
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 120px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   if (document.body.scrollTop > 4850 || document.documentElement.scrollTop > 4850) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



// Side Navigation Bar close while we click on Navigation links
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
  a.addEventListener("click",function(){
    navCollapse.classList.remove("show");
  })
})