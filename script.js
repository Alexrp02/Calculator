let operand1 = "0" ;
let method ;
let operand2 = "0" ;

let methodSwitch = false;
let result = false ;
let operandSwitch = false ;

let display = "0" ;

const subscreen = document.getElementById("subscreen") ;

const clear = document.getElementById("clear") ;
    clear.addEventListener("click" , e => {
        subscreen.innerHTML = "0" ;
        display = "0" ;
        methodSwitch = false ;
        operand1 = "0" ;
        operand2 = "0" ;
    })

subscreen.innerHTML = display ;

const buttons = document.querySelectorAll(".button") ;
    buttons.forEach(button => {
        button.addEventListener("click", e => {
            if(button.classList.contains("operand") || button.id === "clear" || button.id === "equal")
                return ;
            if(display === "0" || result){
                display = button.innerHTML ;
                methodSwitch ? operand2 = button.innerHTML : operand1 = button.innerHTML ;
            }
            else {
                display += button.innerHTML ;
                methodSwitch ? operand2 += button.innerHTML : operand1 += button.innerHTML ;
            }
            subscreen.innerHTML = display ;
            result = false ;
            operandSwitch = false ;
        })
    })

const operands = document.querySelectorAll(".operand") ;
    operands.forEach (operand => {
        operand.addEventListener("click" , e => {
            if (methodSwitch){
                operand1 = operate(operand1, operand2, method) ;
                operand2 = "0" ;
            }
            if(operandSwitch) {
                return ;
            }
            methodSwitch = true ;
            result = false ;
            method = operand.innerHTML ;
            operandSwitch = true ;
            
            display += ` ${operand.innerHTML} ` ;
            subscreen.innerHTML = display ;
        })
    })

const equal = document.getElementById("equal") ;
    equal.addEventListener("click", e => {
        display = operate(operand1, operand2, method) ;
        operand1 = display ;
        operand2 = "0" ;
        subscreen.innerHTML =  display;
        result = true ;
        methodSwitch = false ;
    })


function operate (x, y, method) {
    switch (method) {
        case "+" :
            return add(x,y)
        case "-" :
            return substract(x,y)
        case "X" :
            return multiply(x,y)
        case "/" :
            return divide(x,y)
    }
}

function add (x, y) {
    return Math.round((Number(x)+Number(y)) * 100000000) / 100000000
}

function substract (x, y) {
    return Math.round((Number(x)-Number(y)) * 100000000) / 100000000
}

function multiply (x, y) {
    return Math.round((Number(x)*Number(y)) * 100000000) / 100000000
}

function divide (x, y) {
    return Math.round((Number(x)/Number(y)) * 100000000) / 100000000
}