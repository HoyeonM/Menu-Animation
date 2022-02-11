var menuToggle = document.querySelector("#menu");
var activeElements = document.querySelectorAll(".active-element");

var toggledMenu = menuToggle.addEventListener("click", function(){ //메뉴 클릭시 active
     activeElements.forEach(function(e){
          e.classList.toggle("active"); //모든 active-element에 active적용
     });
});
