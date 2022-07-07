// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
// Realizado SIGUIENDO LOS LINEAMIENTOS VISTOS EN clase del 5/7/22

let texto = prompt("Ingrese una frase de HASTA 10 caracteres:");
document.write(texto);
frase = texto.toLowerCase();
let fraseLength = ("<br> Cantidad de letras" + frase.length);
document.write("<br> La frase tiene la siguiente cantidad de letras: " + frase.length)

if (frase.length < 11) {
    document.write("<br> Las vocales son las siguientes: ")
    if (frase.charAt(0) === 'a' || frase.charAt(0) === 'e' || frase.charAt(0) === 'i' || frase.charAt(0) === 'o' || frase.charAt(0) === 'u' || frase.charAt(0) === 'á' || frase.charAt(0) === 'é' || frase.charAt(0) === 'í' || frase.charAt(0) === 'ó' || frase.charAt(0) === 'ú') {
        document.write(frase.charAt(0))
    }
    if (frase.charAt(1) === 'a' || frase.charAt(1) === 'e' || frase.charAt(1) === 'i' || frase.charAt(1) === 'o' || frase.charAt(1) === 'u' || frase.charAt(1) === 'á' || frase.charAt(1) === 'é' || frase.charAt(1) === 'í' || frase.charAt(1) === 'ó' || frase.charAt(1) === 'ú') {
        document.write(frase.charAt(1))
    }
    if (frase.charAt(2) === 'a' || frase.charAt(2) === 'e' || frase.charAt(2) === 'i' || frase.charAt(2) === 'o' || frase.charAt(2) === 'u' || frase.charAt(2) === 'á' || frase.charAt(2) === 'é' || frase.charAt(2) === 'í' || frase.charAt(2) === 'ó' || frase.charAt(2) === 'ú') {
        document.write(frase.charAt(2))
    }
    if (frase.charAt(3) === 'a' || frase.charAt(3) === 'e' || frase.charAt(3) === 'i' || frase.charAt(3) === 'o' || frase.charAt(3) === 'u' || frase.charAt(3) === 'á' || frase.charAt(3) === 'é' || frase.charAt(3) === 'í' || frase.charAt(3) === 'ó' || frase.charAt(3) === 'ú') {
        document.write(frase.charAt(3))
    }
    if (frase.charAt(4) === 'a' || frase.charAt(4) === 'e' || frase.charAt(4) === 'i' || frase.charAt(4) === 'o' || frase.charAt(4) === 'u' || frase.charAt(4) === 'á' || frase.charAt(4) === 'é' || frase.charAt(4) === 'í' || frase.charAt(4) === 'ó' || frase.charAt(4) === 'ú') {
        document.write(frase.charAt(4))
    }
    if (frase.charAt(5) === 'a' || frase.charAt(5) === 'e' || frase.charAt(5) === 'i' || frase.charAt(5) === 'o' || frase.charAt(5) === 'u' || frase.charAt(5) === 'á' || frase.charAt(5) === 'é' || frase.charAt(5) === 'í' || frase.charAt(5) === 'ó' || frase.charAt(5) === 'ú') {
        document.write(frase.charAt(5))
    }
    if (frase.charAt(6) === 'a' || frase.charAt(6) === 'e' || frase.charAt(6) === 'i' || frase.charAt(6) === 'o' || frase.charAt(6) === 'u' || frase.charAt(6) === 'á' || frase.charAt(6) === 'é' || frase.charAt(6) === 'í' || frase.charAt(6) === 'ó' || frase.charAt(6) === 'ú') {
        document.write(frase.charAt(6))
    }
    if (frase.charAt(7) === 'a' || frase.charAt(7) === 'e' || frase.charAt(7) === 'i' || frase.charAt(7) === 'o' || frase.charAt(7) === 'u' || frase.charAt(7) === 'á' || frase.charAt(7) === 'é' || frase.charAt(7) === 'í' || frase.charAt(7) === 'ó' || frase.charAt(7) === 'ú') {
        document.write(frase.charAt(7))
    }
    if (frase.charAt(8) === 'a' || frase.charAt(8) === 'e' || frase.charAt(8) === 'i' || frase.charAt(8) === 'o' || frase.charAt(8) === 'u' || frase.charAt(8) === 'á' || frase.charAt(8) === 'é' || frase.charAt(8) === 'í' || frase.charAt(8) === 'ó' || frase.charAt(8) === 'ú') {
        document.write(frase.charAt(8))
    }
    if (frase.charAt(9) === 'a' || frase.charAt(9) === 'e' || frase.charAt(9) === 'i' || frase.charAt(9) === 'o' || frase.charAt(9) === 'u' || frase.charAt(9) === 'á' || frase.charAt(9) === 'é' || frase.charAt(9) === 'í' || frase.charAt(9) === 'ó' || frase.charAt(9) === 'ú') {
        document.write(frase.charAt(9))
    }
}
else {
    document.write("<br>La frase ingresada tiene más de 10 caracteres")
}

