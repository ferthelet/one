
// triggers

function inicializa () {
    document.getElementById("texto-fuente").value = "";
}

function encriptarTexto() {
    // La letra "e" es convertida para "enter"; "i", "imes"; "a", "ai"; "o", "ober"; "u", "ufat"
    let texto = document.getElementById("texto-fuente").value;
    let textoEncriptado = '';

    const replacements = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };
    textoEncriptado = texto.replace(/[eiaou]/gi, (match) => replacements[match.toLowerCase()]);
    asignaTextoElemento(".texto-destino", textoEncriptado);
    document.getElementById("texto-destino").value = textoEncriptado;
}

function desencriptarTexto() {
    let texto = document.getElementById("texto-fuente").value;
    let textoDesencriptado = '';
    const replacements = {
        'ai'   : 'a',
        'enter': 'e',
        'imes' : 'i',
        'ober' : 'o',
        'ufat' : 'u'
    };
    textoDesencriptado = texto.replace(/enter|imes|ai|ober|ufat/gi, (match) => replacements[match.toLowerCase()]);
    asignaTextoElemento(".texto-destino", textoDesencriptado);
}

function asignaTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}