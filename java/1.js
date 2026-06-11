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