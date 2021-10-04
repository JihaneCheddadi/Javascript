let nmbrDepart = parseInt(prompt("Saisir le nombre a multiplier"));
let nmbrFin = parseInt(prompt("Saisir le dernier nombre a multiplier"));
let nmbrDepartmulti = parseInt(prompt("Saisir le nombre a multiplier"));
let nmbrFinmulti = parseInt(prompt("Saisir le dernier nombre"));
let multi;

for (let i = nmbrDepart; i <= nmbrFin; i++) {
  for (let j = nmbrDepartmulti; j <= nmbrFinmulti; j++) {
    multi = i * j;
    alert(`${i} x ${j} = ${multi}`);
  }
}
