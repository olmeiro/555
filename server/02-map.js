const letters = ['a', 'b', 'c'];

const newArray = [];

//transformamos el array
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];

  newArray.push(element + '++');

}

console.log("original:", letters)
console.log("newArray:", newArray)

//con map
const newArrayMap = letters.map(letter => letter + '++');
console.log("newArrayMap", newArrayMap)

var foo = ['Once', 'upon', 'a', 'time'];
console.log(foo.join(" ")); // Once upon a time
console.log(foo.join(" ").length); // Once upon a time