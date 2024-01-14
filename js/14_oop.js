/* ============== OOP =============== */

// 1. CLASS
/*
class Stutdent {
    constructor(code, name, age){
        this.name = name,
        this.code = code,
        this.age  = age
    }

    showInfo(){
        return this.code + " - " + this.name + " - " + this.getAge()
    }

    getAge(){
        return this.age;
    }
}


let studentObj = new Stutdent("SV001", "John", 28);
console.log(studentObj.showInfo());

*/


// 2. INHERITANCE
class Person {
    constructor(code, name, age){
        this.name = name,
        this.code = code,
        this.age  = age
    }

    showInfo(){
        return this.code + " - " + this.name + " - " + this.getAge()
    }

    getAge(){
        return this.age;
    }
}

class Student extends Person {   // Kế thừa lớp Person
    constructor(code, name, age, score){
        super(code, name, age)   // Kế thừa thuộc tính code, name, age của class cha
        this.score = score       // Bổ sung thêm thuộc tính score
    }

    showInfo(){   
       return super.showInfo() + " - " + this.score   // Kế thừa phương thức showInfo từ lớp cha và bổ sung thêm thuộc tính score
    }
}


let studentObj = new Student("SV001", "John extend", 28, 99);
console.log(studentObj.showInfo());

