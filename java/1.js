console.log("Hello, World!");
console.log("Welcome to learning JavaScript.");
 let name="pawan";
console.log("My name is " + name);
let age = 20;
age > 18 ? console.log("Adult") : console.log("Minor");
let enteredName = prompt("Enter your name: ");
console.log("Thank you for entering your name: " + enteredName);
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}
while (age < 25) {
    console.log("You are still young!");
    age++;
}
do {
    console.log("This will run at least once.");
}while (age < 30);
for ( let i of enteredName) {
    console.log(i);
}
let str = "JavaScript";
console.log(str.length);
console.log(str.toUpperCase());
let arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr);
arr.pop(); 
arr.splice(2, 1, 10);
console.log(arr);
concatArr = arr.concat([7, 8, 9]);
console.log(concatArr);
let obj = { name: "Alice", age: 30 };
console.log(obj);
obj.city = "New York";
console.log(obj);
delete obj.age;
console.log(obj);
function greet(person) {
    return "Hello, " + person + "!";
}
console.log(greet("Bob"));
const sum = (a, b) => {
    return a + b;
}
console.log(sum(5, 10));
arr.forEach(function printvalue(value) {
    console.log(value);
});  
let doubledArr = arr.map((value) => {
    return value * 2;
});
console.log(doubledArr);

let evenNumbers = arr.filter((value) => {
    return value % 2 === 0;
});
console.log(evenNumbers);
let arr2 = [1, 2, 3, 4, 5];
let total = arr2.reduce((prev, currentValue) => {
    return prev + currentValue;
});
console.log(total);