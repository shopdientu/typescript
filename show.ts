let a: string;
a = "12";

const add = (a: number, b: number, c: number) => a + b + c;
console.log(add(5, 6, 3));

let name1 = ["mai", "hung", "name"];
name1.push("son");
name1.push(1); // error

let name2 = ["mai", 1, "name"];
name2.push("test");

let name3 = [1, 3, 4];

name3.push("test"); // error parameter all is number

// Array

let array1: string[] = ["4", 1, 2]; // error

array1 = ["4", "1", "2"]; // OK

array1 = [1, 2, 3]; //error

let mixed: (number | string | boolean)[];
mixed = ["vuong", 5, true]; //ok
mixed = [undefined, 4, 4]; //ok
mixed = "vuong";

let hobby: "hobby1" | "hobby2";
hobby = "hobby1"; //ok
hobby = "hobby3"; //error

// object

let person: object;

person = { name: "vuong", age: 39, learn: ["javascript", "typescript"] };
person = { 12: 12 }; //OK
person = [1, 2]; //OK

let age: any = 25;
age = "test";
age = { 12: 12 };
age = [1, 2, 3];
age.push(4);

//Type

type stringOrNumber = string | number;
type student1 = {
  name: string;
  id?: stringOrNumber;
};

const studentDetail = (id: stringOrNumber, nameStudent: student): void => {
  console.log(id, nameStudent.id, nameStudent.name);
};

studentDetail(123, {
  name: "ten hoc sinh",
  // id: 1,
  // test: "asd",
});

// function signature
