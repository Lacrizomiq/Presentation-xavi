// Fonction qui additionne deux nombres
function add(a, b) {
  return a + b;
}

// Fonction qui soustrait deux nombres
function subtract(a, b) {
  return a - b;
}

// Fonction qui multiplie deux nombres
function multiply(a, b) {
  return a * b;
}

// Fonction qui divise deux nombres
function divide(a, b) {
  return a / b;
}

// Fonction qui calcule la moyenne de deux nombres
function average(a, b) {
  return (a + b) / 2;
}

// Fonction qui calcule la médiane de deux nombres
function median(a, b) {
  return (a + b) / 2;
}

// Fonction qui calcule l'écart type entre deux nombres
function standardDeviation(a, b) {
  // Calcul de la moyenne
  const mean = (a + b) / 2;

  // Calcul de la variance (formule pour un échantillon)
  const variance = (Math.pow(a - mean, 2) + Math.pow(b - mean, 2)) / (2 - 1);

  // Calcul de l'écart type (racine carrée de la variance)
  const stdDev = Math.sqrt(variance);

  return stdDev;
}

// Appels de la fonction avec des exemples
console.log("Écart type entre 5 et 15:", standardDeviation(5, 15));
console.log("Écart type entre 10 et 20:", standardDeviation(10, 20));
console.log("Écart type entre 2 et 8:", standardDeviation(2, 8));
console.log("Écart type entre 100 et 200:", standardDeviation(100, 200));
