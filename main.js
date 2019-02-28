/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  window.onload=function(){
      let bannerImg=document.getElementById("banner");
let counter=2;
      setInterval(function(){
    bannerImg.setAttribute("src","./imgs/"+counter+".jpg");
    counter++;
if(counter==6){
counter=1;
}
} , 3000);
  }


  function homeNav(){
      document.getElementById("home").setAttribute("style","display:block");
      document.getElementById("html").setAttribute("style","display:none");
      document.getElementById("css").setAttribute("style","display:none");
      document.getElementById("javascript").setAttribute("style","display:none");


  }
  function htmlNav(){
    document.getElementById("home").setAttribute("style","display:none");
    document.getElementById("html").setAttribute("style","display:block");
    document.getElementById("css").setAttribute("style","display:none");
    document.getElementById("javascript").setAttribute("style","display:none");


}
function cssNav(){
    document.getElementById("home").setAttribute("style","display:none");
    document.getElementById("html").setAttribute("style","display:none");
    document.getElementById("css").setAttribute("style","display:block");
    document.getElementById("javascript").setAttribute("style","display:none");


}
function javascriptNav(){
    document.getElementById("home").setAttribute("style","display:none");
    document.getElementById("html").setAttribute("style","display:none");
    document.getElementById("css").setAttribute("style","display:none");
    document.getElementById("javascript").setAttribute("style","display:block");


}