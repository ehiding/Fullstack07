// Khai báo dữ liệu sản phẩm
var product_data = [
  {
    product_id: 1,
    product_name: "Sản phẩm 1",
    product_price: 1000,
  },
  {
    product_id: 2,
    product_name: "Sản phẩm 2",
    product_price: 2000,
  },
  {
    product_id: 3,
    product_name: "Sản phẩm 3",
    product_price: 3000,
  },
  {
    product_id: 4,
    product_name: "Sản phẩm 3",
    product_price: 4000,
  },
];

// Tạo phần danh sách sản phẩm
var a = 0;
product_data.forEach(function (e) {
  a++;
  var product_item = `<tr>
  <td>${a}</td>
  <td>${e.product_name}</td>
  <td>${e.product_price}</td>
  <td><input type="number" value="1" style="width:20%; display:block ;  margin: 0 auto ;text-algin:center"><button>Thêm vào giỏ</button></td>
  </tr>`;
  document.querySelector(".product_table").innerHTML += product_item;
});

// Tạo phần hiện thị cart
