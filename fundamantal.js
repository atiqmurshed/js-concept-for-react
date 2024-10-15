//1. how to declare a variable using let and const ;
const fatherName = 'arnod';
let session  = 'rainy';
session = 'winter';

//2. 6 Basic condition >, <, ===, !==, <=, >=
// multiple condition: and-&& , OR|| ;
 
if(fatherName === 'arnod' || session === 'rainy'){

}

else if(fatherName === 'arnod'){

}

else { 

}

//3. array  declare; 
//index;
//array length, push; 

const number = [30, 20, 49, 305, 560];
number[0] = 56;
//4. for Loop;

for(let i = 0 ; i < number.length; i++){
    const num = number[i];
    console.log(num);
}


//5. function;

function multiply (num1, num2){
    const result = num1 * num2;
    return result;
    // console.log(result);
}
// multiply(20, 49);
const mult = multiply(12, 58);
console.log(mult);




//6. object;
const student = {
    name: 'shumit shaha',
    age: 50,
    height: 40,
    profession: 'codding',
}

const myVariable = 'age';

// console.log(student.name);
console.log(student.age); //direct access property
console.log(student['age']); // access via string

console.log(student[myVariable]); //access via property name in variable;


