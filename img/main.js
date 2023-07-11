const resultElement = document.getElementById('result')
console.log(resultElement.textContent)
const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const submitBtn = document.getElementById("submit")
const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const multiplyBtn = document.getElementById("multiply")
const subtractBtn = document.getElementById("subtract")
const degreeBtn = document.getElementById("degree")
const cosBtn = document.getElementById("cos")
let action

plusBtn.onclick = function(){
action = "+"
}

minusBtn.onclick = function(){
  action = "-"
}

multiplyBtn.onclick = function() {
  action = "*"
}
subtractBtn.onclick = function() {
  action = "/"
}
degreeBtn.onclick = function(){
  action = "a^b"
}
cosBtn.onclick = function(){
  action = "cos"
}


submitBtn.onclick = function (){
  if(action == "+"){
    const sum = Number( input1.value) + Number( input2.value)
    resultElement.textContent = sum
  }
  if(action == "-" ){
   const sub = Number(input1.value) - Number(input2.value)
   resultElement.textContent = sub
  }
 if(action == "*"){
  const mul =  Number(input1.value) * Number(input2.value)
  resultElement.textContent = mul
 }
 if(action == "/"){
  const subtr = Number(input1.value)/Number(input2.value)
  resultElement.textContent = subtr
 }
 if (action =="a^b"){
 const x = Math.pow(Number(input1.value),Number(input2.value))
}
 if(action == "cos"){
  const cos = Math.

cos(Number(input1.value))
 }

//const result = computeNumbersWithAction(input1,input2,action)
//console.log(result)
}

let age = 42
let string = '42'
console.log(age===string)