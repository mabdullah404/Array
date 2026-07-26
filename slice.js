const fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes"];
const NewFruits = fruits.slice(1,4); //start → কোথা থেকে শুরু করবে। end → কোথায় থামবে (এই Index অন্তর্ভুক্ত হবে না)।
console.log(NewFruits) ;

const numbers = [10,20,30,40,50];
console.log(numbers.slice(2)); //২ থেকে শেষ পর্যন্ত।

/**
 * কখন কোনটা ব্যবহার করব?
Situation	Method
কিছু Copy করতে	slice()
কিছু Delete করতে	splice()
কিছু Replace করতে	splice()
কিছু Insert করতে	splice()
Array → String	join()
 */