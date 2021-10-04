let nmbrSaissi = parseInt(prompt("Saisissez le nombre"));
for (let i = 1; i <= nmbrSaissi; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    alert("fizzbuzz");
  } else if (i % 5 == 0) {
    alert("buzz");
  } else if (i % 3 == 0) {
    alert("fizz");
  } else alert(i);
}
