// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

let valor1 = prompt("Ingresar primer valor");
let valor2 = prompt("Ingresar segundo valor");

if (valor1 > valor2){
    document.write("El número mayor es: "+ valor1);
}
else if(valor1 == valor2){
    document.write("los dos números son iguales: " + valor1 + " - " + valor2);
}
else{
    document.write ("El número mayor es: "+ valor2)
}
