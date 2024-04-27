// bTap_1
var bTap1 = document.getElementById("bTap1");

bTap1.addEventListener("click", (event) => {
  event.preventDefault();
  var nFibo = parseInt(document.getElementById("nFibo").value);
  var c;
  var a = 0;
  var b = 1;

  if (1 == nFibo) {
    document.write(a + ", ");
  } else {
    document.write(a + ", ");
    document.write(b + ", ");

    for (var i = 3; i <= nFibo; i++) {
      c = a + b;
      a = b;
      b = c;

      document.write(c + ", ");
    }
  }
});
// end bTap_1

// bTap_2
var bTap2 = document.getElementById("bTap2");
function reverseStr(str) {
  var strSplitted = str.split("");
  var arrReversed = strSplitted.reverse();
  var arrJoined = arrReversed.join("");
  return arrJoined;
}

bTap2.addEventListener("click", (event) => {
  event.preventDefault();
  var inputBTap2 = document.getElementById("inputBTap2").value;
  document.getElementById("resultBTap2").innerHTML = reverseStr(inputBTap2);
});
// end bTap2

// bTap_3
var bTap3 = document.getElementById("bTap3");
var btnResultConvert = document.getElementById("btnResultConvert");
var numberConvert = document.getElementById("numberConvert");
var arrNumber = {
  0: "không",
  1: "một",
  2: "hai",
  3: "ba",
  4: "bốn",
  5: "năm",
  6: "sáu",
  7: "bảy",
  8: "tám",
  9: "chín",
};

// end bTap_3
