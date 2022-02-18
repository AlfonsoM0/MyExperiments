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
]

*/

// ¿Cuánto dinero hay?
function sumCid(cid) {
  let cidSum = 0;
  for (const value of cid) {
    cidSum += value[1]*100;
  }
  return cidSum/100;
}

// ¿Qué cantidad hay de cada moneda y billete?
function unidadesMonetarias(cid) {
  let cidUM = {};
  cidUM[cid[0][0]] = (cid[0][1] * 100 / 1);
  cidUM[cid[1][0]] = (cid[1][1] * 100 / 5);
  cidUM[cid[2][0]] = (cid[2][1] * 100 / 10);
  cidUM[cid[3][0]] = (cid[3][1] * 100 / 25);
  cidUM[cid[4][0]] = (cid[4][1] * 100 / 100);
  cidUM[cid[5][0]] = (cid[5][1] * 100 / 500);
  cidUM[cid[6][0]] = (cid[6][1] * 100 / 1000);
  cidUM[cid[7][0]] = (cid[7][1] * 100 / 2000);
  cidUM[cid[8][0]] = (cid[8][1] * 100 / 10000);
  return cidUM;
}


function checkCashRegister(price, cash, cid) {
  let vuelto = (cash - price)*100;
  let cidUM = unidadesMonetarias(cid);
  let objV = {};
  let objR = {status: "", change: [],};
  
  while (vuelto >= 0) {
    if (vuelto >= 10000 && cidUM["ONE HUNDRED"] >= 1) {
      vuelto -= 10000;
      --cidUM["ONE HUNDRED"];
      if (!objV["ONE HUNDRED"]) {objV["ONE HUNDRED"] = 10000} else {objV["ONE HUNDRED"] += 10000};

    } else if (vuelto >= 2000 && cidUM["TWENTY"] >= 1) {
      vuelto -= 2000;
      --cidUM["TWENTY"];
      if (!objV["TWENTY"]) {objV["TWENTY"] = 2000} else {objV["TWENTY"] += 2000};

    } else if (vuelto >= 1000 && cidUM["TEN"] >= 1) {
      vuelto -= 1000;
      --cidUM["TEN"];
      if (!objV["TEN"]) {objV["TEN"] = 1000} else {objV["TEN"] += 1000};

    } else if (vuelto >= 500 && cidUM["FIVE"] >= 1) {
      vuelto -= 500;
      --cidUM["FIVE"];
      if (!objV["FIVE"]) {objV["FIVE"] = 500} else {objV["FIVE"] += 500};

    } else if (vuelto >= 100 && cidUM["ONE"] >= 1) {
      vuelto -= 100;
      --cidUM["ONE"];
      if (!objV["ONE"]) {objV["ONE"] = 100} else {objV["ONE"] += 100};

    } else if (vuelto >= 25 && cidUM["QUARTER"] >= 1) {
      vuelto -= 25;
      --cidUM["QUARTER"];
      if (!objV["QUARTER"]) {objV["QUARTER"] = 25} else {objV["QUARTER"] += 25};

    } else if (vuelto >= 10 && cidUM["DIME"] >= 1) {
      vuelto -= 10;
      --cidUM["DIME"];
      if (!objV["DIME"]) {objV["DIME"] = 10} else {objV["DIME"] += 10};

    } else if (vuelto >= 5 && cidUM["NICKEL"] >= 1) {
      vuelto -= 5;
      --cidUM["NICKEL"];
      if (!objV["NICKEL"]) {objV["NICKEL"] = 5} else {objV["NICKEL"] += 5};

    } else if (vuelto >= 1 && cidUM["PENNY"] >= 1) {
      vuelto -= 1;
      --cidUM["PENNY"];
      if (!objV["PENNY"]) {objV["PENNY"] = 1} else {objV["PENNY"] += 1};

    } else {
      break;
    }
  }
  

  if (cash - price === sumCid(cid)) {
    objR.status = "CLOSED";
    objR.change = cid;
  } else if (vuelto > 0) {
    objR.status = "INSUFFICIENT_FUNDS";
    objR.change = [];
  } else {
    objR.status = "OPEN";
    for (const key in objV) {
      objR.change.push([key, objV[key]/100]);
    }
  }

  return objR;
}


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