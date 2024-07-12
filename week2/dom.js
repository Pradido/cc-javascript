// let newHeading = document.getElementById('heading');

// newHeading.innerHTML = 'welcome to dom manipulation';
// console.log(newHeading);

// let list = document.getElementById('list');
// console.log(list.textContent);

let subHeading = document.getElementsByClassName('subHeading');
for (let i = 0; i <subHeading.length; i++){
    subHeading[i].innerHTML = 'JavaScript is easy';
}


let paragraph = document.getElementsByClassName('paragraph');
for (let i = 0; i <paragraph.length; i++){
    paragraph[i].innerHTML = 'No JavaScript is easy';
}


let h2 = document.getElementsByTagName('h2');
for (let i = 0; i <h2.length; i++){
    h2[i].innerHTML = 'Javascript go whine you, but no panic';
}