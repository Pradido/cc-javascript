let firstNum=document.getElementsByTagName('input')[0]
let secondNum=document.getElementsByTagName('input')[1]
let submit=document.getElementsByClassName('div')[0].children[3]
let answer=document.getElementsByClassName('div')[0].children[4]

submit.addEventListener('click',function(){
    // console.log(secondNum)
    sum= Number(firstNum.value) + Number(secondNum.value);
    answer.textContent='Answer: '+ sum;
})
console.log(answer)