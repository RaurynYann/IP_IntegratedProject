var bigimg = document.getElementById("main");
var smallimg = document.getElementsByClassName("small");

smallimg[0].onclick = function(){
    bigimg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    bigimg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
    bigimg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
    bigimg.src = smallimg[3].src;
}