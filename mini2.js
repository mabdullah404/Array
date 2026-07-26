
//Mini Project — Course Manager
/**
 * ধাপে ধাপে করো:
slice() দিয়ে "CSS" থেকে "React" পর্যন্ত একটি নতুন Array তৈরি করো।
Original Array থেকে "CSS" Remove করো।
"Node.js"-এর আগে "MongoDB" যোগ করো।
পুরো Array-কে " -> " দিয়ে Join করে Print করো।
 */


const courses = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

const NewCourses = courses.slice(1 , 4);
console.log(NewCourses);

courses.splice(1,1);
console.log(courses);

courses.splice(3,0, "MongoDB");
console.log(courses);

console.log(courses.join(" → "));

///////////////

const fruits = ["Apple", "Mango", "Orange", "Banana"];
const result = fruits.splice(2, 1, "Grapes", "Lemon"); 
console.log(result); 
console.log(fruits); 



const numbers = [10, 20, 30, 40, 50];
const removed = numbers.splice(1, 2, 100, 200, 300); // splice(startIndex, deleteCount, item1, item2, ...)
console.log(removed); //  remove 20, 30 
console.log(numbers); //  40, 50, 100, 200, 300