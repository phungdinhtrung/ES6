/* ============== ARROW FUNCTIONS =============== */

//1. Khong co tham so
/* 
var hello = ()=>{
    console.log("Hello ES6!");
}

hello();
*/

// 2. Một tham số
/*
var hello = (name)=>{
    console.log(`Hello ${name}` );
}

hello("Trung");
*/

/*
function hello(name){
    console.log(`Hello ${name}` );
}
*/

var hello = name => console.log(`Hello ${name}`);
hello("ES6!");