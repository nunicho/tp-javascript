// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

let valorAComprobar = prompt("Ingresar valor a dividir: ");

if (valorAComprobar%2==0 || valorAComprobar%3==0 ||valorAComprobar%5==0 || valorAComprobar%7==0 ){
    document.write("El número " + valorAComprobar + " es divisible por 2, 3, 5 ó 7")
}
else{
    document.write("El número " + valorAComprobar +  " NO es divisible por 2, 3, 5 ó 7")
}

