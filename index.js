function removefoto() {
    let imagen = document.getElementById("Imagen1");
    imagen.style.display = 'none';
  }
  
  function encriptar() {
    let texto = document.getElementById("texto").value.trim(); 
  
    if (texto.length !== 0) {
      let textoCifrado = texto
        .replace(/e/gi, "3rq")
        .replace(/i/gi, "1mk")
        .replace(/o/gi, "0lz")
        .replace(/u/gi, "5xc")
        .replace(/a/gi, "8ds");
  
      document.getElementById("cuerpo__mensaje__encriptado__titulo").textContent = " ";
      document.getElementById("parrafo").textContent = "";
      removefoto();
      let seccion = document.getElementById("seccion");
      seccion.textContent = textoCifrado;
    } else {
      alert("Ingresa un texto, por favor");
    }
  }
  
  function desencriptar() {
    let texto = document.getElementById("texto").value.trim();
  
    if (texto.length !== 0) {
      let textoDescifrado = texto
        .replace(/3rq/gi, "e")
        .replace(/1mk/gi, "i")
        .replace(/0lz/gi, "o")
        .replace(/5xc/gi, "u")
        .replace(/8ds/gi, "a");
  
      document.getElementById("cuerpo__mensaje__encriptado__titulo").textContent = " ";
      document.getElementById("parrafo").textContent = "";
      removefoto();
      let seccion = document.getElementById("seccion");
      seccion.textContent = textoDescifrado;
    } else {
      let imagen = document.getElementById("Imagen1");
      imagen.style.display = 'block';
    }
  }