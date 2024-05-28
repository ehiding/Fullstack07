// bTap_1
var getTotal = function (...numbers) {
  if (numbers.length) {
    var check = numbers.every(function (number) {
      if (number !== null) {
        number = +number;
        if (!Number.isNaN(number)) {
          return true;
        }
      }
    });

    if (check) {
      return numbers.reduce(function (total, number) {
        return +total + +number;
      });
    }

    return "Dữ liệu không hợp lệ";
  }
};

var result = getTotal(1, 2, 3, "2");
console.log(result);
// end bTap_1

// bTap_2

// end bTap_2
