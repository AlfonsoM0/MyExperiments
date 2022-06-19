/*
|> Paginación 
|*| Los elementos a renderizar llegan como un arreglo de objetos.
|*| El usuario puede definir el número de elementos a mostrar por página.
|*| El usuario puede definir el número de página a mostrar.

|+| Crear una función que reciba el arreglo de objetos, el número de elementos a mostrar por página y el número de página a mostrar.
*/

const elements = [
  { id: 1, name: 'Elemento 1' },
  { id: 2, name: 'Elemento 2' },
  { id: 3, name: 'Elemento 3' },
  { id: 4, name: 'Elemento 4' },
  { id: 5, name: 'Elemento 5' },
  { id: 6, name: 'Elemento 6' },
  { id: 7, name: 'Elemento 7' },
  { id: 8, name: 'Elemento 8' },
  { id: 9, name: 'Elemento 9' },
  { id: 10, name: 'Elemento 10' },
];

function pagination(elements, elementsPerPage, page) {
  const start = (page - 1) * elementsPerPage;
  const end = page * elementsPerPage;
  return elements.slice(start, end);
}

// console.table((firstPage = pagination(elements, 3, 1)));

/* //|> Example on a React component

function Pagination({ elements, elementsPerPage, page }) {
  return (
    <div>
      <ul>
        {pagination(elements, elementsPerPage, page).map(element => (
          <li>{element.name}</li>
        ))}
      </ul>
    </div>
  );
} */

/* //|> Example of a slect page component

function SelectPage({ elements, elementsPerPage, page, onChangePage }) {
  return (
    <div>
      <select onChange={onChangePage}>
        {Array.from(
          Array(Math.ceil(elements.length / elementsPerPage)),
          (_, i) => i + 1
        )
        .map(page => (
          <option value={page}>{page}</option>
        ))}
      </select>
    </div>
  );
} */
