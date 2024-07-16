let target = document.getElementById('change');
let christmas = document.getElementById('change2');


target.addEventListener('click', function(){
    target.style.color = 'green';
    christmas.style.color = 'red';
})





christmas.addEventListener('click', function(){
    target.style.color = 'red';
    christmas.style.color = 'green';
})





// h1.addEventListener('click', function(){
//     h2.style.color = "green"
//     h1.style.color = "red"
// })
// h1.addEventListener('click', function(){
//     h1.style.color = "red"
//     h2.style.color = "green"
// })