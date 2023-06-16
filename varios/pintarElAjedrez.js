/**
  * Te desafiamos a desentrañar un misterio: imagina a un chico disfrutando mientras colorea su tablero de ajedrez. Planea llenar cada cuadro con matices rojos o azules. Con el objetivo de añadir un toque único, desea mantener un balance entre los espacios rojos y azules, evitando al mismo tiempo que dos filas o columnas tengan la misma cantidad de espacios rojos. ¿Sería posible colorear el tablero de ajedrez siguiendo estos parámetros? ¿Qué ocurriría si, en lugar de un tablero de ajedrez estándar de 8x8, poseyera uno colosal de 1000x1000?

  * Por favor incluí y argumenta el proceso de pensamiento para determinar la solución. Si también tenés código que hayas desarrollado, incluilo.
 */

// >--- DESARROLLO ---<
/**
 * La matriz mínima es de 2x2. Una matriz válida tiene la misma cantidad de filas que columnas.
 * La matriz no puede ter dos filas con la misma cantidad de rojo. O dos columnas con la misma cantidad de rojo.
 * Deve evaluarse una matriz de 8x8 casillas. Deve evaluarse cualquier matriz válida, por ejemplo de 1000x1000 casillas.
 */

// ¿Sería posible colorear el tablero de ajedrez siguiendo estos parámetros?
/**
 * Si. Hay un patrón. Por ejemplo, comenzando con la matríz más pequeña de 2x2 casillas. Si se pinta de rojo solo una casilla, se cumple que no hay dos columnas o dos filas con la misma cantidad.
 * var 1 = Rojo
 * Ejemplo 1: Matrix2x2 = [
 *  [1,0],
 *  [0,0]
 * ]
 * Ejemplo 2: Matrix2x2 = [
 *  [1,1],
 *  [1,0]
 * ]
 *
 * Si se extiende el ejemplo a matrices de 3x3 o más grande, el patrón es el mismo.
 * Ejemplo 1: Matrix3x3 = [
 *  [1,1,0],
 *  [1,0,0],
 *  [0,0,0]
 * }
 * ]
 * Ejemplo 2: Matrix3x3 = [
 *  [1,1,1],
 *  [1,1,0],
 *  [1,0,0]
 * ]
 *
 * Para que una matriz válida esté pintada de forma válida debe cumplor uno de los dos patrones.
 * Patron1 = primera fila pintada completa, y -1 casilla en cada fila siguiente.
 * Patron2 = primara fila pintada completa -1 casilla, y -1 casilla en cada fila siguiente.
 *
 * Nota: las columnas o las filas podrían estar desordenadas en relación al patrón.
 *
 */

const exampleMatrix = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 0],
];

// Función para verificar que la matriz tenga igual cantidad de columnas que filas con un mínimo de 2x2.
function isTheFormOfTheCorrectMatrix(matrix) {
  const matrixRows = matrix.length;

  if (matrixRows < 2) return false;

  for (let i = 0; i < matrix.length; i++) {
    const columns = matrix[i].length;

    if (columns !== matrixRows) return false;
  }

  return true;
}

// Función para verificar que una matriz correcta esté correctamente pintada, sin filas o columnas que se repitan en cantidad de celdas rojas.
function isTheMatrixWellPainted(matrix) {
  const numberOfRedsPerRow = matrix.map((row) =>
    row.reduce((a, c) => a + c, 0)
  );
  const setOfRowValues = new Set(numberOfRedsPerRow);
  console.log(setOfRowValues);

  if (setOfRowValues.size !== matrix.length) return false;

  const numberOfRedsPerColumn = [];

  for (let i = 0; i < matrix.length; i++) {
    const sumOfColumn = matrix.map((col) => col[i]).reduce((a, c) => a + c, 0);

    numberOfRedsPerColumn.push(sumOfColumn);
  }

  const setOfColumnValues = new Set(numberOfRedsPerColumn);
  console.log(setOfColumnValues);

  if (setOfColumnValues.size !== matrix.length) return false;

  return true;
}

console.log(isTheMatrixWellPainted(exampleMatrix));
