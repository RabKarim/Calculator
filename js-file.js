let currentInput = document.querySelector("#currentInput")
let previousInput = document.querySelector("#previousInput")
let allClear = document.querySelector("#clear")
let digit = document.querySelectorAll(".digit")
let operator = document.querySelectorAll(".operator")
let digitArray = Array.from(digit)
let operatorArray = Array.from(operator)
let operatorBool = true

for (let i = 0; i< digitArray.length; i++) {
    digitArray[i].addEventListener("click", function(e){
        currentInput.textContent += digitArray[i].textContent
    })
}
allClear.addEventListener("click", () =>{
    currentInput.textContent = ""
    previousInput.textContent = "0"
    operatorBool = true
})

for(let index = 0; index<operatorArray.length; index++){
    operatorArray[index].addEventListener("click", () => {
        if (operatorBool == true){
        currentInput.textContent += " " + operatorArray[index].textContent + " "
        operatorBool = false
        }
        else {
            previousInput.textContent = currentInput.textContent
            currentInput.textContent = calculate()
            operatorBool = true
        }
        
        
        
    })
}







function calculate() {
    let split = String(currentInput.textContent).split(" ")
    let number1 = Number(split[0])
    let number2 = Number(split[2])
    
    switch(String(split[1])) {
        case "+":
            return number1 + number2
        case "-":
            return number1 - number2
        case "/":
            return Math.ceil(number1 / number2)
        case "x":
            return number1 * number2
    }

}
let equal = document.querySelector("#equal")
equal.addEventListener("click", function(e){
    previousInput.textContent = currentInput.textContent
    currentInput.textContent = calculate()
    operatorBool = true

})

let backSpace = document.querySelector("#backspace")
backSpace.addEventListener("click", () => {
    currentInput.textContent = currentInput.textContent.slice(0, -1)
    

})

