var menuToggle = document.querySelector("#menu");
var activeElements = document.querySelectorAll(".active-element");

var toggledMenu = menuToggle.addEventListener("click", function(){ //active when click 'menu'
     activeElements.forEach(function(e){
          e.classList.toggle("active"); //apply to all active-elements
     });
});
