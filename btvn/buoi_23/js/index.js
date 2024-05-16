// bTap_1
console.log(
  `Bài Tập 1: Cho một số nguyên n, trả về số nguyên tố đối xứng nhỏ nhất lớn hơn hoặc bằng n.`
);
function nextPrimeNum(num) {
  // Kiểm tra i chạy từ n + 1
  for (var i = num + 1; ; i++) {
    var isPrime = true;
    // Cho d chạy từ 2 với điều kiện căn bậc d nhỏ hơn hoặc bằng i
    for (var d = 2; d * d <= i; d++) {
      // Nếu i chia hết cho d thì đó không phải là số nguyên --> break
      if (i % d === 0) {
        isPrime = false;
        break;
      }
    }
    // Ngược lại trả về i là nguyên tố
    if (isPrime) {
      return i;
    }
  }
}
var num = 6;
console.log(`Cho n = ` + num);
console.log(
  `Số nguyên tố đối xứng nhỏ nhất lớn hơn hoặc bằng ` +
    num +
    ` là: ` +
    nextPrimeNum(num)
);
// end bTap_1

// bTap_2
console.log(" ");
console.log(
  `Bài Tập 2: Cho hai mảng đã sắp xếp nums1 và nums2 có kích thước lần lượt là m và n, trả về trung vị của hai mảng đã sắp xếp đó.`
);
function Median(arr, n) {
  // n là kích thước của mảng hợp nhất giữa nums1 và nums2
  // Trường hợp n là số chẵn, thì trung vị sẽ là trung bình cộng của các phần tử chỉ số ((n)/2) và ((n/2)-1)
  if (n % 2 == 0) {
    var z = n / 2;
    var e = arr[z];
    var q = arr[z - 1];
    var ans = (e + q) / 2;
    return ans;
  }
  // Trường hợp n là số lẻ, trung vị sẽ là chỉ số độ dài mảng hợp nhất (n/2)
  else {
    var z = Math.floor(n / 2); // Làm tròn số, ( Ví dụ n = 5 thì sẽ làm tròn z = 2 ), trung vị sẽ là vị trí phần tử thứ 2 của mảng hợp nhất
    return arr[z];
  }
}

var nums1 = [1, 3, 5, 7];
var nums2 = [8];

console.log(`Mảng nums1 là: ` + nums1);
console.log(`Mảng nums2 là: ` + nums2);

var i = nums1.length;
console.log(`Kích thước m của mảng num1 là: ` + i);
var j = nums2.length;
console.log(`Kích thước n của mảng num2 là: ` + j);

var n = i + j;

var arr = nums1.concat(nums2); // Hợp nhất mảng bằng concat

// Sắp xếp mảng theo thứ tự từ bé đến lớn
arr.sort(function (a, b) {
  return a - b;
});

console.log(
  `Mảng sau khi hợp nhất = ` + arr + ` và trung vị là ` + Median(arr, n)
);
// end bTap_2

// bTap_3
console.log(" ");
console.log(
  `Bài Tập 3: Cho một mảng số nguyên chưa được sắp xếp nums. Hãy trả về số nguyên dương nhỏ nhất không có trong nums.`
);
function firstMissingPositive(nums) {
  nums.sort((a, b) => a - b); // Sắp xếp mảng theo thứ tự từ bé đến lớn
  // Đề bài yêu cầu tìm số nguyên dương nên ta khởi tạo số nguyên dương n chạy từ 1
  var n = 1;
  // Cho i chạy từ 0 trong vòng lặp for với điều kiện i < kích thước mảng nums
  for (i = 0; i < nums.length; i++) {
    // Nếu vị trí phần tử i của mảng nums bằng với n thì n sẽ tăng lên 1
    if (nums[i] === n) n++;
  }
  // Sau khi vòng lặp kết thúc thì n chính là số nguyên dương cần tìm, ta trả n về cho hàm
  return n;

  /* Ví dụ: Cho mảng nums đã được sắp xếp theo thứ tự từ bé đến lớn [-1,1,3,4,5]
      Cho n = 1
      Cho i = 0 thì nums[0] = -1
      Vì -1 < 1 ( num[i] khác n ) --> n vẫn = 1
      Tiếp tục chạy vòng lặp với i = 1 --> nums[1] = 1
      Vì lúc này nums[i] = n ( 1 = 1 ) --> n tăng lên 1 đơn vị --> n = 2
      Tiếp tục chạy vòng lặp với i = 2 --> nums[2] = 3
      --> n vẫn = 2 do nums[2] khác n ( 3 > 2 )
      Cứ thế tiếp tục vòng lặp đến khi chạy đến hết mảng nums ( Với điều kiện i luôn nhỏ hơn độ dài mảng nums )
      --> n = 2 là số nguyên dương cần tìm
     */
}

var arr = [3, -1, 6, 1, 5, 2];
console.log(`Mảng chưa được sắp xếp: ` + arr);
console.log(
  `Số nguyên dương nhỏ nhất không có trong nums là: ` +
    firstMissingPositive(arr)
);
// end bTap_3
