

window.addEventListener("scroll",function() {
    var progreso = document.documentElement.scrollTop;
console.log("cosas " + progreso);
var nav_bolador = document.getElementById("nav");



if (progreso > 300) {
nav_bolador.style.top = "0px";
}
if (progreso < 300) {
nav_bolador.style.top = "-100px";


}

})

function bajar(cosa) {
  // window.scroll({
  //   top: cosa,
  //   left: 0,
  //   behavior: "smooth",
  // });

window.scroll(500, cosa);
}


function sobre_mi() {
var arriba = document.getElementById("arriba");
arriba.style.zIndex = "100000";
arriba.style.opacity = "1";
arriba.style.transition = "all 0.5s";

}


function fuera_mi() {
  var arriba = document.getElementById("arriba");
  arriba.style.zIndex = "-100000";
  arriba.style.opacity = "0";
  arriba.style.transition = "all 0.5s";
}


