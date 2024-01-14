/* ============== THIS =============== */

// OBJECT

// John study PHP
// John study Java
// John study HTML

// Cach 1: 
let stutdent1 = {
    name: "John",
    courses: ["PHP", "Java", "HTML"],
    showInfo: function(){
        for(let value of this.courses){
            console.log(`${this.name} study ${value}`)
        }
    }
}

stutdent1.showInfo()

// Cach 2: 
let stutdent2 = {
    name: "John",
    courses: ["PHP", "Java", "HTML"],
    showInfo: function(){ 
        this.courses.forEach((course_value)=>{ // Neu dung function(course_value) se khong in duoc bien this.name
            console.log(`${this.name} study ${course_value}`)
        })
    }
}

stutdent2.showInfo()