// Hay 4 perros: galgo, dogo, alano y podenco.
// Podenco come más que galgo.
// Alano come más que galgo.
// Alano come menos que dogo.
// Dogo come más que podenco.
// ¿Cuál come menos?

var p = {
  galgo: 0,
  dogo: 0,
  alano: 0,
  podenco: 0,

  resultado: function () {
    if (
      p.podenco > p.galgo &&
      p.alano > p.galgo &&
      p.dogo > p.alano &&
      p.dogo > p.podenco
      ) {
      return true;
    }
    return false;
  },

  intervalo: setInterval(function () {

    p.galgo = Math.ceil(Math.random()*4);
    p.dogo  = Math.ceil(Math.random()*4);
    p.alano = Math.ceil(Math.random()*4);
    p.podenco = Math.ceil(Math.random()*4);

    if (p.resultado()) {
      clearInterval(p.intervalo);

    }

  } ,1)
}
// Atom crashea, pero anda en la consola del navegador.
console.log(p);
// alano: 3
// dogo: 4
// galgo: 2 come menos.
// podenco: 3



// Seis amigos desean pasar sus vacaciones juntos y deciden, cada dos, utilizar diferentes medios de transporte;
// sabemos que Alejandro no utiliza el coche ya que éste acompada a Benito que no va en avién. Andrés viaja en
// avión. Si Carlos no va acompaiado de Dario ni hace uso del avión, podria Vd. decirnos en qué medio de transporte
// llega a su destino Tomás?


var v = {
  alejandro: "",
  benito: "",
  andres: "avion",
  carlos: "",
  dario: "",
  tomas: "",
}

var t = ["avion", "choche", "otro"]

function condiciones (v, t) {

  if (
    v.alejandro !== t[1] &&
    v.alejandro === v.benito &&
    v.benito !== t[0] &&
    v.andres === t[0] &&
    v.carlos !== v.dario &&
    v.carlos !== t[0] &&

    Object.values(v).filter(word => word === t[0]).length === 2 &&
    Object.values(v).filter(word => word === t[1]).length === 2 &&
    Object.values(v).filter(word => word === t[2]).length === 2

  ) {
    return true;
  }
}

let intervalo = setInterval(() => {

  v.alejandro = t[Math.floor(Math.random()*t.length)];
  v.benito = t[Math.floor(Math.random()*t.length)];
  v.andres = t[0];
  v.carlos = t[Math.floor(Math.random()*t.length)]
  v.dario = t[Math.floor(Math.random()*t.length)]
  v.tomas = t[Math.floor(Math.random()*t.length)]

  if (condiciones (v, t)) {
    clearInterval(intervalo)
  }

}, 1);

console.log(v);
// alejandro: "otro"
// andres: "avion"
// benito: "otro"
// carlos: "choche"
// dario: "avion"
// tomas: "choche" <--



// Si Ángela habla más bajo que Rosa.
// Celia habla más alto que Rosa.
// ¿Habla Ángela más alto o bajo que Celia?

var h = {
  angela: 0,
  celia: 0,
  rosa: 0,
}

function condiciones (h) {

  if (h.angela < h.rosa && h.celia > h.rosa) {
    return true;
  }
}

var invervalo = setInterval(() => {

  h.angela = Math.ceil(Math.random()*3);
  h.celia = Math.ceil(Math.random()*3);
  h.rosa = Math.ceil(Math.random()*3);

  if (condiciones(h)) {
    clearInterval(invervalo);
  }

},1)

console.log(h);
// angela: 1 habla mas bajo que el resto.
// celia: 3
// rosa: 2

