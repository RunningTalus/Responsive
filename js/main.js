var path = $("#star-svg").attr("data-path")
var svgObj;

if (Modernizr.svg) {
  console.log(path)
  svgObj = "<object type=\"image/svg+xml\"  style=\"float:right\" data=\""+ path +".svg\"></object>"
} else {
  svgObj = "<img src=\""+ path +".png\">"
}

$("#star-svg").html(svgObj);

$("#infoTray").click(function(){
  $("body").toggleClass("info-active");
});

$("#navTray").click(function(){
  $("body").toggleClass("nav-active");
});

console.log(document.body.clientWidth);