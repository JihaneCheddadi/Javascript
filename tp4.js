let emailDeConnexion = prompt("Saisissez Une adresse mail");
let mdpDeConnexion = prompt("Saisisez un mot de passe");
let emailSaissi;
let mdpSaissi;
while (emailSaissi != emailDeConnexion || mdpSaissi != mdpDeConnexion) {
  emailSaissi = prompt("Saisissez votre adresse mail");
  mdpSaissi = prompt("Saisissez votre mot de passe");
  if (emailSaissi != emailDeConnexion || mdpSaissi != mdpDeConnexion) {
    alert("Identifiants ou mot de passe incorrect ");
  } else alert("Connexion réussie");
}
