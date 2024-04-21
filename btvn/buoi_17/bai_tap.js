// bài 1
console.log("Bài 1:");
var a = 1;
var b = 2;
console.log("Số thứ nhất:" + a);
console.log("Số thứ 2:" + b);
a = a + b;
b = a - b;
a = a - b;
console.log("Hoán vị 2 số: ");
console.log("Số thứ nhất:" + a);
console.log("Số thứ 2:" + b);
console.log(" ");
// end bài 1

// bài 2
console.log("Bài 2:");
console.log("S = 10 + 20 + 5^10 / 2");
var a;
a = 10 + 20 + 5 ** 10 / 2;
console.log("S = " + a);
console.log(" ");
// end bài 2

// bài 3
console.log("Bài 3:");
var a = 122,
  b = 24,
  c = 35;
d = 0;
console.log("Số thứ 1: " + a);
console.log("Số thứ 2: " + b);
console.log("Số thứ 3: " + c);
console.log("Số thứ 4: " + d);
var max =
  a > b
    ? a > c
      ? a > d
        ? a
        : d
      : c > d
      ? c
      : d
    : b > c
    ? b > d
      ? b
      : d
    : c > d
    ? c
    : d;
console.log("Số lớn nhất là: " + max);
console.log(" ");
// end bài 3

// bài 4
console.log("Bài 4:");
var a = 1,
  b = 2;
console.log("Số thứ 1: " + a);
console.log("Số thứ 2: " + b);
if ((a > 0 && b > 0) || (a < 0 && b < 0)) {
  console.log("--> Cùng dấu");
} else {
  console.log("--> Trái dấu");
}
console.log(" ");
// end bài 4

// bài 5
console.log("Bài 5:");
var a = 1,
  b = 2,
  c = 3,
  z;
var array = [a, b, c];
for (var i = 0; i < array.length; i++) {
  console.log(" Số thứ " + (i + 1) + ": " + array[i]);
}
for (var i = 0; i < array.length; i++) {
  for (var j = i + 1; j < array.length; j++) {
    if (array[i] > array[j]) {
      tmp = array[i];
      array[i] = array[j];
      array[j] = z;
    }
  }
}
console.log("Sắp xếp tăng dần: " + array);
// end bài 5
