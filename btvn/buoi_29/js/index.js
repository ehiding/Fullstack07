var list = document.querySelector(".slider .list");
var items = document.querySelectorAll(".slider .list .item");
var dots = document.querySelectorAll(".slider .dots li");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var active = 0;
var lengthItems = items.length;

next.onclick = function () {
  active += 1;
  reloadSlider();
};

prev.onclick = function () {
  active -= 1;
  reloadSlider();
};

function reloadSlider() {
  var checkLeft = items[active].offsetLeft;
  list.style.left = -checkLeft + "px";

  var lastActiveDot = document.querySelector(".slider .dots li.active");
  lastActiveDot.classList.remove("active");
  dots[active].classList.add("active");
}

dots.forEach((li, key) => {
  li.addEventListener("click", function () {
    active = key;
    reloadSlider();
  });
});
