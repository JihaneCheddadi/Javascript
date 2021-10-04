function Etudiant(nom, prenom, age, genre, pays, option, listeCours) {
  this.nom = nom;
  this.prenom = prenom;
  this.age = age;
  this.genre = genre;
  this.pays = pays;
  this.option = option;
  this.listeCours = listeCours;
}

let nbrEtudiant = parseInt(prompt("Entrez le nombre d'étudiant à inscrire :"));
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
};

Etudiant.prototype.getPays = function () {
  return `${this.pays}`;
};

Etudiant.prototype.getNom = function () {
  return `${this.nom}`;
};

Etudiant.prototype.getGenre = function () {
  return `${this.genre}`;
};
Etudiant.prototype.getPrenom = function () {
  return `${this.prenom}`;
};
let compteurChinoise = 0;
let listeEtudiantAvecA = [];
let listeNoms = [];
let listeFemmeAvecK = [];
let listeHommeAvecM = [];

for (let i = 0; i < listeEtudiant.length; i++) {
  if (
    listeEtudiant[i].getPays() == "Chine" &&
    listeEtudiant[i].getGenre() == "F"
  ) {
    compteurChinoise++;
  }
  if (listeEtudiant[i].getPrenom().endsWith("a")) {
    listeEtudiantAvecA.push(listeEtudiant[i]);
  }

  listeNoms.push(listeEtudiant[i].getNom());

  if (
    listeEtudiant[i].getNom().startsWith("K") &&
    listeEtudiant[i].getGenre() == "F"
  ) {
    listeFemmeAvecK.push(listeEtudiant[i]);
  }
  if (
    listeEtudiant[i].getNom().startsWith("M") &&
    listeEtudiant[i].getGenre() == "H"
  ) {
    listeHommeAvecM.push(listeEtudiant[i]);
  }
}

console.log(`Le nombre de chinoise est: ${compteurChinoise}`);
console.log("Liste des personnes dont les prénoms se terminent par “a”");
console.log(listeEtudiantAvecA);
console.log("Liste des noms");
console.log(listeNoms);

console.log(
  "La liste de toutes les personnes dont les noms commencent par K et qui sont des femmes "
);
console.log(listeFemmeAvecK);

console.log("La liste de tous les hommes dont les noms commencent par M");
console.log(listeHommeAvecM);
