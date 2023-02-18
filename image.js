var bigimg = document.getElementById("main");
var smallimg = document.getElementsByClassName("small");

for (var i = 0; i < smallimg.length; i++) {
  smallimg[i].addEventListener("click", function() {
    bigimg.src = this.src;
  });
}