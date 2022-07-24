//APP-Screenshots
var swiper = new Swiper('.swiper-container .app-screen',{
 effect: "coverflow",
 loop:true,
 autoplaySpeed: 3000,
 centeredSlides: true,
 slidesPerView: 'auto',
 autoplay:{
   delay:5000,
   disableOnInteraction:false
 },
 pagination:{
   el:'.swiper-pagination',
   clickable:true,
 },
 paginationClickable:true,
 coverflow:{
   rotate:0,
   stretch:100,
   depth:150,
   modifier:1.5,
   slideShadows: false,
 }
});
