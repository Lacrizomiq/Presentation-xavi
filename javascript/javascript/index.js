// 2 types de variables

// const
const age = 18;
const name = "Xavi";

// let
let ageXavi = 18;
ageXavi += 1;

// types en Javascript
// nombre (1, 2 , 3 ,4, ....) - number
// string ("Xavi") - string
// boolean (true or false) - bool
// null (0) - null
// undefined (on ne sait pas) - undefined

// function
function add(x, y) {
  const addition = x + y;
  const message = "Résultat de l'addition :";

  return message + addition;
}

console.log(add(3, 4));

// tableau
const fruits = ["pomme", "orange", "melon"];
console.log(fruits);

// boucle
for (i = 0; i < fruits.length; i++) {
  const fruit = fruits[i]; // fruits[0] = "pomme", fruits[1] = "orange"

  console.log("boucle for", fruit);
}

// Objets
const cars = [
  { name: "Buggati", nombre: 50, price: 1000000 }, // objet 1
  { name: "Ferrari", nombre: 100, price: 2000000 }, // objet 2
  { name: "Mercedes", nombre: 200, price: 3000000 }, // objet 3
];

cars.forEach((car) => {
  console.log(car.name, car.nombre, car.price);
});

const filteredCars = cars.filter((car) => {
  return car.price > 1000000;
});

console.log("Filtered Cars", filteredCars);

// conditionnel
const ageLudovic = 30;

if (ageLudovic >= 18 || ageLudovic <= 64) {
  console.log("Tu es majeur et pas retraité ni ado");
}
if (ageLudovic < 18) {
  console.log("Tu es mineur, pas d'alcool pour toi");
}
if (ageLudovic >= 65) {
  console.log("Profites de ta retraite");
}

// Operateur conditionnel
// && - Valide que les deux conditions soient vrai - ET
// || - Valide que une des deux conditions est vrai - OU
