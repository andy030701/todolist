const list = document.getElementById("list");
const form = document.querySelector("form");
const item = document.getElementById("item");

//add element
form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li>${item.value}</li>`; //on ajoute a la liste des taches la value tapee par l'user
  storage();
  item.value = ""; //on vide l'input tapee par l'user
});

//remove element
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    //si l'element de la liste qui a ete cliquer par l'user contient la classe 'checked' alors on supprime cet element
    e.target.remove(); //suppression de l'element
  } else {
    e.target.classList.add("checked"); //si l'element cliquer par l'user n'a pas de classe 'checked' alors on ajoute cette classe
  }
  storage(); //appel de la fonction storage
});

//storage part
function storage() {
  //facon plus moderne d'utiliser du localStorage
  window.localStorage.todoList = list.innerHTML; //les elements de la liste seront dans le localStorage
}

//getValues() pour obtenir les contenus du localStorage
function getValues() {
  let storageContent = window.localStorage.todoList; //cherche le contenu du localStorage
  if (!storageContent) {
    list.innerHTML = `<li>Cliquez sur un todo pour le supprimer</li>`; //si la liste est vide
  } else {
    list.innerHTML = storageContent; //si la liste n'est pas vide
  }
}
getValues();
