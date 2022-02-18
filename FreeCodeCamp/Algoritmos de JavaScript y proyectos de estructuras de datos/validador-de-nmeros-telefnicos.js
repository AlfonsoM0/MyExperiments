/* Devuelve true si la cadena pasada concuerda con un número de teléfono válido en Estados Unidos.

El usuario puede completar el campo del formulario de la forma que elija, siempre que tenga el formato de un número estadounidense válido. Los siguientes ejemplos son de formatos válidos para números estadounidenses (consulte las pruebas a continuación para otras variantes):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

Para este desafío se te presentará una cadena como 800-692-7753 o 8oo-six427676;laskdjf. Tu trabajo es validar o rechazar el número de teléfono estadounidense basado en cualquier combinación de los formatos proporcionados arriba. El código de área es obligatorio. Si el código de país es proporcionado, debes confirmar que el código de país es 1. Devuelve true si la cadena es un número de teléfono estadounidense valido; de lo contrario devuelve false. */


function telephoneCheck(str) {
    let strA = str.split("");
    let numeros = "0123456789".split("");
    let formatos = ["555-555-5555", "(555)555-5555", "(555) 555-5555", "555 555 5555", "5555555555"];
    let strFromateado = [];

    function contarNumeros (strA) {
        let sum = 0;
        for (const x of strA) {
            if (numeros.includes(x)) {
                ++sum;
            }
        }
        return sum;
    }

    if (contarNumeros(strA) === 11 && strA[0] === "1" && strA[1] === " ") {
        
        for (let i = 2; i < strA.length; i++) {
            if (numeros.includes(strA[i])) {
                strFromateado.push("5")
            } else {
                strFromateado.push(strA[i])
            }
        }

    } else if (contarNumeros(strA) === 11 && strA[0] === "1") {
        
        for (let i = 1; i < strA.length; i++) {
            if (numeros.includes(strA[i])) {
                strFromateado.push("5")
            } else {
                strFromateado.push(strA[i])
            }
        }

    } else if (contarNumeros(strA) === 10) {
        for (let i = 0; i < strA.length; i++) {
            if (numeros.includes(strA[i])) {
                strFromateado.push("5")
            } else {
                strFromateado.push(strA[i])
            }
        }
    }

    strFromateado = strFromateado.join("");

    if (formatos.includes(strFromateado)) {
        return true;
    } else {
        return false;
    }

}

console.log(telephoneCheck("1 (555) 555-5555")); // true
console.log(telephoneCheck("(275)76227382")); // false