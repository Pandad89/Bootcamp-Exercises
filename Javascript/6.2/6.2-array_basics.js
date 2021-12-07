const people = ["Greg","Mary", "Devon", "James"];

//1
for (let i = 0; i <= 3; i++) {
    console.log(people[i]);
}
//2
people.shift();
console.log(people);
//3
people.pop();
console.log(people);
//4
people.unshift("Matt");
console.log(people);
// 5
people.push("Adam");
console.log(people);
// 6
for (let n = 0; n <= 1; n++) {
    console.log(people[n]);
}
// 7
console.log(people.slice(2));
// 8
console.log(people.indexOf("Mary"));
// 9
console.log(people.indexOf("Foo"));
// 10
people.splice(0, 1, "Greg");
people.splice(3, 1, "James");
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);
// 11
let withBob = people.concat("Bob");
console.log(withBob);