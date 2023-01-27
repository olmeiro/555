const elements = ["hola", null, "como", "estas"];

let acumulator = "";
const separator = "/";

for (let i = 0; i < elements.length; i++) {
  const element = elements[i] ?? ""; //Nullish coalescing
  if (i !== elements.length - 1) {
    acumulator += element + separator;
  } else {
    acumulator += element;
  }
}

console.log(acumulator);

//usando join:
const elements = ["hola", null, "como", "estas"]
const resultado = elements.join("/")

console.log(resultado) // 'hola//como/estas';

//method split
const title = 'Curso de manipulación de array';
console.log(title.split(' '));
const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal)

const cadena = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web."
console.log(cadena.split(" "))
console.log(cadena.split(", "))
console.log(cadena.split("JavaScript"))
console.log(cadena.split(" ", 3)) 