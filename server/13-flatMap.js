//flatMap:

const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
  { userId: 2, username: "Mike", attributes: ["Lovely"] },
  { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];

//obtener un array completo de todos los atributos de los usuarios:
const rta = users.map(user => user.attributes).flat();
console.log(rta);

// lo anterior lo hace flatMap:
const rta2 = users.flatMap(user => user.attributes);
console.log("rta2", rta2);

//reto:
const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};

//construir un array lineal de las fechas de inicio:
//pasamos los values a arrays
const rta3 = Object.values(calendars).flatMap(item => {
  // console.log('item', item) //devuelve un array con las flechas y flatMap no tiene como trabajar la profundidad
  return item.map(date => date.startDate); //lo resolvemos con un map
});
console.log(rta3)

//reto:
const fragment = [
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
]

//Cuantas palabras tiene fragment:
function countWords(array) {
  const newArray = [];
  for (const item of array) {
    newArray.push(item.split(' '))
  }

  return newArray.flat().length;
}

console.log(countWords(fragment))

//otra forma más rápida:
const fragment2 = [
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
]

function solution(lines) {
  return lines.flatMap(item => item.split(' ').length).reduce((a, b) => a + b, 0)
}
console.log(solution(fragment2))

const fragment3 = [
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
];

function solution2(lines) {
  // Tu código aquí 👈 
  return lines.join(" ").split(" ").length
};
console.log(solution2(fragment3))

const fragment4 = [
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
];

function solution3(array) {
  return array.map(item => item.split(' ')).flat().length;
}
console.log("here", solution3(fragment4))




