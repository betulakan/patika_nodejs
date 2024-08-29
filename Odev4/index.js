const fs = require("fs");

// * create file

/* fs.writeFile(
  "employees.json",
  '{"name": "Employee 1 Name", "salary": 2000}',
  "utf-8",
  (err) => {
    if (err) console.log(err);
    console.log("Employees.json dosyası oluşturuldu");
  }
); */

// * read file

/* fs.readFile("employees.json", "utf-8", (err, data) => {
  if (err) console.log(err);
  console.log("employee: " + data);
});
 */

// * update

/* fs.writeFile(
  "employees.json",
  '{"name": "Betül", "salary": 5000}',
  "utf-8",
  (err) => {
    if (err) console.log(err);
    console.log("dosya güncellendi");
  }
); */

// * delete

fs.rm("employees.json", (err) => {
    if(err) console.log(err)
    console.log("dosya silindi")
})
