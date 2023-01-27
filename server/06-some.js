//some method
const numbers = [1, 2, 3, 5];

let respuesta = false;

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element % 2 === 0) {
    respuesta = true;
    break;
  }
}

console.log(respuesta);

const numbers1 = [1, 2, 3, 5];
const respuesta1 = numbers1.some(item => item % 2 === 0);
console.log(respuesta1);

//trabajando some con objetos:
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

//hay al menos una orden que fue entregada:
const ordersRta = orders.some(item => item.delivered);
console.log(ordersRta);

//usando una librería ->
const dates = [
  {
    startDate: new Date(2022, 1, 1, 10), //año-mes-hora-minutos
    endDate: new Date(2022, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2022, 1, 1, 15),
    endDate: new Date(2022, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2022, 1, 1, 20),
    endDate: new Date(2022, 1, 1, 21),
    title: "Cena",
  },
];

const newAppointment = {
  startDate: new Date(2022, 1, 1, 19),
  endDate: new Date(2022, 1, 1, 20, 30),
};

const newAppointment1 = {
  startDate: new Date(2022, 1, 1, 8),
  endDate: new Date(2022, 1, 1, 9, 30),
};

//podemos agendar nuevas citas sin que se crucen con citas ya agendadas?
//usaremos la libreria date-fns para saber si dos fechas colisionan
// https://date-fns.org/

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const isOverlap = (newDate) => {
  return dates.some(date => {
    return areIntervalsOverlapping(
      { start: date.startDate, end: date.endDate },
      { start: newDate.startDate, end: newDate.endDate },
    )
  })
}

console.log('isOverlap', isOverlap(newAppointment));
console.log('isOverlap', isOverlap(newAppointment1));
