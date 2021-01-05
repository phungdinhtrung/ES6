/* ============== SPREAD OPERATOR =============== */

// Sử dụng để lồng ghép các giá trị của mảng này vào mảng khác.

let arr1 = ["a", "b", "c"]
let arr2 = ["g", "h", "f"]
let arr = ["d", "e", "f"]

// Sử dụng spread để tạo array có full các phần tử của ba mảng
arr = ["d", ...arr1, "e", ...arr2, "f"]

console.log(arr)