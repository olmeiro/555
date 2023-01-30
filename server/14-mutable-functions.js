//modifican el array original:
//pasemos un item de products a myProducts mutandos los array originales.
const products = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(80))

// const product = products.find((item) => item.id === '🍔');
const productIndex = products.findIndex((item) => item.id === '🍔');
// if (product) {
if (productIndex !== -1) {
  // myProducts.push(product); //mutamos el array
  myProducts.push(products[productIndex]); //mutamos
  products.splice(productIndex, 1); //mutamos
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(80))

// El mismo ejercicio pero sin mutacion
const products2 = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const productsArr2 = products2.filter(item => item.id != '🍔')
console.log(productsArr2)

//Update
const products3 = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
  id: '🥞',
  changes: {
    price: 200,
    description: 'saben más!'
  }
}

//como actualizar solo el elemento dentro de products3
const product3Index = products3.findIndex(item => item.id === update.id);
// products3[product3Index] = update.changes //mutamos original mejor asi ->
products3[product3Index] = {
  ...products3[product3Index],
  ...update.changes
}
console.log(products3);

//update sin cambiar original
const products4 = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update4 = {
  id: '🥞',
  changes: {
    price: 200,
    description: 'saben más!'
  }
}
const product4Index = products4.findIndex(item => item.id === update4.id);

const newArray = products4.map((item, idx) => {
  if (item.id === update4.id) {
    return {
      ...item,
      ...update4.changes
    }
  } else {
    return {
      ...item
    }
  }
})

console.log("newArray", newArray)
