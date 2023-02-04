var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("menu").style.transition = "top 0.8s ease-in-out";
    document.getElementById("menu").style.top = "0";
    document.getElementById("hidemenu").style.top = "89px";
    document.getElementById("hidemenu").style.transition = "top 0.8s ease-in-out";
  } else {
    document.getElementById("menu").style.transition = "top 0.8s ease-in-out";
    document.getElementById("menu").style.top = "-200px";
    document.getElementById("hidemenu").style.top = "0px";
    document.getElementById("hidemenu").style.transition = "top 0.8s ease-in-out";
  }
  prevScrollpos = currentScrollPos;
}
$(window).on("load", function() {
  $("#loading").fadeOut("slow");
});
function openmenu(){
  const hidemenu = document.getElementById("hidemenu");
  if (hidemenu.style.right == "-115px"){
      hidemenu.style.right = "0";
      hidemenu.style.transition = "right 0.3s ease-in-out";
    }
  else{
    hidemenu.style.transition = "right 0.3s ease-in-out";
    hidemenu.style.right = "-115px";
  }

}