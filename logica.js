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





/* 
Words and letters
Given a 'bag' of words and a 'bag' of letters, write a
function that returns the length of the longest word that
can be written using each of the given letters at most
once.
e.g. 
Words:
------------------------------
| 'kellogg' 'go'       |
|'hola' 'lego' 'hug'|
| 'kocomo' 'hello' |
------------------------------
Letters:
-----------------------
| 'a' 'h' 'l' 'e' |
|'l' 'o' 'g' 'k'  |
-----------------------
Answer: 5
Explanation:
* 5 is the length of 'hello', logest one that can be written
* 'kellogg' (7) needs two 'g', and there's only one in the letters bag
* 'kocomo' (6) needs a 'c' that is not present in the letters bag
* All other words are shorter than 'hello'
Bonus:
1. What's the Time complexity?
2. What's the Space complexity?
*/

let words = ["kellogg", "go", "hola", "lego", "hug", "kocomo", "hello"];
let letters = ["a", "h", "l", "e", "l", "o", "g", "k"];

function wordsAndLetters(words, letters) {
  
  
}





// Entrevista de Google
// El desafío:

// Escribe una función que tome un string (stringSequence) y un arreglo de strings (dictionary).

// La función debe devolver el string más largo en dictionary que sea una subsecuencia de stringSequence.

// Por ejemplo:

// let stringSequence = 'abppplee';
// let dictionary = ['able', 'ale', 'apple', 'bale', 'kangaroo'];
// La salida correcta sería 'apple', ya que es la subsecuencia más larga de 'abppplee'.

let stringSequence = 'abppplee';
let dictionary = ['able', 'ale', 'apple', 'bale', 'kangaroo'];


function wordSubsecuence (wordSec, word) {
  for (let i = 0; i < word.length; i++) {
    if (
      wordSec.includes(word[i]) &&
      wordSec.indexOf(word[i]) >= wordSec.indexOf(word[i-1])
    ) {
    } else {
      return false;
    }
  }
  return true;
}
console.log(`bale is ${wordSubsecuence(stringSequence, "bale")}`);


function largestSubsecuence(str, arr) {
  let newArr = [];
  
  arr.forEach(word => {
    if (wordSubsecuence(str, word)) {
      newArr.push(word);
    }
  }); 
  
  newArr.sort((a, b) => b.length - a.length);
  return newArr[0];
}  
console.log(`the answer is ${largestSubsecuence(stringSequence, dictionary)}`);
