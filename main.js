$('#menu').click(function(){
  $('nav').toggleClass('is-expanded');
});

$('.has-subnav a').click(function(){
  $(this).parent().toggleClass('is-expanded');
  $('nav').toggleClass('is-subnav-expanded');
});

//document.getElementById('menu').addEventListener('click', function(){
//  var el = document.getElementById('nav');
//  el.className = el.className + 'is-expanded';
//},false );