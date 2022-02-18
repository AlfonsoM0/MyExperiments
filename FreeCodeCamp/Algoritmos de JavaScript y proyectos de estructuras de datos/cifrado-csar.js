/* Uno de los cifrados más simples y conocidos es el cifrado César, también conocido como cifrado por desplazamiento. En un cifrado por desplazamiento los significados de las letras se desplazan por una cantidad determinada.

Un uso moderno común es el cifrado ROT13, donde los valores de las letras son desplazados por 13 lugares. Así que A ↔ N, B ↔ O y así sucesivamente.

Escribe una función que reciba una cadena codificada en ROT13 como entrada y devuelva una cadena decodificada.

Todas las letras estarán en mayúsculas. No transformes ningún carácter no alfabético (espacios, puntuación, por ejemplo), pero si transmítelos. */

/*
* rot13("SERR PBQR PNZC") debe decodificarse en la cadena FREE CODE CAMP
* rot13("SERR CVMMN!") debe decodificarse en la cadena FREE PIZZA!
* rot13("SERR YBIR?") debe decodificarse en la cadena FREE LOVE?
* rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") debe decodificarse en la cadena THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/

function rot13(str) {

    let dic = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM".split("");
    let strA = str.split("");
    let strR = [];

    for (let i = 0; i < strA.length; i++) {
        if (dic.includes(strA[i])) {
            strR.push(
                dic[ dic.indexOf(strA[i]) +13]
            );
        } else {
            strR.push(strA[i]);
        }
        
    }

    return strR.join("");

}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));