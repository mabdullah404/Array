/**
 * কাজ কী?

Original Array-এর ভিতর থেকেই

Delete করতে পারে
Add করতে পারে
Replace করতে পারে

অর্থাৎ

Original Array পরিবর্তন করে।
 */

const fruits = ["Apple", "Mango", "Orange", "Banana"];
fruits.splice(1, 2);
console.log(fruits);

const numbers = [33, 44, 66, 2, 4, 5, 7];
numbers.splice(4, 0, 22); // Add
console.log(numbers);

/**
 * কখন কোনটা ব্যবহার করব?
Situation	Method
কিছু Copy করতে	slice()
কিছু Delete করতে	splice()
কিছু Replace করতে	splice()
কিছু Insert করতে	splice()
Array → String	join()
 */