// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let valor1 = prompt("Ingresar primer valor");
let valor2 = prompt("Ingresar segundo valor");
let valor3 = prompt("Ingresar tercer valor");

let valorMax = Math.max(valor1, valor2, valor3);

document.write("<br>El primer valor ingresado fue: " + valor1);
if (valorMax==valor1){
    document.write(" Igual al valor Máximo")
}
document.write("<br>El segundo valor ingresado fue: " + valor2);
if (valorMax==valor2){
    document.write(" Igual al Valor Máximo")
}
document.write("<br>El tercer valor ingresado fue: " + valor3);
if (valorMax==valor3){
    document.write(" Igual al Valor Máximo")
}
document.write("<br>El valor mayor ingresado es: " +valorMax);

