const money =150;
const active = true;
let food;
if (money > 100) {
    food= 'boryani';
}
else{
    food ='alur vorta';
}

// ternary:
// condition ? true value : false value
let food = money > 100 ? 'biryani' : 'alur vorta';

if (active === true){
    const cssClass = 'active'
}
else{
    cssClass ='inactive'
}

const cssClass = active ? 'active' : 'inactive';
// function call shortcut alternative 
active ? displayUser() : hideUser()

// 
active && displayUser()

// 
const x = active && 5;
const y = active || 5;

// string to string 
const number = +'45';
//  num ber to string
const numText = 45 + '';







