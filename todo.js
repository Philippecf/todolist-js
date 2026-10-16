const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

// console.log(input, button, ul);

button.addEventListener("click", () => {
  const resultat = input.value.trim(); //La methode trim() permet de retirer les blancs en debut et fin de chaine.
  if (resultat === "") {
    return;
  }
  const newLi = document.createElement("li");
  newLi.innerText = input.value;
  ul.appendChild(newLi);
  input.value = ""; //on vide le champ apres l'ajout

  const buttonBis = document.createElement("button");
  buttonBis.innerText = "Supprimer";
  newLi.appendChild(buttonBis);
  buttonBis.addEventListener("click", () => {
  newLi.remove();
  });
});

const completed = classList.toggle("newLi");
newLi.fontcolor("green");