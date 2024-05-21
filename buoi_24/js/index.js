// bTap_1
var errors = {
  name: {
    required: "Vui lòng nhập họ tên",
    min: "Họ tên phải từ 5 ký tự",
  },
  email: {
    email: "Định dạng email không hợp lệ",
    unique: "Email đã có người sử dụng",
    required: "Vui lòng nhập địa chỉ email",
  },
  password: {
    required: "Vui lòng nhập mật khẩu",
    same: "Mật khẩu phải khớp với mật khẩu nhập lại",
  },
};

function getError(field) {
  var fieldArr = field.slice(0);
  if (field.includes(".")) {
    return console.log("Bài 1: ", errors[fieldArr[0]][fieldArr[1]]);
  }
  return console.log("Bài 1: ", errors[fieldArr].required);
}

getError("email");
// end bTap_1

// bTap_2
console.log(" ");
console.log("Bài 2:");
const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

function createCustomers(customers) {
  return customers.map(function (customers) {
    var shortNameArray = customers.name.split(" ");
    customers["shortName"] = `${shortNameArray[0]} ${shortNameArray.slice(
      -1
    )}}`;
    return customers;
  });
}

console.log("Mảng sau khi sắp xếp và thêm thuộc tính:");
console.log(createCustomers(customers));
// end bTap_2

// bTap_3
console.log(" ");
console.log("Bài Tập 3:");
const data = [];
const dataRegisterA = handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);
const dataRegisterB = handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);

function handleRegister(name, password, email) {
  if (!name || !password || !email) {
    return console.log("Vui lòng nhập đầy đủ thông tin");
  }
  return data.push({
    name: name,
    password: password,
    email: email,
    role: "user",
  });
}
function handleLogin(email, password) {
  if (!password || !email) {
    return console.log("Vui lòng nhập đầy đủ thông tin");
  }
  var userData = data.filter(function (user) {
    if (user.email.includes(email) && user.password.includes(password)) {
      return user;
    }
  });
  if (userData.length === 0) {
    return "Thông tin đăng nhập không hợp lệ";
  }
  return userData;
}

console.log("Data =", data);
var dataLogin = handleLogin("nguyenvanb@email.com", "1234567");
console.log("DataLogin = ", dataLogin);
// end bTap_3
