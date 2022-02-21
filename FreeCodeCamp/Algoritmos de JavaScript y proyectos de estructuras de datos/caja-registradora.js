/* Diseña una función checkCashRegister() que acepte el precio de compra como primer argumento (price), la cantidad pagada como segundo argumento (cash), y el dinero en efectivo que tiene la caja (cid) como tercer argumento.

cid es un arreglo 2D que enumera las monedas disponibles.

La función checkCashRegister() siempre debe devolver un objeto con una clave status y una clave change.

* Devuelve {status: "INSUFFICIENT_FUNDS", change: []} si el efectivo en caja es menor que el cambio necesario, 
! o si no puedes devolver el cambio exacto.

* Devuelve {status: "CLOSED", change: [...]} si el efectivo en caja como valor de la clave change es igual al cambio que se debe entregar.

* En cualquier otro caso, devuelve {status: "OPEN", change: [...]}, con el cambio a entregar en monedas y billetes, ordenados de mayor a menor, como valor de la clave change.

Unidad Monetaria	Importe
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
A continuación, un ejemplo del efectivo en caja en formato de arreglo:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
] */


//#region SOLUCIÓN
// Se multiplican *100 los valores para evitar errores de decimales de JS.
function sumCid(cid) {
  let cidSum = 0;
  for (const value of cid) {
    cidSum += value[1]*100;
  }
  return cidSum/100;
}

function checkCashRegister(price, cash, cid) {
  for (const valor of cid) {
    valor[1] *= 100;
  }

  let vuelto = (cash - price)*100;
  let cambio = [
    ["ONE HUNDRED", 0],
    ["TWENTY", 0],
    ["TEN", 0],
    ["FIVE", 0],
    ["ONE", 0],
    ["QUARTER", 0],
    ["DIME", 0],
    ["NICKEL", 0],
    ["PENNY", 0],  
  ];
  
  while (vuelto > 0) {
    
    if (vuelto >= 10000 && cid[8][1] >= 10000) {
      vuelto -= 10000;
      cambio[0][1] += 10000;
      cid[8][1] -= 10000;

    } else if (vuelto >= 2000 && cid[7][1] >= 2000) {
      vuelto -= 2000;
      cambio[1][1] += 2000;
      cid[7][1] -= 2000;

    } else if (vuelto >= 1000 && cid[6][1] >= 1000) {
      vuelto -= 1000;
      cambio[2][1] += 1000;
      cid[6][1] -= 1000;

    } else if (vuelto >= 500 && cid[5][1] >= 500) {
      vuelto -= 500;
      cambio[3][1] += 500;
      cid[5][1] -= 500;

    } else if (vuelto >= 100 && cid[4][1] >= 100) {
      vuelto -= 100;
      cambio[4][1] += 100;
      cid[4][1] -= 100;

    } else if (vuelto >= 25 && cid[3][1] >= 25) {
      vuelto -= 25;
      cambio[5][1] += 25;
      cid[3][1] -= 25;

    } else if (vuelto >= 10 && cid[2][1] >= 10) {
      vuelto -= 10;
      cambio[6][1] += 10;
      cid[2][1] -= 10;

    } else if (vuelto >= 5 && cid[1][1] >= 5) {
      vuelto -= 5;
      cambio[7][1] += 5;
      cid[1][1] -= 5;

    } else if (vuelto >= 1 && cid[0][1] >= 1) {
      vuelto -= 1;
      cambio[8][1] += 1;
      cid[0][1] -= 1;

    } else {break;}
  }

  for (const valor of cambio) {
    valor[1] /= 100;
  }

  let resultado = {status: "", change: [],};

  if (sumCid(cid) === 0 && vuelto === 0) {
    resultado.status = "CLOSED";
    resultado.change = cambio.reverse();
  } else if (vuelto > 0) {
    resultado.status = "INSUFFICIENT_FUNDS";
    resultado.change = [];
  } else {
    resultado.status = "OPEN";
    
    let newArr = [];

      for (const valor of cambio) {
        if (valor[1] > 0) {
          newArr.push([valor[0], valor[1]])
        }
      }
    
    resultado.change = newArr;
  }
  
  return resultado;
}
//#endregion

// Claramente paga con tarjeta y pide el vuelto en efectivo, porque de la caja solo sale dinero.

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// debe devolver {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}. Todo el arreglo cid original.

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// debe devolver {status: "INSUFFICIENT_FUNDS", change: []}. Por dinero total insuficiente.

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// debe devolver {status: "INSUFFICIENT_FUNDS", change: []}. Por falta de cambio exacto.

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// debe devolver {status: "OPEN", change: [["QUARTER", 0.5]]}. Un arreglo con solo lo que debe entregar, ordenado de Mayor a Menor.


console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// debe devolver {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.