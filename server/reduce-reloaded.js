//ejercicio: crear un objeto con la frecuencia de cada elemento de un array, es decir, cuántas veces aparece.
const items = [5, 6, 7, 6, 5, 7, 7, 8];

const frequency = items.reduce((objeto, elemento) => {
  if (!objeto[elemento]) {
    objeto[elemento] = 1;
  } else {
    objeto[elemento] = objeto[elemento] + 1;
  }

  return objeto;
}, {});

console.log("frecuencias: ", frequency);

//con un array de objetos:
const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

//cuántos hay en cada nivel:
const dataPerLevel = data
  .map(item => item.level)
  .reduce((objeto, level) => {
    if (!objeto[level]) {
      objeto[level] = 1;
    } else {
      objeto[level] = objeto[level] + 1;
    }
    return objeto;
  }, {});

console.log("dataPerLevel:", dataPerLevel);

const items2 = [1, 3, 4, 5, 3, 1, 6, 7, 8, 9, 0, 6, 5, 4, 4, 7, 8, 9, 1, 2, 10];

const rangeFrequencyItems = items2.reduce((objeto, elemento) => {

  if (elemento >= 1 && elemento <= 5) {
    objeto['1-5'] += 1;
  } else if (elemento >= 6 && elemento <= 8) {
    objeto['6-8'] += 1;
  } else if (elemento == 9 || elemento == 10) {
    objeto['9-10'] += 1;
  }
  return objeto;
}, {
  '1-5': 0,
  '6-8': 0,
  '9-10': 0,
});

console.log("rangeFrequencyItems", rangeFrequencyItems)

//otra forma
const items3 = [1, 3, 4, 5, 3, 1, 6, 7, 8, 9, 0, 6, 5, 4, 4, 7, 8, 9, 1, 2, 10];

const between = (x, min, max) => x >= min && x <= max;
const rangeRepetitions = items3.reduce(
  (objeto, elemento) => {
    if (between(elemento, 1, 5)) {
      objeto['1-5'] += 1;
    } else if (between(elemento, 6, 8)) {
      objeto['6-8'] += 1;
    } else if (between(elemento, 9, 10)) {
      objeto['9-10'] += 1;
    }
    return objeto;
  },
  {
    '1-5': 0,
    '6-8': 0,
    '9-10': 0,
  }
)

console.log("rangeRepetitions", rangeRepetitions)

//con un switch: debemos separar cada caso, las lineas comentadas no funcionan
const items4 = [1, 3, 4, 5, 3, 1, 6, 7, 8, 9, 0, 6, 5, 4, 4, 7, 8, 9, 1, 2, 10];

const switchFrequency = items4.reduce((objeto, elemento) => {
  switch (elemento) {
    // case (elemento >= 1 && elemento <= 5):
    // case 1 || 2 || 3 || 4 || 5:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      objeto['1-5'] += 1;
      break;
    // case (elemento >= 6 && elemento <= 8):
    // case 6 || 7 || 8:
    case 6:
    case 7:
    case 8:
      objeto['6-8'] += 1;
      break;
    // case (elemento >= 9 && elemento <= 10):
    // case 9 || 10:
    case 9:
    case 10:
      objeto['9-10'] += 1;
      break;

    default:
      break;
  }
  return objeto;
}, {
  '1-5': 0,
  '6-8': 0,
  '9-10': 0,
});

console.log("switchFrequency", switchFrequency)

//otra forma:
const numbers = [1, 2, 3, 3, 4, 5, 2, 1, 1, 3, 4, 5, 6, 7, 5, 5, 4, 7, 8, 9, 8, 7, 5, 4, 5, 8, 9];
const ranges = ['1-5', '6-7', '8-9'];

const result = numbers.reduce((acum, item) => {
  if (item < 5) {
    !acum[ranges[0]] ? acum[ranges[0]] = 1 : acum[ranges[0]] += 1;
  } else if (item > 5 && item < 8) {
    !acum[ranges[1]] ? acum[ranges[1]] = 1 : acum[ranges[1]] += 1;
  } else {
    !acum[ranges[2]] ? acum[ranges[2]] = 1 : acum[ranges[2]] += 1;
  }
  return acum
}, {})

console.log(result)



