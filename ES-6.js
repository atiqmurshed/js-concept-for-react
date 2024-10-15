const number = [30, 20, 49, 305, 560];
const student = {
    name: 'shumit shaha',
    age: 50,
    height: 40,
    location: ['dhaka bonani uttora', 'baddah kkoch khet'],
    profession: 'codding',
}

//1..template string;
const about = `My name is ${student.name} age of ${student.age} has number ${student[2]} also like array 
index ${student.location[1]}`;
console.log(about);

//2. arrow function;
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThreeNumber = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const add = num1 + num2;
    return add;
}


//3.spread operator;
const numbers = [10, 20, 30, 40, 50, 60, 70];
const newNumber = [...numbers]
//....create a new array from an older array and add an Element;
const currentNumbers = [...numbers, 111];

numbers.push(80);
numbers.push(80);
numbers.push(80);
// console.log(newNumber);
// console.log(numbers);
console.log(newNumber);
console.log(numbers);
console.log(currentNumbers);