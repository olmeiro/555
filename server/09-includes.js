const pets = ["cat", "dog", "bat"]

let includeInArray = false
for (let i = 0; i < pets.length; i++) {
  const item = pets[i]
  if (item === "cat") {
    includeInArray = true
    break
  }
}

console.log(includeInArray) // trues

//usando includes:
const includesPets = pets.includes('cat');
console.log(includesPets);

//Utilizando strings
const saludo = "Hola mundo"

saludo.includes("Hola") // true
saludo.includes("Mundo") // false
saludo.includes(" ") // true
saludo.includes("Hola", 1) // false
saludo.includes("mundo", -5) // true

//ejercicio:
const arrayW = ["ana", "santi", "nico", "anastasia"]
const term = "ana"

function filterByTerm(array, term) {
  const result = [];
  array.forEach(item => {
    if (item.includes(term)) {
      result.push(item)
    }
  });
  return result;
}

//otra forma:
function solution(words, query) {
  const result = words.filter(word => {
    return word.includes(query);
  });
  return result;
};

console.log(filterByTerm(arrayW, term))
console.log(filterByTerm(arrayW, 'xyz'))