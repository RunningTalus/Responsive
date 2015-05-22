$('#menu').click(function(){
  $('nav').toggleClass('is-expanded');
});

$('.has-subnav a').click(function(){
  $(this).parent().toggleClass('is-expanded');
  $('nav').toggleClass('is-subnav-expanded');
});