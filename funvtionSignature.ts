// Function Signature
let greet1: (a: string, b: string) => void; // this is signature

greet1 = (name, age) => console.log(name, age);

greet1("vuong", "30");

let greet2: (code: number, message: boolean, error?: string) => void; // this is signature

greet2 = (cod: number, message: boolean, error: string) =>
  void greet2(200, true);

type student = {
  name: string;
  age: number;
};

let callStudent: (student: student) => void;
callStudent = ({ name, age }) => {
  console.log(name, age);
};

callStudent({
  name: "vuong",
  age: 30,
});
