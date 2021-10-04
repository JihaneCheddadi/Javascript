let numSaissi = parseInt(prompt("Saisir un nombre"));
while (numSaissi < 10 || numSaissi > 20) {
  if (numSaissi < 10) {
    alert("Plus grand");
    numSaissi = parseInt(prompt("Saisir un nombre"));
  } else if (numSaissi > 20) {
    alert("Plus petit");
    numSaissi = parseInt(prompt("Saisir un nombre"));
  }
}
if (numSaissi >= 10 && numSaissi <= 20) {
  alert("Bravo!!!!");
}
