document.querySelector("#myMenu").addEventListener("change", (e) => {
  if (e.target.checked) document.body.style.overflowY = "hidden";
  else document.body.style.overflowY = "";
});

let form = document.querySelector(".myForm");
let inputs = document.querySelectorAll(".lgInput");
let regexForNomPrenom = /^[a-zA-Zéè-]+$/;
let regexForEmail = /^[a-zA-Z0-9]+[@]{1}[a-zA-Z0-9|a-zA-Z]+[\.]{1}[a-z]{2.10}$/;
let regexForFormation = /^[a-zA-Zéè,-]+$/;

// class Apprenant {
//   constructor(
//     nom,prenom,email,formasuiv,genre,ville,formabase,appreciation
//   ) {
//     this.nom = nom;
//     this.prenom = prenom;
//     this.email = email;
//     this.formasuiv = formasuiv;
//     this.genre = genre;
//     this.formabase = formabase;
//     this.ville = ville;
//     this.appreciation = appreciation;
//   }
//   verifData() {
//     let isOK;
//       if (this.nom&&this.prenom&&this.formasuiv&&this.email) {
//         if (regexForNomPrenom.test(this.nom) &&regexForNomPrenom.test(this.prenom) &&regexForEmail.test(this.email) && regexForFormation.test(this.formasuiv)){
//           isOK=true
//         }        
//       } else{
//         if (!this.nom)
//         form.nom.nextElementSibling.innerHTML = "*Ce champ est obligatoire";
//       else form.nom.nextElementSibling.innerHTML = "";

//       if (!this.prenom)
//         form.prenom.nextElementSibling.innerHTML = "*Ce champ est obligatoire";
//       else form.prenom.nextElementSibling.innerHTML = "";

//       if (!this.email)
//         form.email.nextElementSibling.innerHTML = "*Ce champ est obligatoire";
//       else form.email.nextElementSibling.innerHTML = "";

//       if (!this.formasuiv)
//         form.formasuiv.nextElementSibling.innerHTML =
//           "*Ce champ est obligatoire";
//       else form.formasuiv.nextElementSibling.innerHTML = "";
//       }




//     return isOK;
//   }
// }

function testRegEx(form) {
  let isRight=false;
  if (
    regexForNomPrenom.test(form.nom.value) &&
    regexForNomPrenom.test(form.prenom.value) &&
    regexForEmail.test(form.email.value) && regexForFormation.test(form.formasuiv.value)
  ) {
    isRight = true;
  } else if(!regexForNomPrenom.test(form.nom.value)){
    isRight=false;
    form.nom.nextElementSibling.innerHTML='Seuls les lettres et caractères accentués sont autorisés'
  }
   else if(!regexForNomPrenom.test(form.prenom.value)){
      isRight=false;
    form.prenom.nextElementSibling.innerHTML='Seuls les lettres et caractères accentués sont autorisés'
  }
  // else if(!regexForEmail.test(form.email.value)){
  //   isRight=false;
  //   form.email.nextElementSibling.innerHTML='Veillez entrer une addresse electronique valide'
  // }
  else if(!regexForFormation.test(form.formasuiv.value)){
    isRight=false;
    form.formasuiv.nextElementSibling.innerHTML='Seuls les lettres et caractères accentués sont autorisés'
  }
forKeyUp();
  return isRight;
}



function forKeyUp(){
  let toAnim=document.querySelectorAll('input')
     Array.from(toAnim).forEach((inputToAnim)=>{
       inputToAnim.addEventListener('keyup',function(e){
         e.preventDefault();
         inputToAnim.nextElementSibling.innerHTML='';
       })
     })
}


function verifMyform(form){
  let isOK=false;
  if (!form.nom.value||!form.prenom.value||!form.email.value||!form.formasuiv.value){
    if (!form.nom.value)
      form.nom.nextElementSibling.innerHTML = "*Ce champ est obligatoire";
    else form.nom.nextElementSibling.innerHTML = "";

     if (!form.prenom.value)
       form.prenom.nextElementSibling.innerHTML = "*Ce champ est obligatoire";
     else form.prenom.nextElementSibling.innerHTML = "";

     if (!form.email.value)
       form.email.nextElementSibling.innerHTML = "*Ce champ est obligatoire";
     else form.email.nextElementSibling.innerHTML = "";

     if (!form.formasuiv.value)
       form.formasuiv.nextElementSibling.innerHTML = "*Ce champ est obligatoire";
     else form.formasuiv.nextElementSibling.innerHTML = "";
    forKeyUp();
  } else {
      isOK=true; 
  }

  return isOK;
}

function sendForm(form){
  let dataForm = new FormData(form);
  let xhr = new XMLHttpRequest();
  let alerteUser = document.querySelector(".alertUser");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      if (xhr.responseText == "ok")
        alerteUser.innerHTML = "Les données ont été envoyées avec succès";
      else
        alerteUser.innerHTML =xhr.responseText;
          Array.from(form).forEach(element => {
            element.innerHTML=''
          });
      alerteUser.classList.add("vsible");
    } else if(xhr.status==4){
      alerteUser.innerHTML ="Une erreur est survenue.<br>Veuillez réessayer.";
    }
    window.setTimeout(function(){
      alerteUser.style.transform='translateY(-200px)'
    },2500)
    
  }
  xhr.open("POST", "../page/ajout.php", true);
  xhr.send(dataForm);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isOk= verifMyform(form)

  if (!isOk) {
    
  } else {
    sendForm(e.target)
  }
});
