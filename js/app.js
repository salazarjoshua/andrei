
// Scroll FadeOut
let intro = document.querySelector(".intro");
window.addEventListener('scroll', function(){
    let value = 1 + window.scrollY/-600;
    intro.style.opacity = value;
});

//Modal View Images
const modal = document.querySelector(".modal")
const previews = document.querySelectorAll(".gallery img")
const original = document.querySelector(".view-img")
const caption = document.querySelector(".caption")
const captionHover = document.querySelector(".captionHover")

previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add("open");
        original.classList.add("open");
        //Dynamic change text and image
        const originalSrc = preview.getAttribute('src');
        original.src = originalSrc;
        const altText = preview.alt;
        caption.textContent = altText;
    });
});

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains("modal")) {
        modal.classList.remove("open");
        original.classList.remove("open");
    }
});



//Load More Images

$(function() {
    $(".img-hidden").slice(0, 8).show(); // select the first 6
    $("#loadMore").click(function(e) { // click event for load more
      e.preventDefault();
      $(".img-hidden:hidden").slice(0, 4).show(); // select next 3 hidden divs and show them
      if ($(".img-hidden:hidden").length == 0) { // check if any hidden divs still exist
        // $("#load").fadeOut('slow'); // alert if there are none left
        $("#loadMore").fadeOut();
      }

    });
  });


  //Responsive Navbar
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-list li');

  const navSlide = () => {
  burger.addEventListener('click',()=>{
   //Toggle Nav
    nav.classList.toggle('nav-active');
    //Animate links
    navLinks.forEach((link, index) => {
      if(link.style.animation){
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`
      }
    });
    //Burger Animation
    burger.classList.toggle('toggle');
    //Disable-Enable Scroll
  });

  window.addEventListener('scroll', function(){
    if ( $('#burger').hasClass('toggle')) {
         //Toggle Nav
   nav.classList.toggle('nav-active');

   //Animate links
   navLinks.forEach((link, index) => {
     if(link.style.animation){
       link.style.animation = ''
     } else {
       link.style.animation = `navLinkFade 0s ease forwards ${index / 7 + 0.5}s`
     }
   });
 
   //Burger Animation
   burger.classList.toggle('toggle');
    }
  });
}

navSlide();