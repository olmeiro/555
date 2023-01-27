const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const flatArray = [];

for (let i = 0; i < matrix.length; i++) {
  const array = matrix[i];
  for (let j = 0; j < array.length; j++) {
    flatArray.push(matrix[i][j])
  }
}

console.log(flatArray)

//Algoritmo flat con recursividad:
function profundidad(list) {
  let newList = [];
  if (!Array.isArray(list)) return [list];

  list.forEach(element => {
    newList = newList.concat(profundidad(element))
  });
  return newList;
}

const matriz = [
  [1, 2, 3],
  [4, 5, 6, [1, 2, [1, 2]]],
  [7, 8, 9]
]

const newMatriz = profundidad(matriz)
console.log(newMatriz)
const newMatriz2 = profundidad('hola')
console.log(newMatriz2)

//otra solucion de flat con recursividad:
const matriz3 = [
  0,
  [1, 2, 3],
  [4, 5, [6, 7, 8], [9, 10]],
  [[11, 12, [13, 14], 15], 16]
];

function aplanarMatriz(matriz) {
  let array = [];
  for (element of matriz) {
    if (Array.isArray(element)) {
      array = array.concat(aplanarMatriz(element));
    } else {
      array.push(element);
    }
  }
  return array;
}
console.log(aplanarMatriz(matriz3))

//Otra forma de hacer este reto es llamar de forma recursiva a la función en un reduce.
const flatten = arr => arr.reduce(
  (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
);
console.log(flatten([1, [2, 3], [4, [5, [6]]]])) // [1, 2, 3, 4, 5, 6]

//algoritmo flatten con profundidad:
const matriz = [
  [1, 2, 3],
  [4, 5, 6, [1, 2]],
  [7, 8, 9]
];
// console.log(matriz.flat(2));
function flat(array, deep = 1) {
  const arr = [];

  if (deep < 1) {
    return array;
  }
  array.map(
    (el) => {

      if (Array.isArray(el)) {
        arr.push(...el);
      } else {
        arr.push(el)
      }
    }
  );
  deep -= 1
  return flat(arr, deep);
}

console.log(flat(matriz, 1));
//Expected-> [ 1, 2, 3, 4, 5, 6, [ 1, 2 ], 7, 8, 9 ]

//usando flat: solamente es necesario indicar la profundidad de aplanamiento del array.
const newFlatArray = matrix.flat()
console.log(newFlatArray)

const array = [1, 2, [3, 4], 5, 6]
const result = array.flat()
result// [1,2,3,4,5,6]

const array2 = [1, 2, [3, 4, [5, 6]]];
const result2 = array2.flat()
result2// [1, 2, 3, 4, [5, 6]]

const array3 = [1, 2, [3, 4, [5, 6]]]
const result3 = array3.flat(2)
result3// [1, 2, 3, 4, 5, 6]

const array4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
const result4 = array4.flat(4)
console.log(result4)// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const array5 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
const result5 = array4.flat(Infinity)
result4// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]