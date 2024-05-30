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
