// const user = {
//     firstName : "Ilham",
//     lastName : "Kusuma", 
//     age : 19,
//     menikah : false,
//     'desa' : 'susukanlebak',
// };

// // delete user.firstName;
// user['desa'] = "susukanagung";
// delete user['desa'];

// console.log("nama saya " + user.firstName + " nama belakang saya " + user.lastName + " saya berumur " + user.age + " dan saya belum menikah " + user.menikah);

// console.log(user)
// console.log(user['desa']);

// const restaurant = {
//     name : "ibu haji",
//     city : "cirebon",
//     "favorite drink" : "es campur",
//     "favorite food" : "nasi jamblang",
//     isVegan : false,
// }

// const name = restaurant.name;
// const favoriteDrink = restaurant["favorite drink"];

// let myArray = ['cokelat', 98, 90, 87, 'baso'];
// myArray.push('javascript');
// myArray.pop();
// console.log(myArray[1]);
// console.log(myArray);

// const evenNumber = [];
// for(let i = 1; i <= 100; i++){
//     if (i % 2 === 0){
//         evenNumber.push(i);
//     }
// }

// console.log(evenNumber);

// let a = 9;
// let b = 5;
// function minimal(a, b){
//     if (a > b){
//         return b;
//     } else if(a < b){
//         return a;
//     } else if(a === b){
//         return a;
//     }
// }
// console.log(minimal(4, 4));

// function power(a,b) {
//     return a ** b;
// }
// console.log(power(7,3));

// document.writeln('<h1>ngentod</h1>');

// const popup = prompt("masukan nama kamu");
// console.log(popup);
// const ucapanSelamat = "hallo selmat malam";
// document.writeln(ucapanSelamat + " " + popup);




function increment() {
    document.getElementById('count').innerText++;

    if (document.getElementById('count').innerText == 7) {
        const hiddenMessage = document.createElement('h4');
        hiddenMessage.innerText = "selamat anda mendapatkan janda";
        const image = document.createElement('img');
        image.setAttribute('src','https://i.ibb.co/0V49VRZ/catto.jpg');
        const contents = document.querySelector('.contents');
        contents.appendChild(hiddenMessage).appendChild(image);
    } else if (document.getElementById('count').innerText == 10) {

        const hadiahSepuluh = document.createElement('h3');
        hadiahSepuluh.innerText = "selamat anda berhasil klik sepuluh kali";
        const imageSepuluh = document.createElement('img');
        imageSepuluh.setAttribute('src', 'data:image/jpeg;base64,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');
        const contents = document.querySelector('.contents');
        contents.appendChild(hadiahSepuluh).appendChild(imageSepuluh);
    } 
}


function welcome() {
    alert('sim salabim ');
    const contents = document.querySelector('.contents');
    contents.removeAttribute('hidden');
}

// document.getElementById('incrementButton').onclick = increment;
// document.body.onload = welcome;

window.addEventListener('load', welcome);
document.getElementById('incrementButton').addEventListener('click', increment);


