/* ============== DESTRUCTURING =============== */
// Gan gia tri cho mang

// ARRAY

let arr = ["id", "name", "free"];
let [id, name, free] = arr;
console.log(id + ' - ' + name + ' - ' + free);


// OBJECT
let obj = {
            id: "id obj", 
            name: "name obj", 
            free: "free obj"
          };

let {name, id, free, admin = "admin"} = obj;
console.log(id + ' - ' + name + ' - ' + free + ' - ' + admin);
