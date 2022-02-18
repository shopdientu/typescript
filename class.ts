export class Employee {
  constructor(
    public name: string,
    private age: number,
    readonly male: boolean
  ) {}
  print() {
    return {
      name: this.name,
      age: this.age,
      male: this.male,
    };
  }
}

const vuong = new Employee("vuong", 30, true);
console.log(vuong.name, vuong.male);
console.log(vuong.print().name);

const henry = new Employee("henry", 30, true);
const thuong = new Employee("thuong", 18, false);
const noEmployee = {
  name: "no",
  age: 0,
  male: false,
  print() {
    return {
      name: "no",
      age: 0,
      male: false,
    };
  },
};

const employees: Employee[] = [];
employees.push(henry);
employees.push(thuong);
employees.push(noEmployee);
