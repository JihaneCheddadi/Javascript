function verification(Etudiant) {
    if (
      etudiant.nom.length == 0 ||
      etudiant.prenom.length ==0 ||
      etudiant.age.length ==  0||
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

  if (
    verification(etudiant)
  ) {
    const messageErreur = "Veuillez remplir tous les champs";
    const erreur = document.createElement("h2");
    erreur.classList.add("text-red");
    erreur.innerText = messageErreur;
    form.after(erreur);
  } else {



    erreur.innerText=""
    erreur.classList.remove("text-red")

     if (etudiant.nom.lenght>5 && etudiant.prenom.length>5) && 