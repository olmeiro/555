const words = ["spray", "elites", "limit", "apple", "exuberant"];

//filtrar palabras con un tamaño >= 6:
//filter con un for:
const newForArray = [];
for (let i = 0; i < words.length; i++) {
  const element = words[i];
  if (element.length >= 6) newForArray.push(element);

}

console.log("newForArray:", newForArray)

//Solucion con filter:
const newFilterArray = words.filter(word => word.length >= 6);
console.log(newFilterArray);

// ejercicio:
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
]

//tener todas las ordenes que fueron entregadas:
const deliveredOrders = orders.filter(product => product.delivered)
console.log(deliveredOrders)

//las que hayan sido entregadas y tengan un total > 100
const deliveredOrders2 = orders.filter(order => order.delivered && order.total >= 100);
console.log(deliveredOrders2)

//que ordenes tienen en customerName = 'Nico'
const search = (query) => {
  return orders.filter(item => {
    return item.customerName.includes(query);
  })
}

console.log("SEARCH: ", search('Nico'));
console.log("SEARCH: ", search('in'));