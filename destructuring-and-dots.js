//  array destructuring
const numbers =[44, 19, 100, 587, 4];
// const x = numbers[0];
// const y = numbers [1];
// const [x,y] = [54,99]
const [x,y] = numbers;
// console.log(x,y);

function boxify(num1){
    return [num1, num1+ 5];
}
 const [box1, box2] = boxify(8);
//  console.log(box1,box2);

//  object destructuring 

const {name, age} = { id: 2, money:34, name: 'apple',age:25}
// const {money} = person;
// console.log(money);

// create object shortcut
const one = 25;
const two = 35;
const obj = {x:x, y:y};
const obj2 = {one, two};
console.log(obj2)

// new array using three dots
const newNumbers = [...numbers,56];
