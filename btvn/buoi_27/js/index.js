var modal = document.getElementById("myModal");

var btnModal = document.getElementById("loginModal");

var spanClose = document.getElementsByClassName("close")[0];

btnModal.onclick = function () {
  modal.style.display = "block";
};

spanClose.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

document.addEventListener("keyup", function (e) {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
});

// Show_password
var showPassword = document.querySelector("#show_password");
var passwordField = document.querySelector("#password");

showPassword.addEventListener("click", function () {
  this.classList.toggle("fa-eye");
  var type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
});
// end Show_password
