// bTap_1
var sum = function (arrBTap_1) {
  return arrBTap_1.reduce(function (start, end) {
    return start + end;
  });
};

var check = sum([1, 2, 3, 4, 5]);

if ((check = Number(check))) {
  console.log(check);
  console.log("Đây là kiểu dữ liệu number");
} else {
  console.log(check);
  console.log("Vui lòng nhập lại đúng kiểu dữ liệu number");
}
// end bTap_1
