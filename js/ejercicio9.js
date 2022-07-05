let texto = prompt("Ingrese texto: ")

let textoMinuscula = texto.toLowerCase();

let textoNoSimbolos = textoMinuscula.replace(/[^a-z0-9áéíóú]/g, "")
let textoNoConsonantes = textoNoSimbolos.replace(/[bcdfghjklmnpqrstvwxyz0-9]/g, "");

document.write("Las vocales de este texto son: "+textoNoConsonantes +"<br>")   

  
var countTotal = textoNoConsonantes.split("").length;
document.write("Cantidad de vocales TOTAL: " + countTotal +"<br>");

var countA = (textoNoConsonantes.split("a").length  - 1)+(textoNoConsonantes.split("á").length  - 1);
document.write("Cantidad de vocales A: " + countA +"<br>");

var countE = (textoNoConsonantes.split("e").length  - 1)+(textoNoConsonantes.split("é").length  - 1);
document.write("Cantidad de vocales E: " + countE +"<br>");

var countI = (textoNoConsonantes.split("i").length  - 1)+(textoNoConsonantes.split("í").length  - 1);
document.write("Cantidad de vocales I: " + countI +"<br>");

var countO = (textoNoConsonantes.split("o").length  - 1)+(textoNoConsonantes.split("ó").length  - 1);
document.write("Cantidad de vocales O: " + countO +"<br>");

var countU = (textoNoConsonantes.split("u").length - 1)+(textoNoConsonantes.split("ú").length  - 1);
document.write("Cantidad de vocales U: " + countU +"<br>");