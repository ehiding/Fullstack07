// bTap_1
console.log("Bài Tập 1");
var getTotal = function (...numbers) {
  if (numbers.length) {
    var total = 0;
    var check = numbers.every(function (number) {
      if (number !== null) {
        number = +number;
        total += number;
        if (!Number.isNaN(number)) {
          return true;
        }
      }
    });

    if (check) {
      return total;
    }
    return "Dữ liệu không hợp lệ";
  }
};

var result = getTotal(1, 2, 3, "2", null);
console.log(result);
// end bTap_1

// bTap_2
console.log("");
console.log("Bài Tập 2");
var price = 12000;

Number.prototype.getCurrency = function (currency) {
  var value = +this.valueOf();
  if (currency) {
    return value.toLocaleString() + " " + currency;
  }
};

String.prototype.getCurrency = Number.prototype.getCurrency;
console.log(price.getCurrency("đ"));

var price = "12000000";
console.log(price.getCurrency("đ"));
// end bTap_2

// bTap_3
console.log("");
console.log("Bài Tập 3");
Array.prototype.push2 = function (...arr) {
  var length = this.length;

  for (var i = 0; i < arr.length; i++) {
    this[length + i] = arr[i];
  }

  this.length = length + arr.length;
  return this.length;
};

var arrBTap_3 = [4, 7, 1];
arrBTap_3.push2(10, 15);
console.log(arrBTap_3);
// end bTap_3

// bTap_4
console.log("");
console.log("Bài Tập 4");
Array.prototype.filter2 = function (arr) {
  if (typeof arr !== "function") {
    throw new TypeError(arr + "không phải là 1 hàm");
  }

  var result = [];

  for (var i = 0; i < this.length; i++) {
    if (i in this) {
      if (arr(this[i], i, this)) {
        result.push(this[i]);
      }
    }
  }

  return result;
};

var arrBTap_4 = [5, 6, 8, 2, 4];
var arrBTap_4_New = arrBTap_4.filter2(function (element) {
  return element > 4;
});
console.log(arrBTap_4_New);
// end bTap_4

// bTap_5
console.log("");
console.log("Bài Tập 5");
var categories = [
  { id: 1, name: "Chuyên mục 1" },
  {
    id: 2,
    name: "Chuyên mục 2",
    children: [
      { id: 4, name: "Chuyên mục 2.1" },
      {
        id: 5,
        name: "Chuyên mục 2.2",
        children: [
          { id: 10, name: "Chuyên mục 2.2.1" },
          { id: 11, name: "Chuyên mục 2.2.2" },
          { id: 12, name: "Chuyên mục 2.2.3" },
        ],
      },
      { id: 6, name: "Chuyên mục 2.3" },
    ],
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    children: [
      { id: 7, name: "Chuyên mục 3.1" },
      { id: 8, name: "Chuyên mục 3.2" },
      { id: 9, name: "Chuyên mục 3.3" },
    ],
  },
];

// end bTap_5
