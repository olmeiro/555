const numbers = [1, 30, 41, 29, 50, 60]

let respuesta = undefined
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i]
  if (element >= 40) {
    respuesta = element
    break
  }
}

console.log(respuesta) // 41

//usando find - findIndex
const numbers = [1, 30, 41, 29, 50, 60]

const respuesta = numbers.find(item => item >= 40)
const respuesta2 = numbers.findIndex(item => item >= 40)

console.log(respuesta) // 41
console.log(respuesta2) // 2

// los métodos find y findIndex no encuentran EL elemento, devolverán undefined y - 1, respectivamente.

const numbers = ["a", "b", "c"]

const respuesta = numbers.find(item => item >= 40)
const respuesta2 = numbers.findIndex(item => item >= 40)

console.log(respuesta) // undefined
console.log(respuesta2) // -1

//trabajando con objetos:
const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

//muy para cosas que no se repiten como el id: 
const rta3 = products.find(item => item.id === '🍔');
console.log(rta3);

