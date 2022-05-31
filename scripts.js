
/* ------------------------- */
/* Cambiar imagen de perfil*/
/* ------------------------- */

/*establecemos un condicional if en el que buscamos (con match) el fragmento de string
 que se corresponde con la primera foto.*/

function cambiar_imagen(){
    var elemento = document.getElementById("imagenPerfil");
    if (elemento.src.match("primera")) {
        elemento.src = "img/segunda.jpg";
    } else {
        elemento.src = "img/primera.png";
    }
};
 

/* ------------------------- */
/* Acerca de*/
/* ------------------------- */

function cambiar_parrafo(){
  document.getElementById("edit-acercade").style.display="block";
  let texto=document.getElementById("text-acercade").innerText;
  console.log(texto);
};


function myFunction2(valor){
document.getElementById("text-acercade").innerText=valor;
};

function logMessage(message){
  console.log(message + "<br>");

}


//controla si se presiona un enter

let textarea=document.getElementById("edit-acercade")
  textarea.addEventListener("keyup",(e)=>{
    logMessage('key."$(e.key)").released.[event:keyup]');
    if(e.key=="Enter"){
      document.getElementById("edit-acercade").style.display="none"
    }

  });



