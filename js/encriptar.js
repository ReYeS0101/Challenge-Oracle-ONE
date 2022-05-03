function encriptado(){
    var cifrado = document.querySelector("#TE").value;
    var texcifrado = cifrado.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector("#TD").value = texcifrado;
    document.querySelector("#TE").value;
}

var bt1 = document.querySelector("#bt1"); bt1.onclick = encriptado;





