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

// bTap_3
var arrBTap_3 = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];

function nested(arr, parentID = 0) {
  var result = [];
  for (var item of arr) {
    if (item.parent === parentID) {
      var children = nested(arr, item.id);
      if (children.length > 0) {
        item.children = children;
      }
      delete item.parent;
      result.push(item);
    }
  }
  return result;
}

var categories = nested(arrBTap_3);
console.log(categories);
// end bTap_3

// bTap_4
Array.prototype.reduce2 = function (callback, result) {
  i = 0;
  if (arguments.length < 2) {
    i = 1;
    result = this[0];
  }
  for (; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }
  return result;
};

var numbers = [1, 2, 3, 4, 5];

var result = numbers.reduce2((total, number) => {
  return total + number;
});

console.log(result);
// end bTap_4
