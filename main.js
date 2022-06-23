const user = {
    firstName : "Ilham",
    lastName : "Kusuma", 
    age : 19,
    menikah : false,
    'desa' : 'susukanlebak',
};

// delete user.firstName;
user['desa'] = "susukanagung";
delete user['desa'];

console.log("nama saya " + user.firstName + " nama belakang saya " + user.lastName + " saya berumur " + user.age + " dan saya belum menikah " + user.menikah);

console.log(user)
console.log(user['desa']);

const restaurant = {
    name : "ibu haji",
    city : "cirebon",
    "favorite drink" : "es campur",
    "favorite food" : "nasi jamblang",
    isVegan : false,
}

const name = restaurant.name;
const favoriteDrink = restaurant["favorite drink"];

let myArray = ['cokelat', 98, 90, 87, 'baso'];
myArray.push('javascript');
myArray.pop();
console.log(myArray[1]);
console.log(myArray);

const evenNumber = [];
for(let i = 1; i <= 100; i++){
    if (i % 2 === 0){
        evenNumber.push(i);
    }
}

console.log(evenNumber);

let a = 9;
let b = 5;
function minimal(a, b){
    if (a > b){
        return b;
    } else if(a < b){
        return a;
    } else if(a === b){
        return a;
    }
}
console.log(minimal(4, 4));

function power(a,b) {
    return a ** b;
}
console.log(power(7,3));

document.writeln('<h1>ngentod</h1>');

const popup = prompt("aku sayang kamu");
console.log(popup);