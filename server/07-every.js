// hagamos un algoritmo que indique si en un array, todos los elementos son menores o iguales a 40.

const numbers = [1, 30, 41, 29, 10, 13];

let respuesta = true;
for (let i = 0; i < numbers.length; i += 1) {
  const element = numbers[i];
  if (element > 40) {
    respuesta = false;
    break;
  }
}

console.log(respuesta);

//usando every tenemos:
const numbers1 = [1, 30, 41, 29, 10, 13];
const minorForty = numbers1.every(num => num <= 40);
console.log(minorForty)

//ejecicio: asegurarse que todos los niños son menores de 15 años:
const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const minorFifteen = team.every(child => child.age < 15);
console.log(minorFifteen);

//Retornar si todos los elementos de un array son pares:
export function checkArray(array) {
  if (array.length === 0) {
    return false;
  }
  return array.every((item) => item % 2 === 0);
}

console.log(checkArray([2, 4, 6]))