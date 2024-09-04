
$('body').scrollspy({
  'target': '#nav',
  'offset': 40
});

$('.carousel').each(function() {
  var speed = 5000;
  if ($(this).data('rel-speed') != null) {
  	speed = $(this).data('rel-speed');
  }
  $(this).carousel({
  	interval: speed
  });
});

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});