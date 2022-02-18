"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(name, age, male) {
        this.name = name;
        this.age = age;
        this.male = male;
    }
    Employee.prototype.print = function () {
        return {
            name: this.name,
            age: this.age,
            male: this.male
        };
    };
    return Employee;
}());
exports.Employee = Employee;
var vuong = new Employee("vuong", 30, true);
console.log(vuong.name, vuong.male);
console.log(vuong.print().name);
var henry = new Employee("henry", 30, true);
var thuong = new Employee("thuong", 18, false);
var noEmployee = {
    name: "no",
    age: 0,
    male: false,
    print: function () {
        return {
            name: "no",
            age: 0,
            male: false
        };
    }
};
var employees = [];
employees.push(henry);
employees.push(thuong);
employees.push(noEmployee);
