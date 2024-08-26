
function encriptar(){
    let texto = document.getElementById("texto").value;
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("Imagen1")

    let tituloMensaje = Document.getElementById("cuerpo__mensaje__encriptado__titulo");
    let textoCifrado = texto.replace(/e/gi , "erasmo").replace(/i/gi ,"iman").replace(/o/gi,"hora").replace(/u/gi,"yuya").replace(/a/gi,"nano");
    
    if (texto.length =! 0 ){
        texto = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado";
        parrafo.textContent = "";
        //imagen.src = ""               en caso de imagen
    }else{
        imagen.src = ".img/Imagen1.png";
        alert("ingresa un texto, por favor")
    }
}