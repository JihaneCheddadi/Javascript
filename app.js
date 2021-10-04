/*let firstName = "jean";
console.log(firstName);
firstName = "jiji";
console.log(firstName);
firstName = "jajo";
console.log(firstName);
// typae dynamque
let age = 87;
age = "89";
// COnstantes: ces valeurs ne peuvent pas etre modifier
const pays = "france";
let 1a =10
let b = 12;
let somme = a + b;
console.log(somme);
let multiplication = a * b;
console.log(multiplication);
const prenom = "Jihane";
const nom = "Cheddadi";
let nomComplet = prenom + " " + nom;
console.log(nomComplet);
let presentation = `Je suis ${prenom} ${nom} , et j'ai ${age} ans`;
console.log(presentation);*/
//promter votre prénom

const pre = prompt("Quel est votre prénom");
const no = prompt("Quel est votre nom");
const gigi = prompt("Quel est age");
let presentation2 = `vous etes ${no} ${pre} , et vous avez ${gigi} ans`;
console.log(presentation2);

const monAge = parseInt(prompt("votre age :"));
const peutVoter = monAge >= 18;
console.log("Est que je peux voter");
console.log(`R:${peutVoter}`);

const motDePasse = prompt("veuillez saisir un Nouveau Mot de Passe");
const motDePassQueSaisi = prompt("Saisi ton mot de passe mon ami");
const motDePasseEstvalide = motDePasse == motDePassQueSaisi;
console.log(`le mot de passe est : ${motDePasseEstvalide}`);
