// bTap_1
console.log(
  `Bài Tập 1: Cho một số nguyên n, trả về số nguyên tố đối xứng nhỏ nhất lớn hơn hoặc bằng n.`
);
function nextPrimeNum(num) {
  for (var i = num + 1; ; i++) {
    var isPrime = true;
    for (var d = 2; d * d <= i; d++) {
      if (i % d === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      return i;
    }
  }
}
var num = 6;
console.log(`Cho n = ` + num);
console.log(
  `Số nguyên tố đối xứng nhỏ nhất lớn hơn hoặc bằng n là: ` + nextPrimeNum(num)
);
// end bTap_1

// bTap_2
console.log(" ");
console.log(
  `Bài Tập 2: Cho hai mảng đã sắp xếp nums1 và nums2 có kích thước lần lượt là m và n, trả về trung vị của hai mảng đã sắp xếp đó.`
);
function Median(arr, n) {
  if (n % 2 == 0) {
    var z = n / 2;
    var e = arr[z];
    var q = arr[z - 1];
    var ans = (e + q) / 2;
    return ans;
  } else {
    var z = Math.floor(n / 2);
    return arr[z];
  }
}

var nums1 = [1, 3, 5, 7];
var nums2 = [8];

console.log(`Mảng nums1 là: ` + nums1);
console.log(`Mảng nums2 là: ` + nums2);

var i = nums1.length;
var j = nums2.length;
var n = i + j;

var arr = nums1.concat(nums2);

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
  nums.sort((a, b) => a - b);
  ans = 1;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == ans) ans++;
  }
  return ans;
}

var arr = [3, 4, -1, 1];
console.log(`Mảng chưa được sắp xếp: ` + arr);
console.log(
  `Số nguyên dương nhỏ nhất không có trong nums là: ` +
    firstMissingPositive(arr)
);
// end bTap_3
