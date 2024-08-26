
function encriptar(){
    let texto = document.getElementById("texto").value;
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("Imagen1");

    let tituloMensaje = Document.getElementById("cuerpo__mensaje__encriptado__titulo");
    let textoCifrado = texto
                        .replaceall("e", "erasmo")
                        .replaceall("i", "iman")
                        .replaceall("o", "hora")
                        .replaceall("u", "yuya")
                        .replaceall("a", "nano");
    
    if (texto.length != 0 ){
        texto = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado";
        parrafo.textContent = "";
        //imagen.src = ""               en caso de imagen
    }else{
        imagen.src = ".img/Imagen1.png";
        alert("ingresa un texto, por favor");
    }
}