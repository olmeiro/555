const months0 = ["March", "Jan", "Feb", "Dec"];
months.sort()
console.log(months0) //no tiene sentido, pero lo ordeno por abecedario ASCII

//organizando por meses: DEBEMOS ASIGNAR UN PESO EN FORMATO DE NÚMERO PARA CADA MES
const months = ["march", "june", "february", "december"];

const valueMonth = month => {
  const monthUpper = month.toUpperCase();
  const months = {
    JANUARY: 1,
    FEBRUARY: 2,
    MARCH: 3,
    APRIL: 4,
    MAY: 5,
    JUNE: 6,
    JULY: 7,
    AGOST: 8,
    SEPTIEMBER: 9,
    OCTOBER: 10,
    NOVEMBER: 11,
    DECEMBER: 12,
  }
  return months[monthUpper] || undefined;
}

//console.log(valueMonth('January'));
months.sort((a, b) => {
  return valueMonth(a) - valueMonth(b);
});
console.log(months)
console.log("-".repeat(50))

//numbers:
const numbers = [1, 30, 4, 21, 100000];
numbers.sort()
console.log(numbers)
//ordenando:
numbers.sort((a, b) => a - b) //menor a mayor
console.log(numbers)


const words = [
  "réservé",
  "premier",
  "communiqué",
  "café",
  "adieu",
  "éclair",
  "banana",
];
words.sort() //ya lo ordena
console.log(words)
//En caso de 0 compatibildad con navegadores antiguos usamos localeCompare:
words.sort((a, b) => a.localeCompare(b))
console.log(words)

const orders = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

//ordenar orders por total de compras ascendente
orders.sort((a, b) => a.total - b.total)
console.log(orders)

//ordenando por fechas:
const ordersByDate = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
    date: new Date(2022, 1, 8, 10), //año-mes-hora-minuto
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
    date: new Date(2023, 6, 9, 10),
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
    date: new Date(2019, 3, 13, 10),
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
    date: new Date(2022, 1, 14, 10),
  },
];

ordersByDate.sort((a, b) => a.date - b.date)
console.log(ordersByDate)

