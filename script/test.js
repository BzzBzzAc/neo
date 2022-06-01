let sum = document.querySelectorAll('.sum');
let calculateBtn = document.querySelector('.calculate');
let totalSum = document.querySelector('.total-sum');

let sumArray = [];

// calculateBtn.onclick = function(){
//     let sum = 0
//     for(let i = 0; i < sumArray.length; i++){
//         sum += sumArray[i]
//     }
//     totalSum.innerHTML = sum
// }

let inp = document.querySelector('.inp');
let sumTwo = document.querySelector('.sumTwo');
calculateBtn.onclick = function(){
    sumTwo.innerHTML = inp.value;
    sumArray.push(inp.value)
    console.log(sumArray)
}


// let div = document.createElement('div')
// let elemOne = document.createElement('tr');
// let elemTwo = document.createElement('td');
// let elemTwo1 = document.createElement('td');
// let elemTwo2 = document.createElement('td');
// let elemThree = document.createElement('td.newSum');
// document.table.appendChild(elemOne, elemTwo)
// div.innerHTML = 'HELLO'
