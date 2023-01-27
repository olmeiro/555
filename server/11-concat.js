//concat con for:
const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];

const newArray = [...elements]; //clonamos con spread operator
for (let index = 0; index < othersElements.length; index++) {
  const element = othersElements[index];
  newArray.push(element);
}

console.log("for:", newArray);

const rta = elements.concat(othersElements);
console.log(rta)

//otra forma de concatenar
const rta2 = [...elements, ...othersElements]; //útil en arrays, pero cuidado con los strings
console.log(rta2)

const elements = [1, 1, 2, 2];
const rta3 = [...elements, 'random'] //que pasa si mandamos el spread sobre un array?
console.log(rta3)

const elements3 = [1, 1, 2, 2];
const rta4 = [...elements3, ...'random'] //que pasa si mandamos el spread sobre un array?
console.log(rta4) //obtenemos cada una de las letras como elementos del array, cosa que no se quiere.

//concat built-in
const numbers1 = [1, 2, 3, 4]
const numbers2 = [5, 6, 7, 8]
const numbers3 = [9, 10, 11, 12]

const result1 = numbers1.concat("hola", "mundo")
const result2 = numbers1.concat(numbers2)
const result3 = numbers1.concat(numbers2, "hola")
const result4 = numbers1.concat(numbers2, numbers3)

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)

//si lo que queremos es modificar el array original usamos un pushconst elements = [1, 1, 2, 2];
const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];
elements.push(othersElements) //esto toma el array y lo pone dentro de elements
console.log(elements)
//queremos que cada elemento de othersElements quede en elements y no el array
const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];
elements.push(...othersElements)
console.log("spread:", elements)