function subtract() {
let firstNumber=document.getElementById('firstNumber')
let secondNumber=document.getElementById('secondNumber')

let result = firstNumber.value-secondNumber.value

let resultTag =document.getElementById('result')
resultTag.innerHTML=result
}