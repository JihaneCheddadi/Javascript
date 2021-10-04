/*const mobile = {
  distanceParcourue: prompt("Entre la distance"),
  temps: prompt("Entre ta vitesse"),
  calculVitesse() {
    return this.distanceParcourue / this.temps;
  },
};

console.log(`Distance parcourue : ${mobile.distanceParcourue}`);
console.log(`Temps : ${mobile.temps}`);
console.log(`vitesse ${mobile.calculVitesse()}`);*/

function article(designation, reference, prixHT, qteStock) {
  this.designation = designation;
  this.prixHT = prixHT;
  this.reference = reference;
  this.qteStock = qteStock;
}
const articles = [];

const qteArticle = parseInt(prompt("combien d'articles sont arrivés :"));

for (let i = 1; i <= qteArticle; i++) {
  const designation = prompt("Designation:");
  const reference = prompt("reference:");
  const prixHT = parseInt(prompt("prixHT=:"));
  const qteStock = parseInt(prompt("qtestock:"));
  const article = new Article(designation, reference, prixHT, qteStock);
  articles.push(article);
}
