function desencriptado(){
    var cifrado = document.querySelector("#TE").value;
    var texcifrado = cifrado.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector("#TD").value = texcifrado;
    document.querySelector("#TE").value;   
}

var bt2 = document.querySelector("#bt2"); bt2.onclick = desencriptado;