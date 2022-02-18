"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var last = function (array) {
    console.log(array[array.length - 1]);
    return array[array.length - 1];
};
var l1 = last([1, 2, 3]);
// const l2 = last(["a", "b"]); //error
var lastT = function (array) { return array[array.length - 1]; };
var l3 = lastT([1, 2, 3]);
var l4 = lastT(["a", "b", "c"]);
var l5 = lastT(["a", "c" /* 1 */]);
var makeA = function (x) { return [x]; };
var m1 = makeA(1);
var m2 = makeA("abc");
var makeXY = function (x, y) { return [x, y]; };
var m3 = makeXY("a", "b");
var m4 = makeXY("a", 3);
var makeTuple = function (x, y) {
    console.log([x, y]);
    return [x, y];
};
var mT1 = makeTuple("a", 1);
var mT2 = makeTuple(2, 1);
var mT3 = makeTuple("abc", 12);
var makeDefaultTuple = function (x, y) {
    console.log([x, y]);
    return [x, y];
};
var mDT1 = makeDefaultTuple("123", "1");
var mDT2 = makeDefaultTuple("123", 1);
// const mDT3 = makeDefaultTuple<"ten">("ten", 1);//error
/**
  makeConstrainJs =
  @function makeConstrain(obj)

 */
var makeConstrain1 = function (obj) { return (__assign(__assign({}, obj), { fullname: " " + obj.firstName + " " + obj.lastName })); };
var mC1 = makeConstrain1({
    firstName: "vuong",
    lastName: "tran"
});
var makeConstrain2 = function (obj) { return (__assign(__assign({}, obj), { fullName: obj.firstName + " " + obj.lastName })); };
var mC2 = makeConstrain2({
    firstName: "vuong",
    lastName: "tran",
    age: 30
});
// get name error
var addEmployee = function (epy) { return (__assign({}, epy)); };
var aEpy1 = addEmployee({ name: "vuong", age: 30 });
// console.log(aEpy1.name) //error
var setEpt = function (ept) { return (__assign({}, ept)); };
var setEpt1 = setEpt({ name: "vuong", age: 30 });
console.log(setEpt1.name); //OK success
console.log(setEpt1.age); //OK success
var setNameAgeEPt = function (person) { return (__assign({}, person)); };
// const setNameEPt1 = setNameEPt({ name: "vuong", age: "string" }); //error
var setNameEPt1 = setNameAgeEPt({
    name: "vuong",
    age: 30,
    male: true
});
var rsUser = {
    uid: 1,
    name: "User",
    data: "Vuong"
};
var rsMovie = {
    uid: 2,
    name: "Movie",
    data: ["batman", "the walking dead"]
};
var rsAge = {
    uid: 2,
    name: "age",
    data: [12, 30, 41, 79]
};
