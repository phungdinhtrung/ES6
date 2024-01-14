# Tutorial ES6
----------------------------------------------------
1. 	Block scope
    BLOCK FOR > BLOCK IF > BLOCK WHILE

    `for(){ 
        if(){
            while(){
            }
        }
    }`

2. 	Var and Let
	- VAR: Var khai báo trong BLOCK, có thể tái sử dụng ngoài BLOCK
	- LET: LET chỉ sử dụng trong khối BLOCK, phạm vi nhỏ hơn VAR

3. 	Const
	- Hằng số: không đổi, không thể ghi đè vào giá trị biến hằng số.

4. 	Template string
	- Viết lồng biến với chuỗi (thường là chuỗi HTML).

	`var course_name = "ES6";`
	
	`<div> Hello ${course_name} </div>`

5. FOR
- 5.1 FOR ARRAY
	- ARRAY: 
	`let arr = ["Java", "NodeJS", "HTML"];`

	- FOR: index of array
		- Cách 1:

			`let lengthArr = arr.length;`

			`for(index = 0; index < lengthArr; index++){
				console.log(index  + ': ' + arr[index]);
			}`

		- Cách 2:
		
			`for(index in arr){
				console.log(index);
			}`

	- FOR: value of array
	
		`for(value of arr){
			console.log(value);
		}`


- 5.2	FOR OBJECT
	- OBJECT
	
		`let Obj = {
			id		: 69,
			name	: "Play football",
			status	: true
	}`

	- FOR: index of object
	
		`for(index in obj){
			console.log(index);
		}`

	- FOR: value of object
	
		`for(index in obj){
			console.log(obj[index]);
		}`




	






