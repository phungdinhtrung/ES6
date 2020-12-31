/* ============== BLOCK SCOPE =============== */

// 1. BLOCK FOR > BLOCK IF > BLOCK WHILE
/*
for(){
    if(){
        while(){
            
        }
    }
}
*/

// 2. VAR
// Var khai báo trong BLOCK, có thể tái sử dụng ngoài BLOCK
/*
var a = 100
if(a > 50){
    var msg = "WIN"
    console.log(msg);
}

console.log(msg);
*/


// 3. LET
// LET chỉ sử dụng trong khối BLOCK, phạm vi nhỏ hơn VAR
let a = 100
if(a > 50){
    let msg = "WIN"
    console.log(msg);
}

console.log(msg);

