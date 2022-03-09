class  Calculator{
    constructor(previousOperandTextELement, currentOperandTextELement){
    this.previousOperandTextELement = previousOperandTextELement
    this.currentOperandTextELement = currentOperandTextELement
    this.clear()
}

clear(){
this.currentOperand = ''
this.previousOperand = ''
this.operation = undefined
}

delete(){
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
}

appendNumber(number){
    if(number === '.' && this.currentOperand.include('.'))return
this.currentOperand = this.currentOperand.toString() + number.toString()
}

chooseOperation(operation){
    if(this.currentOperand === '')return
    if(this.previousOperand !== ""){
        this.compute()
    }
this.operation = operation
this.previousOperand = this.currentOperand
this.currentOperand = ''
}

compute(){
let computation 
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if(isNaN(prev)|| isNaN(current)) return
    switch(this.operation){
        case "+":
        computation = prev + current
        break
        case "-":
        computation = prev - current
        break
        case "*":
        computation = prev * current
        break
        case "÷":
        computation = prev / current
        break
        default:
            return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
}

updateDisplay(){
this.currentOperandaTextElement.innerText = this.currentOperand
this.previousOperandTextELement = this.previousOperand
this.currentOperand = ''
}
}
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButtons = document.querySelectorAll('[data-delete]')
const allClearButtons = document.querySelectorAll('[data-all-clear]')
const previousOperandTextELement = document.querySelectorAll('[data-previous-operand]')
const currentOperandTextELement = document.querySelectorAll('[data-current-operand]')

const calculator = new Calculator(previousOperandTextELement, currentOperandTextELement)

numberButtons.forEach(button => {
    button.addEventListener('click', () =>{
        Calculator.appendNumber(button.innerText)
        Calculator.updateDisplay()
    })
})
operationButtons.forEach(button => {
    button.addEventListener('click', () =>{
        Calculator.chooseOperation(button.innerText)
        Calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButtons.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})
deleteButtons.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})