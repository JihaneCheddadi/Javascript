function Etudiant(nom, prenom, age, genre, pays, option, listeCours) {
  this.nom = nom;
  this.prenom = prenom;
  this.age = age;
  this.genre = genre;
  this.pays = pays;
  this.option = option;
  this.listeCours = listeCours;
}

/*let nbrEtudiant = parseInt(prompt("Entrez le nombre d'étudiant à inscrire :"));
let listeEtudiant = [];

for (let i = 0; i < nbrEtudiant; i++) {
  const nom = prompt("Nom :");
  const prenom = prompt("Prénom :");
  const age = prompt("Age :");
  const genre = prompt("Genre :");
  const pays = prompt("Pays :");
  const option = prompt("Option :");
  const nbreCours = prompt("Nombre de cours :");
  const listeCours = [];
  for (let j = 0; j < nbreCours; j++) {
    listeCours.push(prompt("Entrez les cours suivis :"));
  }
  listeEtudiant.push(
    new Etudiant(nom, prenom, age, genre, pays, option, listeCours)
  );
}
console.log(listeEtudiant);

Etudiant.prototype.changeNom = function (nouveauNom) {
  return (this.nom = nouveauNom);
};
Etudiant.prototype.changePrenom = function (nouveauPrenom) {
  return (this.prenom = nouveauPrenom);
};
Etudiant.prototype.changeOption = function (nouvOption) {
  return (this.option = nouvOption);
};*/

//recuperation des informations du formulaire
const nomInput = document.querySelector("#nom");
const prenomInput = document.querySelector("#prenom");
const ageInput = document.querySelector("#age");
const genreInput = document.querySelector("#genre");
const paysInput = document.querySelector("#pays");
const optionInput = document.querySelector("#option");
const listeCoursInput = document.querySelector("#listeCours");
const erreur = document.createElement("span");

const form = document.querySelector("#form");

const tabEtudiant = document.querySelector("#tabEtudiant");

const titreFormulaire = document.createElement("h1");

titreFormulaire.innerText = "Formulaire des inscriptions";
//inserer titre avant le formulaire
form.before(titreFormulaire);
//Creation du tableau
let tableauxDesInscriptions = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let etudiant = new Etudiant(
    nomInput.value,
    prenomInput.value,
    ageInput.value,
    genreInput.value,
    paysInput.value,
    optionInput.value,
    listeCoursInput.value
  );
  function verification(Etudiant) {
    if (
      etudiant.nom.length == 0 ||
      etudiant.prenom.length == 0 ||
      etudiant.age.length == 0 ||
      etudiant.genre.length == 0 ||
      etudiant.pays.length == 0 ||
      etudiant.option.length == 0 ||
      etudiant.listeCours.length == 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  if (verification(etudiant)) {
    erreur.classList.add("text-red");
    erreur.innerText = "Veuillez remplir tous les champs ";
    form.after(erreur);
  } else {
    const tr = document.createElement("tr");

    const nom = document.createElement("td");
    nom.innerText = etudiant.nom;

    const prenom = document.createElement("td");
    prenom.innerText = prenomInput.value;

    const age = document.createElement("td");
    age.innerText = ageInput.value;

    const pays = document.createElement("td");
    pays.innerText = paysInput.value;

    const genre = document.createElement("td");
    genre.innerText = genreInput.value;

    const option = document.createElement("td");
    option.innerText = optionInput.value;

    const listeCours = document.createElement("td");
    listeCours.innerText = listeCoursInput.value;

    tabEtudiant.append(tr);
    tr.append(nom, prenom, age, pays, genre, option, listeCours);
    //Ajout dans le tableau les inscriptions
    tableauxDesInscriptions.push(etudiant);

    document.getElementById("form").reset();

    console.table(tableauxDesInscriptions);

    erreur.innerText = "";
    erreur.classList.remove("text-red");
  }
});
