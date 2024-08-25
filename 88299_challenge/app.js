
// triggers

function inicializa () {
    document.getElementById("texto-fuente").value = "";
    document.getElementById("texto-destino").value = "";
    document.getElementById("principito").style.display = "inline";
    // document.getElementById("principito").removeAttribute("hidden");
}

function encriptarTexto() {
    // La letra "e" es convertida para "enter"; "i", "imes"; "a", "ai"; "o", "ober"; "u", "ufat"
    let texto = document.getElementById("texto-fuente").value;
    let textoEncriptado = '';
    let textoDestino = document.getElementById("texto-destino");

    const replacements = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };
    textoEncriptado = texto.replace(/[eiaou]/gi, (match) => replacements[match.toLowerCase()]);
    document.getElementById("principito").style.display = "none";
    textoDestino.value = textoEncriptado;
}

function desencriptarTexto() {
    let texto = document.getElementById("texto-fuente").value;
    let textoDesencriptado = '';
    let textoDestino = document.getElementById("texto-destino");

    const replacements = {
        'ai'   : 'a',
        'enter': 'e',
        'imes' : 'i',
        'ober' : 'o',
        'ufat' : 'u'
    };
    textoDesencriptado = texto.replace(/enter|imes|ai|ober|ufat/gi, (match) => replacements[match.toLowerCase()]);
    document.getElementById("principito").style.display = "none";
    textoDestino.value = textoDesencriptado;
}

// function asignaTextoElemento(elemento, texto) {
//     let elementoHTML = document.querySelector(elemento);
//     elementoHTML.innerHTML = texto;
// }

// function enableTAButtons() {
//     document.getElementById("encriptarBtn").removeAttribute("disabled");
//     document.getElementById("desencriptarBtn").removeAttribute("disabled");
// }