$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('#div2 h2').css({ transform: 'translateY(windowHeight * 2)' });
  }
  setHeight();

  $(window).resize(function() {
    setHeight();
  });

  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var imgPos = scrollTop / 5 + 'px';
    $('#div2').css('transform', 'translateY(-' + imgPos + ')');
  });

  window.onscroll = function() {
    myFunction();
  };
  var header = document.getElementById('main-header');
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  }
  // $('#page').mCustomScrollbar({theme: 'dark'});
});

// function simpleParallax(intensity, element) {
//   $(window).scroll(function() {
//       var scrollTop = $(window).scrollTop();
//       var imgPos = scrollTop / intensity + 'px';
//       element.css('transform', 'translateY(' + imgPos + ')');
//   });
// }
