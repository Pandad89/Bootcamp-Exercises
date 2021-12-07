const arr1 = [];
const arr2 = [1, 2, 3, 4];
const obj = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
}
//1
for (let i = 0; i <= 99; i++) {
    arr1.push([i]);
} console.log(arr1.fill("hello", 0, 100))
//2
let arr3 = Array.from(Array(101).keys());
console.log(arr3.slice(1));
//3
let objToArr = Object.values(obj);
console.log(objToArr);
//4
console.log(Object.assign({}, arr2));
//5
console.log(typeof(arr1));
//6a
let newArr = arr2.slice();
newArr.push(5);
console.log(arr2);
console.log(newArr);
//6b
let newArr2 = arr1;
newArr2.push(1,2,3,4);
console.log(newArr2);
console.log(arr1);