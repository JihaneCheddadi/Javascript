const formCercle = document.querySelector("#main__form");

formCercle.addEventListener("click", function (e) {
  e.preventDefault();
  let rayon = document.querySelector("#rayon").value;
  document.querySelector("#diametre").value = rayon * 2;
  document.querySelector("#circ").value = 2 * 3.14 * rayon;
  document.querySelector("#aire").value = 3.14 * (rayon * rayon);
});
