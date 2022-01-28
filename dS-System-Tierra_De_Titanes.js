// dS SYSTEM

// Lanzamientos de d6 +/- dS. Los dS son Dados de Suerte que alteran la distribución probabilística del resultado, pero no afecta el máximo o mínimo resultado.
// En la funsión "rdS (n, s)", se realizan las siguientes operaciones.
// Crear una función "r1d6" para el lanzamiento (o roll) de 1 dado de 6 caras (1d6).
// Crear array "d6" con el resultado de tirar "n" cantidad de dados de 6 caras naturales. "n" es siempre es un número entero positivo, con valor estándar 2.
// Crear array "dS" con el resultado de tirar "s" cantidad de dados de 6 caras de suerte. "s" es siempre es un número entero, puede ser positivo o negativo, debe usarse en valor absoluto.
// Crear variable "suerte", tal que si "s" es positivo es ture, sino es false.
// Crear array "roll" con el resultado de ambos array anteriores. Y ordenar los elementos.
// Si la suma de los elementos de d6 da el máximo, retorna ese resultado con el aviso "es Crítico!".
// Sino, si la suma de los elementos de d6 da el mínimo, retorna ese resultado con el aviso "es Pifia!".
// Sino, si "suerte" es true: selecciona una cantidad de elementos en roll igual a la cantidad de elementos en d6 (n). Y retorna la suma de los elementos de valor más altos.
// Sino, si "suerte" es false: selecciona una cantidad de elementos en roll igual a la cantidad de elementos de d6 (n). Y retorna la suma de los elementos de valor más bajos.

function rdS (n=2, s) {

  function r1d6 () {
    return Math.floor(Math.random() * 6 + 1)
  };

  var suerte = function() {if (s >= 0) {return true} else {return false}};

  var d6 = [];
  for (let i = 0; i < n; i++) {
    d6.push(r1d6());
  };

  var dS = [];
  for (let i = 0; i < Math.abs(s); i++) {
    dS.push(r1d6());
  };

  var roll = [];
  roll = dS.slice();
  for (let i = 0; i < n; i++) {
    roll.push(d6[i]);
    };
  roll.sort((a, b) => a - b );

  var sumaD6 = 0;
  for (let i = 0; i < n; i++) {
    sumaD6 += d6[i];
  };

  var sumaRoll1 = 0;
  for (let i = 0; i < n; i++) {
    sumaRoll1 += roll[roll.length - 1 - i];
  };

  var sumaRoll0 = 0;
  for (let i = 0; i < n; i++) {
    sumaRoll0 += roll[i];
  };

  if (sumaD6 === d6.length * 6) {
    return d6 + " = " + sumaD6 + " natural | no aplica dS | TOTAL =  " + sumaD6 + " es Crítico!";
  } else if (sumaD6 === d6.length) {
    return d6 + " = " + sumaD6 + " natural | no aplica dS | TOTAL = " + sumaD6 + " es Pifia!";
  } else if (suerte() === true) {
      return d6 + " es " + sumaD6 + " natural | " + "+dS " + dS + " | TOTAL = " + sumaRoll1;
  } else {
      return d6 + " es " + sumaD6 + " natural | " + "-dS " + dS + " | TOTAL = " + sumaRoll0;
  }
}





// LANZAMIENTOS GENERALES

// 1d6.
function r1d6 () {
  return Math.floor(Math.random() * 6 + 1)
}

// N cantidad de dados de X caras. Retorna la suma.
function rNdX (n, x) {
  let suma = 0;
  for (let i = 0; i < n; i++) {
    suma += Math.floor(Math.random() * x +1);
  };
  return suma;
}

// Crear un array de resultados de N dados de X caras. Retorna el array.
function arNdX (n, x) {
  let resultados = [];
  for (let i = 0; i < n; i++) {
    resultados.push(Math.floor(Math.random() * x +1));
  }
  return resultados;
}
