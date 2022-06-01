let myHours = document.querySelectorAll('.hours');
let myPay = document.querySelectorAll('.pay');
let myTotalHours = document.querySelector('.tHours');
let myTotalPay = document.querySelector('.tPay');

let calcBtn = document.querySelector('.calc-btn');
let sel = 18
let arrayHours = []
let arrayPay = []


calcBtn.onclick = function(){
    let outHours
    let sat = 6*24
    for(let i = 0; i < myHours.length; i++){

        for(let j = 0; j < myPay.length; j++){
            myPay[i].innerHTML = myHours[i].innerHTML * sel
        }
        outHours = myHours[i].innerHTML
        arrayHours.push(outHours)
        function getSum(total, num){
            return total + parseFloat(num);
        }
        myTotalHours.innerHTML = arrayHours.reduce(getSum, 0)
        myTotalPay.innerHTML = myTotalHours.innerHTML * sel + sat
    }
}

