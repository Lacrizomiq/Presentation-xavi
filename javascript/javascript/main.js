// Récupérer l'input
const ageInput = document.getElementById("age");
const form = document.getElementById("form");

// Ajouter un événement sur le formulaire
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(ageInput.value);

  // Vérifier si l'age est inférieur à 18
  if (ageInput.value < 18) {
    console.error("Accès refusé");
  } else {
    console.log("Accès autorisé");
  }
});
