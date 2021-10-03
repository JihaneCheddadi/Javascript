let nmbrDepart = parseInt(prompt("Saisir le nombre a multiplier"));
let multi;
alert(`Table de ${nmbrDepart}`);
for (let i = 1; i <= 10; i++) {
  multi = i * nmbrDepart;
  alert(`${nmbrDepart} x ${i} = ${multi}`);
}
