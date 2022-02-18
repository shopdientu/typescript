import { Employee } from "./class";
const last = (array: Array<number>) => {
  console.log(array[array.length - 1]);
  return array[array.length - 1];
};

const l1 = last([1, 2, 3]);
// const l2 = last(["a", "b"]); //error

const lastT = <T>(array: T[]) => array[array.length - 1];

const l3 = lastT([1, 2, 3]);
const l4 = lastT(["a", "b", "c"]);
const l5 = lastT<string>(["a", "c" /* 1 */]);

const makeA = <T>(x: T) => [x];

const m1 = makeA(1);
const m2 = makeA("abc");

const makeXY = <X, Y>(x: X, y: Y) => [x, y];
const m3 = makeXY("a", "b");
const m4 = makeXY("a", 3);

const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => {
  console.log([x, y]);
  return [x, y];
};

const mT1 = makeTuple("a", 1);
const mT2 = makeTuple(2, 1);
const mT3 = makeTuple<string | "number", number>("abc", 12);

const makeDefaultTuple = <X, Y = number>(x: X, y: Y): [X, Y] => {
  console.log([x, y]);
  return [x, y];
};
const mDT1 = makeDefaultTuple<string | null, string>("123", "1");
const mDT2 = makeDefaultTuple<string | null>("123", 1);
// const mDT3 = makeDefaultTuple<"ten">("ten", 1);//error

/** 
  makeConstrainJs = 
  @function makeConstrain(obj)   

 */
const makeConstrain1 = (obj: { firstName: string; lastName: string }) => ({
  ...obj,
  fullname: ` ${obj.firstName} ${obj.lastName}`,
});

const mC1 = makeConstrain1({
  firstName: "vuong",
  lastName: "tran",
  // age: 30, //error notfound arg
});

const makeConstrain2 = <T extends { firstName: string; lastName: string }>(
  obj: T
) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const mC2 = makeConstrain2({
  firstName: "vuong",
  lastName: "tran",
  age: 30, //error notfound arg
});

// get name error

const addEmployee = (epy: object) => ({
  ...epy,
});
const aEpy1 = addEmployee({ name: "vuong", age: 30 });
// console.log(aEpy1.name) //error

const setEpt = <T extends object>(ept: T) => ({ ...ept });

const setEpt1 = setEpt({ name: "vuong", age: 30 });
console.log(setEpt1.name); //OK success
console.log(setEpt1.age); //OK success

const setNameAgeEPt = <T extends { name: string; age: number }>(person: T) => ({
  ...person,
});

// const setNameEPt1 = setNameEPt({ name: "vuong", age: "string" }); //error
const setNameEPt1 = setNameAgeEPt({
  name: "vuong",
  age: 30,
  male: true,
});

// interface generics
interface Resource<T> {
  uid: number;
  name: string;
  data: T;
}

const rsUser: Resource<string> = {
  uid: 1,
  name: "User",
  data: "Vuong",
};

const rsMovie: Resource<string[]> = {
  uid: 2,
  name: "Movie",
  data: ["batman", "the walking dead"],
};

const rsAge: Resource<number[]> = {
  uid: 2,
  name: "age",
  data: [12, 30, 41, 79],
};
