function encriptarTexto() {
    // La letra "e" es convertida para "enter"; "i", "imes"; "a", "ai"; "o", "ober"; "u", "ufat"
    let texto = document.getElementById("texto-fuente").value;
    let textoEncriptado = '';

    const replacements = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    textoEncriptado = texto.replace(/[eiaou]/gi, (match) => replacements[match.toLowerCase()]);
    asignaTextoElemento(".texto-destino", textoEncriptado);
}

function desencriptarTexto() {
    let texto = document.getElementById("texto-fuente").value;
    let textoDesencriptado = '';
    const replacements = {
        'enter': 'e',
        'imes' : 'i',
        'ai'   : 'a',
        'ober' : 'o',
        'ufat' : 'u'
    };
    textoDesencriptado = texto.replace(/enter|imes|ai|ober|ufat/gi, (match) => replacements[match.toLowerCase()]);
    console.log(textoDesencriptado);
    asignaTextoElemento(".texto-destino", textoDesencriptado);
}

function asignaTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}