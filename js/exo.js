
console.log ("debut du programme");
var nombre = Math.floor(Math.random() *101);

var i= 0;

function number()
{
  i++;
   if(i >10){
     document.write('<img style="width:600px; height:400px"; src="image/sang-gif-007.gif" />');


   }

  var nombre1 = document.getElementById("nombre").value;
  var result = Math.abs(nombre1-nombre);

  if (result==0){
  document.getElementById("resultat2").innerHTML='C\'est gagné';
  document.getElementById("resultat2").style.color ="white";
  document.getElementById("resultat").style.backgroundImage = 'url("image/4 .gif")';
  document.getElementById("resultat2").style.textAlign ="center";

}
  else if (result<10){
  document.getElementById("resultat2").innerHTML='C\'est chaud';
   document.getElementById("resultat2").style.color ="white";
   document.getElementById("resultat").style.backgroundImage = 'url("image/0009.gif")';
   document.getElementById("resultat2").style.textAlign ="center";

 }
  else if(result<20){
  document.getElementById("resultat2").innerHTML='C\'est tiéde';
  document.getElementById("resultat2").style.color ="white";
  document.getElementById("resultat").style.backgroundImage = 'url("image/index3.jpeg")';
  document.getElementById("resultat2").style.textAlign ="center";

}
  else if(result<30){
  document.getElementById("resultat2").innerHTML='C\'est décongelé';
  document.getElementById("resultat2").style.color ="black";
  document.getElementById("resultat2").style.textAlign ="center";
  document.getElementById("resultat").style.backgroundImage = 'url("image/index4.jpeg")';


}

  else if(result<40){
  document.getElementById("resultat2").innerHTML='C\'est froid';
  document.getElementById("resultat2").style.color ="red";
  document.getElementById("resultat").style.backgroundImage = 'url("image/original.gif")';
  document.getElementById("resultat2").style.textAlign ="center";

}
else{
document.getElementById("resultat2").innerHTML='C\'est le pole nord';
document.getElementById("resultat2").style.color ="white";
document.getElementById("resultat").style.backgroundImage = 'url("image/index.jpeg")';
document.getElementById("resultat2").style.textAlign ="center";

}

console.log(i);
console.log("fin");
}
