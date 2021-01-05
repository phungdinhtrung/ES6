/* ============== 12.1	Properties value shorthand =============== */
/*
var course_PHP = "PHP"
var course_JAVA = "JAVA"

// Trước đây
var all_course1 = {
    course_PHP: course_PHP,
    course_JAVA: course_JAVA
}

console.log(all_course1);

// Sử dụng Properties value shorthand
var all_course2 = {
    course_PHP,
    course_JAVA
}

console.log(all_course2);
*/

/* ============== 12.2	Method properties =============== */
/*
// Trước đây
var object1 = {
    name: "Java 1",
    showInfo: function(){
        console.log(this.name)
    }
}

// Method properties
var object2 = {
    name: "Java 2",
    showInfo(){ // Bỏ chữ function, viết trực tiếp vào function-name
        console.log(this.name)
    }
}

object2.showInfo();
*/


/* ============== 12.3	Computed property name =============== */
// Sử dụng để tùy biến [property name] (giá trị key) trong Object
let prefix = "prefix_"

let Courses = {
    [prefix + "php"]: "PHP",
    [prefix + "java"]: "JAVA"
}

console.log(Courses)





