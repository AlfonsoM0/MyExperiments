/*Convierte el número proporcionado en un número romano.

Todos los números romanos deben proporcionarse en mayusculas.

Ej: convertToRoman(3999) debe devolver la cadena "MMMCMXCIX".
*/

function convertToRoman(num) {
    
    let numYrom = [  
        // Miles.
        {"1": "M",
        "2": "MM",
        "3": "MMM"},
        // Cientos.
        {"1": "C",
        "2": "CC",
        "3": "CCC",
        "4": "CD",
        "5": "D",
        "6": "DC",
        "7": "DCC",
        "8": "DCCC",
        "9": "CM"},
        // Decenas.
        {"1": "X",
        "2": "XX",
        "3": "XXX",
        "4": "XL",
        "5": "L",
        "6": "LX",
        "7": "LXX",
        "8": "LXXX",
        "9": "XC"},
        // Unidades.
        {"1": "I",
        "2": "II",
        "3": "III",
        "4": "IV",
        "5": "V",
        "6": "VI",
        "7": "VII",
        "8": "VIII",
        "9": "IX"},
    ]
    
    let numA = num.toString().split("");
    let numR = [];
    

    for (let i = numA.length-1; i >= 0; i--) {
        numR.unshift(numYrom[4-numA.length+i][numA[i]]);
    }

    return numR.join("");
}
   

console.log(convertToRoman(3999));