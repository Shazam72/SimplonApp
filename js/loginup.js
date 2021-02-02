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

sign_up_form.mdp_confirm.addEventListener("keyup", function (e) {
  if (this.value == sign_up_form.mdp.value && sign_up_form.mdp.value) {
    this.nextElementSibling.style.color = " #1eb41e";
    this.nextElementSibling.innerHTML = "Les mots de passe sont identiques";
    window.setTimeout(() => {
      this.nextElementSibling.innerHTML = "";
    }, 10000);
  } else {
    this.nextElementSibling.style.color = "red";
    this.nextElementSibling.innerHTML =
      "Les mots de passe ne correspondent pas";
  }
});

function verifInputValue(form) {
  let isOk = true;
  Array.from(form).forEach(function (input) {
    if (!input.value) {
      isOk = false;
      input.nextElementSibling.innerHTML = "*Ce champ est obligatoire";
    } else if (input.name == "username" && !(/^[a-zA-Z0-9]+$/.test(input.value))) {
            isOk = false;
      input.nextElementSibling.innerHTML =
        "*Votre username ne doit contenir que des lettres et des chiffres";
        input.nextElementSibling.style.width='500px'
    } else if (input.type == "email" && !(/^[a-zA-Z0-9.\-_]+[@]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,10}$/.test(input.value))) {
            isOk = false;
      input.nextElementSibling.innerHTML =
        "*Veuillez entrer une adresse electronique valide";
    } else if (input.type=='password' && !(/^[a-zA-Z0-9]{8,50}$/.test(input.value))) {
      isOk=false;
      input.nextElementSibling.innerHTML =
        "Le mot de passe doit contenir au moins 8 charactères";
        input.nextElementSibling.style.width='320px'
    }
  });

  return isOk;
}

function clearInput(input) {
  input.addEventListener("keyup", function (e) {
    e.preventDefault();

    input.nextElementSibling.innerHTML = "";
  });
}

sign_in_form.addEventListener("submit", function (e) {
  e.preventDefault();
  let dataForm = new FormData(this);
  if (verifInputValue(this)) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "./page/treatloginup.php", true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        if (xhr.response == "founded") {
          swal({
            title: "Connexion Réussie!",
            text: "Cliquez sur OK afin dêtre redirigé vers la plateforme!",
            icon: "success",
            button: "OK",
          }).then(() => (window.location.href = "./accueil.html"));
        } else if (xhr.response == "PasswordNotGood") {
          swal({
            title: "Les informations entrées sont incorrectes!",
            text:
              "Le nom d'utilisateur ou le mot de passe sont incorrects!. Veuillez réessayer s'il vous plaît!",
            icon: "error",
            button: "OK",
          });
        } else if (xhr.response == "notCatchedInDB") {
          swal({
            title: "Ulisateur non trouvé !",
            text:
              "L'utilisateur renseigné est inexistant !. Veuillez réessayer en mettant les bons identifiants ou passez par le formulaire d'inscription s'il vous plaît!",
            icon: "error",
            button: "OK",
          });
        }
      } else if (xhr.readyState == 4 || xhr.response == "error") {
        swal({
          title: "Désolé!",
          text: "Une erreur est survenue. Veuillez réessayer s'il vous plaît!",
          icon: "info",
          button: "OK",
        });
      }
    };
    xhr.send(dataForm);
  } else {
    clearInput(this.username);
    clearInput(this.mdp);
  }
});

sign_up_form.addEventListener("submit", function (e) {
  e.preventDefault();
  let dataForm = new FormData(this);
  if (verifInputValue(this)) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "./page/treatloginup.php", true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        if (xhr.response == "userSaved") {
          swal({
            title: "Identifiants enregistrés!",
            text:
              "Vous pouvez retournez au formulaire de connexion afin de vous connecter!",
            icon: "success",
            button: "OK",
          });
          clearInput(this.username);
          clearInput(this.email);
          clearInput(this.mdp);
        } else if (xhr.response == "mdpNotConfirmed") {
          swal({
            title: "Mots de passe non conformes!",
            text: "Vous devez confirmer le mot de passe!",
            icon: "error",
            button: "OK",
          });
        } else if (xhr.response == "alreadyInDB") {
          swal({
            title: "Utilisateur déja existant!",
            text:
              "Les données que vous avez entrées existent déja. Veuillez vous rendre au formulaire de connection afin de vous identifier et accéder à l'application!",
            icon: "info",
            button: "OK",
          });
        }
      } else if (xhr.readyState == 4 || xhr.response == "error") {
        swal({
          title: "Désolé!",
          text: "Une erreur est survenue. Veuillez réessayer s'il vous plaît!",
          icon: "info",
          button: "OK",
        });
      }
    };
    xhr.send(dataForm);
  } else {
    clearInput(this.username);
    clearInput(this.email);
    clearInput(this.mdp);
  }
});
