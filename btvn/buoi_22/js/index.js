// bTap_1
console.log("Bài Tập 1: Lấy kết quả giao giữa 2 mảng");

var arrA = [1, 4, 3, 2];
console.log("Mảng arrA là: " + arrA);

var arrB = [5, 2, 6, 7, 1];
console.log("Mảng arrB là: " + arrB);

var arrBTap_1 = arrA.filter((numberA) => {
  return arrB.find((numberB) => {
    return numberA === numberB;
  });
});

console.log("Giao giữa 2 mảng là: " + arrBTap_1);
console.log(" ");
// end bTap_1

// bTap_2
console.log("Bài Tập 2: Làm phẳng array sau (Chuyển về mảng 1 chiều)");
console.log(
  `var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];`
);

var arrBTap_2 = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

function Flat(arrBTap_2 = []) {
  return arrBTap_2.reduce(
    (x, y) => x.concat(Array.isArray(y) ? Flat(y) : y),
    []
  );
}

console.log("Mảng arr sau khi đã được làm phẳng: " + Flat(arrBTap_2));
console.log(" ");
// end bTap_2

// bTap_3
console.log("Bài Tập 3: Tách phần tử trong mảng theo đúng kiểu dữ liệu");
console.log(`var arr = [["a", 1, true], ["b", 2, false]]`);

var arrBTap_3 = [
  ["a", 1, true],
  ["b", 2, false],
];

function Unzip(arr = []) {
  return arrBTap_3.reduce(
    (x, y) => (y.forEach((w, i) => x[i].push(w)), x),
    Array.from({ length: Math.max(...arr.map((y) => y.length)) }).map(() => [])
  );
}

console.log("Mảng được tách theo đúng kiểu dữ liệu: ", Unzip(arrBTap_3));
console.log(" ");
// end bTap_3

// bTap_4
var arrBTap_4 = [
  {
    img: "https://picsum.photos/150",
    title: "Tiêu đề bài viết 1",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore expedita ducimus nesciunt dolor nostrum consectetur architecto molestiae nemo eaque facilis!",
  },
  {
    img: "https://picsum.photos/150",
    title: "Tiêu đề bài viết 2",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore expedita ducimus nesciunt dolor nostrum consectetur architecto molestiae nemo eaque facilis!",
  },
  {
    img: "https://picsum.photos/150",
    title: "Tiêu đề bài viết 3",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore expedita ducimus nesciunt dolor nostrum consectetur architecto molestiae nemo eaque facilis!",
  },
];

var container = document.querySelector(".container");

var arrBTap_4_New = " ";

arrBTap_4.forEach(function (tag) {
  arrBTap_4_New += `
      <div class="box">
          <img src ="${tag.img}" class="img"></img>
          <div class="text">
              <h1 class="title">${tag.title} </h1>
              <p class="para">${tag.paragraph} </p>
          </div>
      </div>
      <hr></hr>
      `;
});
container.innerHTML = arrBTap_4_New;
// end bTap_4
