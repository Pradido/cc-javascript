// for (let count = 2; count <=3; count = count + 2){
//     console.log('Hello');
// }

// for (let count = 1; count <=5; count = count + 4){
//     console.log('Hi')
// }

// for (let count = 10; count >= 1; count = count -1){
//     console.log(count)
// }
// console.log('Happy New Year');

// let start = 1;
// while (start < 10){
//     console.log('This is a while loop');
//     start = start + 1;
// }

// let egg = 1;
// while (egg <13){
//     console.log('number of eggs');
//   egg = egg + 1;
// }



while (true){
    // INPUT
let number = prompt("Type in a number\nType 'close' to end the program");
let message = "";

if (number === 'close'  || number === 'close'){
    break;
}


//PROCESSING
if (number % 2 === 0){
    message = ('This is an even number.');
} else {
    message = 'This is an odd number';
}

// OUTPUT
alert(message);
}