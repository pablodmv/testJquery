
var mensaje = 1;
var video = 0;
var i = 0;
$(document).ready(function(){

document.getElementById('myVideo').addEventListener('ended',myHandler,false);
$("#div1").hide();
$("#div2").hide();
$("#myVideo").trigger('stop');
$("#myVideo").hide();
var interval = setInterval(manageInterval, 3000);




function manageInterval(){
  console.log(mensaje);
  if (mensaje == 1) {

    intervaloMensaje();
    console.log("ejecuto mensaje" + mensaje);
  } else {
    intervaloVideo();
    clearInterval(interval);
    console.log("ejecuto video");

  }

}

function intervaloMensaje(){
  if (i<5) {
    $("#div1").show();
    $("#div1").text("El numero es " + i)
    i++;
  } else {
    mensaje = 0;
    video = 1;
    i=0;
    $("#div1").hide();
    console.log("seteo video");
  }
}



function intervaloVideo(){
  if (video == 1) {
    $("#myVideo").show();
    $("#myVideo").trigger('play');

  } else {

  }


}

function myHandler(){
  if (video == 1) {
    video = 0;
    mensaje = 1;
    $("#myVideo").trigger('stop');
    $("#myVideo").hide();
   interval = setInterval(manageInterval,3000);
    console.log("Ejecute handler");

  } else {
    //Next video here
  }

}


});
