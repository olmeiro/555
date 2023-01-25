//REduce con for:
//calcule la suma de los cuadrados de los elementos de un array.
const numbers = [5, 4, 8, 6, 2]
let suma = 0

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i]
  suma = suma + number ** 2
}

console.log(suma) // 145

//con el metodo reduce:
const numbers1 = [5, 4, 8, 6, 2]

const reducedValue = numbers1.reduce((suma, number) => suma + number ** 2)

console.log(reducedValue) // 125 ya que toma como tercer argumento el primer elemento del array en la primera iteracion

//solucion: empezamos la suma en cero:
const numbers2 = [5, 4, 8, 6, 2]

const reducedValue2 = numbers2.reduce((suma, number) => (suma + number ** 2), 0)

console.log(reducedValue2) // 125 ya que toma como tercer argumento el primer elemento del array en la primera iteracion

