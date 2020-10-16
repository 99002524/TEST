const fs = require('fs');
 
const emp = {
    empName : "Phaniraj",
    empAddress : "Bangalore",
    empSalary : 65000
}//object in JavaScript....
 
//to transfer any object thro HTTP, we convert this object to JSON(JavaScript Object Notation).
/* const jsondata = JSON.stringify(emp);//Converts the object to a JSON format...
console.log(emp);
console.log(jsondata);
 */
 
 //Use the parse method to convert jsondata to an object...
/* let jsonObj = { "cstId" : "123", "cstName": "Ramesh", "cstAddress" : "Kolkata" }
 
let data = JSON.parse(jsonObj);
console.log(data.cstId);
console.log(data.cstAddress);//to access individual data... */
 
class employee{
    constructor(name, address, salary){
        this.empName = name;
        this.empAddress = address;
        this.empSalary = salary;
    }
}
 
let employees = [];
/* employees.push(new employee("Phaniraj", "Bangalore", 67000));
employees.push(new employee("Gopal", "Bangalore", 67000));
employees.push(new employee("Robert", "Bangalore", 67000));
employees.push(new employee("Jason", "Bangalore", 67000));
employees.push(new employee("Rictche", "Bangalore", 67000));
employees.push(new employee("Andrews", "Bangalore", 67000));
 */
let jsonData = JSON.stringify(employees);
console.log(jsonData);
 
function saveData(jsonData) {
    const filename = "data.json";
    fs.writeFileSync(filename, jsonData, 'utf-8');
    console.log("Data is saved as JSON");    
}
 
function loadData() {
    const filename = "data.json";
    const data = fs.readFileSync(filename, "utf-8");
    employees = JSON.parse(data);
}
//saveData(jsonData);
//Ph: 9945205684
 
loadData();
for (const emp of employees) {
    console.log(emp.empName);
}


