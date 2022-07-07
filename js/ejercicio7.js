// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let valor1 = parseInt(prompt("Ingresar primer valor"));
let valor2 = parseInt(prompt("Ingresar segundo valor"));
let valor3 = parseInt(prompt("Ingresar tercer valor"));

let valorMax = Math.max(valor1, valor2, valor3);

document.write("<br>El primer valor ingresado fue: " + valor1);
if (valorMax==valor1){
    document.write(" Igual al Valor Máximo")
}
document.write("<br>El segundo valor ingresado fue: " + valor2);
if (valorMax==valor2){
    document.write(" Igual al Valor Máximo")
}
document.write("<br>El tercer valor ingresado fue: " + valor3);
if (valorMax==valor3){
    document.write(" Igual al Valor Máximo")
}
document.write("<br>El Valor Máximo ingresado es: " +valorMax);

/*
Para que el sistema me elija cuál es el mayor número, usé la función Math.max
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/max

La función Math.max() retorna el mayor de cero o más números dados como parámetros de entrada, o NaN si cualquier parámetro no es un número y no puede ser convertido en uno.

Luego, para señalar en pantalla cuál de los tres valores ingresados (valor 1, valor 2 o valor3) es el mayor, comparé la variable valorMax (que surge de aplicar Math.max) con cada uno de los valores.
El sistema me permite indicar cuál es el valor ingresado es mayor, también si más de uno de los valores ingresados es el mayor (por ejemplo 5,5,1)
*/