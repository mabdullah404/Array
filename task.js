// Task 1
const colors = ["Red", "Blue", "Green", "Black"];
console.log(colors[0]);
console.log(colors[3]);

//Task 2

const language = ["html", "css", "javascript", "java", "python"];
console.log(language.length);
console.log(language[2]);

//Task 3

const numbers = [10, 20, 30, 40, 50];
numbers[2] = 35;
console.log(numbers);

//Task 4

const fruits = ["Apple", "Mango"];
fruits.push("Orange");
fruits.pop();
console.log(fruits);

//Mini Challenge

const courses = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

console.log("========== Course List ==========\n");

for(let i =0 ; i<courses.length; i++){
    console.log(`
        ${i+1} . ${courses[i]}
        `) ;
}
console.log(`\nTotal Courses : ${courses.length}`);