// 8.- Escribe un programa que pida un número y diga si es divisible por 2

let valorADividir = parseInt(prompt("Ingresar valor a dividir: "));

if (valorADividir%2==0){
    document.write("El número " + valorADividir + " es divisible por 2")
}
else{
    document.write("El número " + valorADividir +  " no es divisible por 2")
}