window.setInterval(() => {
    if (document.querySelector("#myMenu").checked) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
  }, 1);
  