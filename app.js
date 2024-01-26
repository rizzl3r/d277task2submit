window.onload = function (e) {
  let form = document.getElementById("myform");
  if (form) {
    form.onsubmit = function (e) {
      e.preventDefault();
      checkEmails();
    };
    document
      .getElementById("emailconfirm")
      .addEventListener("blur", checkEmails);
  }
};

function checkEmails() {
  let email = document.getElementById("email").value;
  let confirmEmail = document.getElementById("emailconfirm").value;
  let validationElmt = document.getElementById("emailValidationMsg");
  if (email != confirmEmail) {
    let validationElmt = document.getElementById("emailValidationMsg");
    let validationInput = document.querySelector("#emailconfirm");
    validationElmt.classList.remove("hidden");
    validationInput.classList.add("badInput");
  } else {
    validationElmt.classList.add("hidden");
    validationInput.classList.remove("badInput");
  }
}
