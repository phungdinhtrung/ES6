/* ============== DEFAULT PARAMS =============== */

function caculate_M(d, h, f = 0.5){
    var result = (3.14/4)*((d^2)/10000)*h*f
    return result
}

// Không truyền tham số f - giá trị default param
console.log(caculate_M(10,8));