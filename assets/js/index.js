$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('#div2').css('top', windowHeight / 3);
  }
  setHeight();

  $(window).resize(function() {
    setHeight();
  });

  // $('#page').mCustomScrollbar({theme: 'dark'});
});
