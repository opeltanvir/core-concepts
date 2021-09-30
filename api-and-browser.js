// Json
const person = {
    name : 'Abdul'
    // age:25
};

// json convert and forth
const data = JSON.stringify(person);
const dataParsed = JSON.parse(data);
// console.log(dataParsed.name)

// locals storage
localStorage.setItem('userId',1234);
const userId = localStorage.getItem('userId');
console.log(userId);
localStorage.setItem('person',Json.stringify(person));
const storedPerson = localStorage.getItem('person');
const parsedPerson = Json.parse(storedPerson);
console.log(parsedPerson.age);

const keys = Object.keys(parsedPerson);
console.log(keys);

const values = Object.values(parsedPerson);
console.log(values);




// Api
// fetch('url')
// .then(res => res.json())
// .then(data => console.log(data));