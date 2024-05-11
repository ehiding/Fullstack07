// bTap_1
function maxAndPosition(array) {
  max = array[0];
  max_index = 0;

  for (i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
      max_index = i;
    }
  }
  console.log("Số lớn nhất là:", max);
  console.log("Vị trí số lớn nhất là:", max_index);
}

function minAndPosition(array) {
  min = array[0];
  min_index = 0;

  for (i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
      min_index = i;
    }
  }
  console.log("Số nhỏ nhất là:", min);
  console.log("Vị trí số nhỏ nhất là:", min_index);
}

num = [4, 2, 9, 4, 2, 4, 1, 7];

console.log("Bài tập 01: ");
console.log("Mảng số nguyên là: " + num);
maxAndPosition(num);
minAndPosition(num);
// end bTap_1

// bTap_2
console.log(" ");
console.log("Bài tập 02: ");
var arrayBTap_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5];
function checkNumber(number) {
  if (number <= 1) return false;
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function SoNguyenTo(MangArr) {
  var b = [];
  for (const a of MangArr) {
    if (checkNumber(a)) {
      b.push(a);
    }
  }
  return b;
}

var tong = 0;
var tbCong;
var newArr = SoNguyenTo(arrayBTap_2);

console.log("Mảng cho trước là: " + arrayBTap_2);

console.log("Số nguyên tố trong mảng gồm: " + newArr);

sum = 0;
for (const a of newArr) {
  sum += a;
}
var avg = sum / newArr.length;
console.log("Trung bình các số nguyên tố trong mảng là: " + avg);

// end bTap_2

// bTap_3
console.log(" ");
console.log("Bài tập 03: ");
var arrayBTap_3 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
var arrayBTap_3_checked = arrayBTap_3.reduce(function (accumulator, element) {
  if (accumulator.indexOf(element) === -1) {
    accumulator.push(element);
  }
  return accumulator;
}, []);

console.log("Mảng cho trước là: " + arrayBTap_3);
console.log("Mảng sau khi đã kiểm tra số trùng là: " + arrayBTap_3_checked);
// end bTap_3

// bTap_4
console.log(" ");
console.log("Bài tập 04: ");
var arrayBTap_4 = [5, 4, 8, 2, 1, 25, 74];
console.log("Mảng cho trước là: " + arrayBTap_4);

var arrayBTap_4_checked = arrayBTap_4.sort((a, b) => a - b);
console.log("Mảng sau khi đã được sắp xếp: " + arrayBTap_4_checked);

console.log("Thêm phần từ 44 vào mảng");
arrayBTap_4_checked.push(44);
// console.log(arrayBTap_4_checked);
var arrayBTap_4_checked_again = arrayBTap_4_checked.sort((a, b) => a - b);
console.log("Mảng sau khi đã thêm phần từ: " + arrayBTap_4_checked_again);
// end bTap_4
