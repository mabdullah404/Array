const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express"];
const ai = ["Python", "Machine Learning"];

// Step 1
console.log(frontend.concat(backend));
// Step 2
const allCourses =  frontend.concat(backend,ai);
console.log(allCourses);

// Step 3
const reverse = [...allCourses].reverse();
console.log(reverse);
console.log(allCourses);

// Step 4
console.log(allCourses.join(" | "))