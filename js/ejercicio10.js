let valorAComprobar = prompt("Ingresar valor a dividir: ");

if (valorAComprobar%2==0 || valorAComprobar%3==0 ||valorAComprobar%5==0 || valorAComprobar%7==0 ){
    document.write("El número " + valorAComprobar + " es divisible por 2, 3, 5 ó 7")
}
else{
    document.write("El número " + valorAComprobar +  " NO es divisible por 2, 3, 5 ó 7")
}

