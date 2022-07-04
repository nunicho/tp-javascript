let texto = prompt("Ingrese texto: ")

let textoNoSimbolos = texto.replace(/[^A-Za-z0-9áéíóúÁÉÍÓÚ]/g, "")
let textoNoConsonante = textoNoSimbolos.replace(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTUVWXYZ0-9]/g, "");

document.write(textoNoConsonante)   