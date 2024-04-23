// bai 1
var btnBai_1 = document.getElementById("btnBai_1");

function taxiPrice(soKm) {
  var lastPrice = 0;
  if (soKm <= 1) {
    lastPrice = 15000;
  } else if (soKm > 1 && soKm <= 5) {
    lastPrice = 15000 + 13500 * (soKm - 1);
  } else if (soKm > 5 && soKm <= 120) {
    lastPrice = 15000 + 13500 * 4 + 11000 * (soKm - 5);
  } else if (soKm > 120) {
    var discount = 15000 + 13500 * 4 + 11000 * (soKm - 5) * (1 / 10);
    lastPrice = 15000 + 13500 * 4 + 11000 * (soKm - 5) - discount;
  }
  return lastPrice;
}

btnBai_1.addEventListener("click", (event) => {
  event.preventDefault();
  var soKm = parseFloat(document.getElementById("inputKm").value);
  if (isNaN(soKm) || soKm === "" || soKm === 0) {
    alert("Sai định dạng");
  } else {
    var price = taxiPrice(soKm);
    document.getElementById("taxiPrice").innerHTML = `${price} vnd`;
  }
});
// end bai 1

// bai 2
var kwhBtn = document.getElementById("kwhBtn");
function electricPrice(kwh) {
  var price = 0;
  if (kwh > 0 && kwh <= 50) {
    price = 1678 * kwh;
  } else if (kwh >= 51 && kwh <= 100) {
    price = 1678 * 50 + 1734 * (kwh - 50);
  } else if (kwh >= 100 && kwh <= 200) {
    price = 1678 * 50 + 1734 * 50 + 2014 * (kwh - 100);
  } else if (kwh >= 201 && kwh <= 300) {
    price = 1678 * 50 + 1734 * 50 + 2014 * 100 + 2536 * (kwh - 200);
  } else if (kwh >= 301 && kwh <= 400) {
    price =
      1678 * 50 + 1734 * 50 + 2014 * 100 + 2536 * 100 + 2834 * (kwh - 300);
  } else if (kwh >= 401) {
    price =
      1678 * 50 +
      1734 * 50 +
      2014 * 100 +
      2536 * 100 +
      2834 * 100 +
      2927 * (kwh - 400);
  }
  return price;
}

kwhBtn.addEventListener("click", (event) => {
  event.preventDefault();
  var kwhInput = parseFloat(document.getElementById("kwhInput").value);
  if (kwhInput == 0 && isNaN(kwhInput)) {
    alert("Vui lòng nhập lại");
  } else {
    var kwhPrice = electricPrice(kwhInput);
    document.getElementById("electricPrice").innerHTML = `${kwhPrice} vnd`;
  }
});
// end bài 2

// bài 3
var bTap3 = document.getElementById("bTap3");

function soNguyen(n) {
  var a = 1;
  var s = 0;
  for (i = 1; i <= n; i++) {
    a = i * (i + 1);
    s += a;
  }
  return s;
}

bTap3.addEventListener("click", (event) => {
  event.preventDefault();
  var input = parseInt(document.getElementById("nhapN").value);
  if (input == 0 || input == "" || isNaN(input)) {
    alert("Vui lòng nhập lại");
  } else {
    var result = soNguyen(input);
    document.getElementById("bTap3Result").innerHTML = result;
  }
});
// end bài 3

// bài 4
var bTap4 = document.getElementById("bTap4");

function soNguyen(n) {
  if (n < 2) {
    return false;
  } else {
    for (i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        return false;
      }
    }
  }
  return true;
}

bTap4.addEventListener("click", (event) => {
  event.preventDefault();
  var input = parseInt(document.getElementById("input4").value);
  if (input == 0 || input == "" || isNaN(input)) {
    alert("Vui lòng nhập lại");
  } else {
    result = soNguyen(input);
    if (result) {
      document.getElementById(
        "ntResult"
      ).innerHTML = `${input} là số nguyên tố`;
    } else {
      document.getElementById(
        "ntResult"
      ).innerHTML = `${input} không là số nguyên tố`;
    }
  }
});
// end bài 4
