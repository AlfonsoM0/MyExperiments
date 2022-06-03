'use strict';

//|*| Los tratamientos que se renderizan en el select de la página de tratamientos.
// Si se elige un tratamiento, se renderiza otro select para añadir otro.
let db_treatments = [
  {
    ID: '0201',
    treatmentType: 'operatoria',
    description: 'Obturación con Amalgama Cavidad Simple.',
    price: 1950,
  },
  {
    ID: '0202',
    treatmentType: 'operatoria',
    description: 'Obturación con Amalgama Cavidad Compuesta.',
    price: 2340,
  },
  {
    ID: '0203',
    treatmentType: 'operatoria',
    description: 'Obturación con Amalgama Compleja. ',
    price: 3120,
  },
];

//|*| Los tratamientos se eligen aumentando su cantidad.
// Para cada tratamiento elegido se renderiza el subtotal = cantidad * precio.
db_treatments = [
  {
    ID: '0201',
    treatmentType: 'operatoria',
    description: 'Obturación con Amalgama Cavidad Simple.',
    price: 1950,
    quantity: 2,
  },
  {
    ID: '0202',
    treatmentType: 'operatoria',
    description: 'Obturación con Amalgama Cavidad Compuesta.',
    price: 2340,
    quantity: 1,
  },
  {
    ID: '0203',
    treatmentType: 'operatoria',
    description: 'Obturación con Amalgama Compleja. ',
    price: 3120,
    quantity: 0,
  },
];

//|*| Otro select se usa para escribir un tratamiento personalizado.
// Si se elige un tratamiento, se renderiza otro select para añadir otro.
db_treatments = [
  {
    ID: '0201',
    treatmentType: 'operatoria',
    description: 'Obturación con Amalgama Cavidad Simple.',
    price: 1950,
    quantity: 2,
  },
  {
    ID: '0202',
    treatmentType: 'operatoria',
    description: 'Obturación con Amalgama Cavidad Compuesta.',
    price: 2340,
    quantity: 1,
  },
  {
    ID: '0203',
    treatmentType: 'operatoria',
    description: 'Obturación con Amalgama Compleja. ',
    price: 3120,
    quantity: 0,
  },
];

let new_Treatments = [
  {
    ID: '0', // formado por el index en el arreglo de nuevos.
    treatmentType: 'operatoria', // elegido de una lista con los 12 tipos.
    description: 'Servicio extra', // campo personalizable.
    price: 1000, // campo personalizable.
    quantity: 1, // campo personalizable.
  },
];

const discount = {
  type: 'percentage', // 'percentage' or 'amount'
  value: 0.1, // 10% or 1000
};

//|*| Guardado de datos enla base de datos.
// 1) Se concatenan arrelgos de tratamientos.
// 2) Se calulan los subtotales para futuro fácil renderizado.
// 3) Se calcula el total con descuento aplicado.
// 4) Se formatea todos los datos de treatments en un Json.
// 5) Se crea un objeto con los demás datos y se guarda en la base de datos.

function prepareBudget(db_treatments, new_Treatments, discount) {
  let treatments = [...db_treatments, ...new_Treatments];
  let totalPrice = 0;

  treatments.forEach(treatment => {
    treatment.subTotalPrice = treatment.price * treatment.quantity;
    totalPrice += treatment.subTotalPrice;
  });

  treatments = treatments.filter(treatment => treatment.quantity > 0);

  treatments = JSON.stringify(treatments);

  discount =
    discount.type === 'percentage'
      ? totalPrice * discount.value
      : discount.value;

  totalPrice -= discount;

  const budget = {
    budget_date: new Date(),
    treatments,
    discount,
    totalPrice,
    paid: false,
  };

  return budget;
}

console.log(prepareBudget(db_treatments, new_Treatments, discount));
