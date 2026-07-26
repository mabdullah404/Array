const courses = ["HTML", "CSS", "JavaScript"];

for (let i = 0; i < courses.length; i++) {
  console.log(courses[i]);
}

const fruits = ["Apple", "Mango", "Orange"];
for (fruit of fruits) {
  console.log(fruit);
}

const numbers = [10, 20, 30, 40];
for (let number of numbers) {
  console.log(number);
}

//
const colors = ["Red", "Blue", "Green", "Black"];
for (let color of colors) {
  console.log(color);
}

//sum

// let prices = [100, 250, 300, 150];
// let sum = 0;
// for (const price of prices) {
//   sum +=  price;
// }
// console.log(sum);

// Mini Challenge 3
const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
for (skill of skills){
    console.log(`I am learning ${skill}`);
}

// Mini Project — Student Marks Analyzer
let sum = 0 ;
const marks = [85, 72, 90, 65, 78];
for(let mark of marks){
    sum+=mark;
    if(mark>=80){
        console.log(mark);
    }
}
const average = sum/marks.length;
console.log("Avg" , average);

/**
 * 🎯 Mentor Tips
for Loop ব্যবহার করো যখন:
Index দরকার
নির্দিষ্ট সংখ্যক বার Loop চালাতে হবে
Step Control (i += 2) দরকার
for...of ব্যবহার করো যখন:
Array-এর Value নিয়ে কাজ করবে
Code ছোট ও পরিষ্কার রাখতে চাও
শুধু Data Process করতে হবে
 */