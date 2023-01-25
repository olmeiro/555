const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

//seleccionar elementos de todo un array de objetos (limpieza de datos):
console.log("original:", orders);
const result = orders.map(item => item.total)
console.log("result:", result) //de un array de objetos a un array de números.

//añadir nuevos elementos al objeto: agreguemos tax:
//transformando el objeto original
const ordersTax = orders.map(item => { //Cuando generamos una copia que es inmutable, el no copia todos los elementos sino que copia la referencia en memoria

  item.tax = .19
  return item;
})
console.log("ordersTax:", ordersTax)
console.log("orders", orders) //se ve modificado el objeto original
console.log(orders[0] === ordersTax[0])

//sin transformar el objeto original
const ordersTaxNew = orders.map(item => {
  return {
    ...item,
    tax: 0.19,
  }
})
console.log("ordersTaxNew", ordersTaxNew)

//Ejercicio:
// Tienes un array de objetos que representan datos de productos con los siguientes atributos:

// name
// price
// stock
// Tu reto es agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19 % con base al precio base y debes tener en cuenta que como resultado se debe dejar un valor entero, sin decimales.

// Por ejemplo si aplicamos el 19 % de impuestos para un producto con precio de $1000 el resultado de los "taxes" será $190, o para un producto con precio de $656 el resultado de los "taxes" será $124.

// Para solucionarlo vas a encontrar una función llamada addNewAttr que recibe un parámetro de entrada:

// array: Un array de objetos.
// Dentro del cuerpo de la función addNewAttr debes escribir tu solución.

//   Ejemplo:

Input:
[
  {
    name: "Product 1",
    price: 1000,
    stock: 10
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20
  }
]

Output:
[
  {
    name: "Product 1",
    price: 1000,
    stock: 10,
    taxes: 190
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20,
    taxes: 380
  }
]

//solucion 1:
export function addNewAttr(array) {

  const tax = array.map(item => {
    return {
      ...item,
      taxes: Math.trunc(item.price * 0.19)
    }
  })

  return tax;
}

//solucion 2:
function solution(array) {
  return array.map(product => {
    product.taxes = product.price * .19;
    return product;
  })
}