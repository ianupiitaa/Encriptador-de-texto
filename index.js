
function encriptar(){
    let texto = document.getElementById("texto").value;
    //let parrafo = document.getElementById("parrafo");
    //let imagen = document.getElementById("Imagen1");
    //let tituloMensaje = document.getElementById("cuerpo__mensaje__encriptado__titulo");

    let textoCifrado = texto
                        .replace(/e/gi, "3rq")
                        .replace(/i/gi, "1mk")
                        .replace(/o/gi, "0lz")
                        .replace(/u/gi, "5xc")
                        .replace(/a/gi, "8ds");
    
    if (document.getElementById("texto").value.length !== 0 ){
        document.getElementById("texto").value = textoCifrado;
        document.getElementById("cuerpo__mensaje__encriptado__titulo").textContent = "Texto encriptado";
        document.getElementById("parrafo").textContent = "";
        //document.getElementById("Imagen1").src = ""               en caso de imagen
    }else{
        imagen.src = ".img/Imagen1.png";
        alert("ingresa un texto, por favor");
    }
}