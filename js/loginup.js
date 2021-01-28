const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

sign_in_form = document.querySelector(".sign-in-form");
sign_up_form = document.querySelector(".sign-up-form");
function aVider() {
  let inputs = document.querySelectorAll(".aVider");
  Array.from(inputs).forEach((input) => {
    input.value = "";
  });
}

function verifInputValue(form) {
  let isOk = false;
  let taille = Array.from(form).length;
  let username;
  let mdp;
  let email;
  if (taille == 3) {
    username = document.querySelector(".sign-in-form input[type='text']");
    mdp = document.querySelector(".sign-in-form input[type='password']");
    if (!username.value) {
      username.nextElementSibling.innerHTML = "*Ce champ est obligatoire";
    } else if (!mdp.value) {
      mdp.nextElementSibling.innerHTML = "*Ce champ est obligatoire";
    } else isOk = true;
  } else if (taille == 4) {
    username = document.querySelector(".sign-up-form input[type='text']");
    email = document.querySelector(".sign-up-form input[type='email']");
    mdp = document.querySelector(".sign-up-form input[type='password']");
    if (!username.value) {
      username.nextElementSibling.innerHTML = "*Ce champ est obligatoire";
    } else if (!email.value) {
      email.nextElementSibling.innerHTML = "*Ce champ est obligatoire";
    } else if (!mdp.value) {
      mdp.nextElementSibling.innerHTML = "*Ce champ est obligatoire";
    } else isOk = true;
  }

  return isOk;
}

function keyUp(input) {
  input.addEventListener("keyup", function (e) {
    e.preventDefault();

    input.nextElementSibling.innerHTML = "";
  });
}

sign_in_form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (verifInputValue(this)) {
    let dataForm = new FormData(this);
    let xhr = new XMLHttpRequest();
    let alerte = document.querySelector(".alert");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        if (xhr.responseText == "catchedInDB") {
          window.location.href = "./accueil.html";
        } else if (xhr.responseText == "notCatchedInDB") {
          alerte.innerHTML =
            "Les données entrées sont incorrectes <br>Veuillez réssayer.";
          alerte.classList.remove("cached");
          window.setTimeout(() => {
            alerte.classList.add("cached");
          }, 3000);
        }
      } else if (xhr.readyState == 4) {
        alerte.innerHTML = "Une erreur est survenue.<br> Veuillez réessayer.";
        alerte.classList.remove("cached");
        window.setTimeout(() => {
          alerte.classList.add("cached");
        }, 3000);
      }
      aVider();
    };
    xhr.open("POST", "page/treatloginup.php", true);
    xhr.send(dataForm);
  } else {
    keyUp(this.id_userIn);
    keyUp(this.id_mdpIn);
  }
});

sign_up_form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (verifInputValue(this)) {
    let dataForm = new FormData(this);
    let xhr = new XMLHttpRequest();
    let alerte = document.querySelector(".alert");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        if (/alreadyInDB/.test(xhr.responseText)) {
          alerte.innerHTML =
            "Vous êtes déja enregistré(e). <br> Veuillez remplir le formulaire de connexion";
          alerte.classList.remove("cached");
          window.setTimeout(() => {
            alerte.classList.add("cached");
          }, 3000);
        } else if (/userSaved/.test(xhr.responseText)) {
          alerte.innerHTML =
            "Vous avez été enregistré. <br>Veuillez remplir le formulaire de connexion pour accéder à l'application";
          alerte.classList.remove("cached");
          window.setTimeout(() => {
            alerte.classList.add("cached");
          }, 3000);
        } else if (xhr.readyState == 4) {
          alerte.innerHTML = "Une erreur est survenue.<br> Veuillez réessayer.";
          alerte.classList.remove("cached");
          window.setTimeout(() => {
            alerte.classList.add("cached");
          }, 3000);
        }
        aVider();
      }
    };
    xhr.open("POST", "./page/treatloginup.php", true);
    xhr.send(dataForm);
  } else {
    console.log("kchjsd");
    keyUp(this.id_userUp);
    keyUp(this.email);
    keyUp(this.id_mdpUp);
  }
});
