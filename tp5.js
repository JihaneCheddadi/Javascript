let emailDeConnexion = prompt("Saisissez Une adresse mail");
let mdpDeConnexion = prompt("Saisisez un mot de passe");
let emailSaissi;
let mdpSaissi;
let nmbrDeSaissi = 0;
while (
  (emailSaissi != emailDeConnexion || mdpSaissi != mdpDeConnexion) &&
  nmbrDeSaissi < 5
) {
  emailSaissi = prompt("Saisissez votre adresse mail");
  mdpSaissi = prompt("Saisissez votre mot de passe");

  if (emailSaissi != emailDeConnexion || mdpSaissi != mdpDeConnexion) {
    nmbrDeSaissi++;
    alert("Identifiants ou mot de passe incorrect ");
  } else alert("Connexion réussie");
}
if (nmbrDeSaissi >= 5) {
  alert("Vous avez dépassé 5 essaie votre compte est bloqué");
}
