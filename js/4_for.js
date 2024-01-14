/* ============== FOR =============== */

let arr = ["Java", "NodeJS", "HTML"];
let obj = {
            course1 : "Java",
            course2 : "NodeJS",
            course3 : "HTML"
};

// FOR ARRAY
// FOR ARR-1: for(i = 1; i < lengthArr; i++)
/*
let lengthArr = arr.length;

for(i = 0; i < lengthArr; i++){
    console.log(i + ': ' + arr[i]);
}
*/


// FOR ARR-2: for(index in arr)
/*
for(index in arr){
    console.log(index);
}
*/


// FOR ARR-3: for(value of arr)
/*
for(value of arr){
    console.log(value);
}
*/


// FOR OBJECT
// FOR OBJ-1: for(let index in obj)
/*
for(index in obj){
    console.log(index);
}
*/

// FOR OBJ-2: value of obj
for(index in obj){
    console.log(obj[index]);
}

// Lưu ý: với Object không sử dụng được for(value of obj)


