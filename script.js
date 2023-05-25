/*e --> enter 
o --> ober 
i --> imes 
a --> ai 
u --> ufat*/ 

function encriptar(){
    var texto = document.getElementById("caja").value.toLowerCase();
    //i para que afecte  mayusculas y minusculas
    //g para toda la linea u oracion
    //m para que afecte lineas o parrafos 
    var txtCifrado = texto.replace(/e/igm, "enter");
    var txtCifrado = txtCifrado.replace(/o/igm, "ober");
    var txtCifrado = txtCifrado.replace(/i/igm, "imes");
    var txtCifrado = txtCifrado.replace(/a/igm, "ai");
    var txtCifrado = txtCifrado.replace(/u/igm, "ufat");

    document.getElementById("imgm").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("btncop").style.display = "show";
    document.getElementById("btncop").style.display = "inherit";
}

function desencriptar(){
    var texto = document.getElementById("caja").value.toLowerCase();
    //i para que afecte  mayusculas y minusculas
    //g para toda la linea u oracion
    //m para que afecte lineas o parrafos 
    var txtCifrado = texto.replace(/enter/igm, "e");
    var txtCifrado = txtCifrado.replace(/ober/igm, "o");
    var txtCifrado = txtCifrado.replace(/imes/igm, "i");
    var txtCifrado = txtCifrado.replace(/ai/igm, "a");
    var txtCifrado = txtCifrado.replace(/ufat/igm, "u");

    document.getElementById("imgm").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("btncop").style.display = "show";
    document.getElementById("btncop").style.display = "inherit";
}

function btncopiar(){
    let texto2 = document.getElementById("texto2");
    let copiar = document.getElementById("copiar");

    navigator.clipboard.writeText(texto2.textContent);
    copiar.textContent="Copiado";  // Con esto solo cambio la palabra del botón es un extra jajaj
    
}