window.setInterval(() => {
  if (document.querySelector("#myMenu").checked) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "";
  }
}, 1);

document.querySelector("form input").addEventListener("keyup", function (e) {
  e.preventDefault();
  const valeurARechercher = e.target.value.toLowerCase();
  const divNoms = document.querySelectorAll(".nom");
  Array.from(divNoms).forEach((divNom) => {
    if (divNom.firstChild.textContent.toLowerCase().indexOf(valeurARechercher)!= -1) {
      divNom.classList.remove('pasVu')
    } else{
        divNom.classList.add('pasVu')
    }
  });
});
