
// triggers

function inicializa () {
    document.getElementById("texto-fuente").value = "";
    document.getElementById("texto-destino").innerText = "Ningun mensaje fue encontrado";
    document.getElementById("principito").style.display = "inline";
    document.getElementById("texto-instrucciones").style.display = "inline";
}

function verificaTexto() {
    let texto = document.getElementById("texto-fuente").value.trim();
    // presenta alerta si hay caracteres especiales o algo distinto a minusculas/numeros, excepto ñ
    if (/^[ a-z | 0-9 | ñ | \s ]+$/.test(texto)) {
        return true;
    } else {
        alert("El texto no debe contener mayusculas ni caracteres especiales");
        inicializa();
    } 
}

function encriptarTexto() {
    if (!verificaTexto()) return;
    // La letra "e" es convertida para "enter"; "i", "imes"; "a", "ai"; "o", "ober"; "u", "ufat"
    let texto = document.getElementById("texto-fuente").value.trim();
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
    document.getElementById("texto-instrucciones").style.display = "none";
    textoDestino.innerText = textoEncriptado;
}

function desencriptarTexto() {
    if (!verificaTexto()) return;
    let texto = document.getElementById("texto-fuente").value.trim();
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
    document.getElementById("texto-instrucciones").style.display = "none";
    textoDestino.innerText = textoDesencriptado;
}

function copiarTexto() {
    const textoDestino = document.getElementById("texto-destino").innerText;
    navigator.clipboard.writeText(textoDestino).then(() => {
        const banner = document.getElementById("banner");
        banner.hidden = false;
        // Hide the banner after 1 second
        setTimeout(() => {
            banner.hidden = true;
        }, 1000);
    });
}



// document.addEventListener("DOMContentLoaded", function() {
//     inicializa();
// }

// function asignaTextoElemento(elemento, texto) {
//     let elementoHTML = document.querySelector(elemento);
//     elementoHTML.innerHTML = texto;
// }

// function enableTAButtons() {
//     document.getElementById("encriptarBtn").removeAttribute("disabled");
//     document.getElementById("desencriptarBtn").removeAttribute("disabled");
// }