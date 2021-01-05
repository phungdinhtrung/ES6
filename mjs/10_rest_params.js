/* ============== REST PARAMS =============== */
// Biến đại diện lưu nhiều giá trị của mảng

function sumValues(...values){
    var result = 0;
    for(let value of values){result += value};
    return result;
}

// Tính tổng các giá trị truyền vào
console.log(sumValues(10, 12, 15));