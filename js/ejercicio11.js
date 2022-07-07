
// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)


let valorAComprobar = parseInt(prompt("Ingresar valor a dividir: "));

if (valorAComprobar%2==0){
    document.write("El número " + valorAComprobar + " es divisible por 2")
}
else{
    document.write("<br>El número " + valorAComprobar +  " NO es divisible por 2")
}
if (valorAComprobar%3==0){
    document.write("<br>El número " + valorAComprobar + " es divisible por 3")
}
else{
    document.write("<br>El número " + valorAComprobar +  " NO es divisible por 3")
}
if (valorAComprobar%5==0){
    document.write("<br>El número " + valorAComprobar + " es divisible por 5")
}
else{
    document.write("<br>El número " + valorAComprobar +  " NO es divisible por 5")
}
if (valorAComprobar%7==0){
    document.write("<br>El número " + valorAComprobar + " es divisible por 7")
}
else{
    document.write("<br>El número " + valorAComprobar +  " NO es divisible por 7")
}