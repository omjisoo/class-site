// var f = document.getElementById("featured");
// var menu = document.getElementsByClassName("menu");
// var list = document.getElementsByClassName("list");
//
// for (var i = 0; i < f.length; i++) {
//   f[i].onclick = function(event) {
//     this.classList.toggle('expanded');
//   }
// }

// function myFunction(e) {
//   var elems = document.querySelectorAll(".active");
//   [].forEach.call(elems, function(el) {
//     el.classList.remove("active");
//   });
//   e.target.className = "active";
// }

var balls = document.getElementsByClassName("ball");
document.onmousemove = function(){
  var x = event.clientX * 100 / window.innerWidth + "%";
  var y = event.clientY * 100 / window.innerHeight + "%";

  for(var i=0;i<2;i++){
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = "translate(-"+x+", -"+y+")";
  }
}
