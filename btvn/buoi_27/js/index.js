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

function validation() {
  var form = document.getElementById("form");
  var email = document.getElementById("email").value;
  var text = document.getElementById("text");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Địa chỉ email hợp lệ";
    text.style.color = "green";
  } else {
    form.classList.add("invalid");
    form.classList.remove("valid");
    text.innerHTML = "Vui lòng nhập đúng định dạng email";
    text.style.color = "red";
  }
}

function validationPassword() {
  var password = document.getElementById("password").value;
  var textPassword = document.getElementById("textPassword");

  var checkPassword_1 = /.{8,}/;
  var checkPassword_2 = /[0-9]/;
  var checkPassword_3 = /[a-z]/;
  var checkPassword_4 = /[A-Z]/;
  var checkPassword_5 = /[^A-Za-z0-9]/;

  if (
    password.match(checkPassword_1) &&
    password.match(checkPassword_2) &&
    password.match(checkPassword_3) &&
    password.match(checkPassword_4) &&
    password.match(checkPassword_5)
  ) {
    textPassword.innerHTML = "Mật khẩu hợp lệ";
    textPassword.style.color = "green";
  } else {
    textPassword.innerHTML = "Mật khẩu không hợp lệ";
    textPassword.style.color = "red";
  }
}
