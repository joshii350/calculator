// init variables and screen
const s = document.getElementById('result')
let currInput = 0 // used to capture user input
let storedInput = 0 // used to store the existing user input when an operator is used
let lastOperator = '' // used to determine how the calculate function should work 
s.textContent = currInput // display input

// these two functions are used to update the screen and number input
function num(b) {
    return b.textContent
}

function updateInput(n) {
    return currInput = parseInt(currInput
        .toString()
        .split('')
        .concat(n)
        .join('')
    )
}

// this function is used to evaluate the equation based on operator, current input and stored input
function calculate() {

    if (lastOperator === 'plus') {
        currInput = storedInput + currInput
    }
    if (lastOperator === 'minus') {
        currInput = storedInput - currInput
    }
    if (lastOperator === 'product') {
        currInput = storedInput * currInput
    }
    if (lastOperator === 'divide') {
        currInput = storedInput / currInput
    }
    lastOperator = ''
    s.textContent = currInput
}

// gives functionality to all number buttons
const nums = document.querySelectorAll('.num')
nums.forEach((bu) => {
    bu.addEventListener('click', () => {
        updateInput(num(bu))
    s.textContent = currInput
})    
});

// give functionality to operators
const ops = document.querySelectorAll('.operator')
ops.forEach((bu) => {
    bu.addEventListener('click', () => {
        if (lastOperator != '') { // chain operators if you havn't pressed evaluate yet
            calculate()
        }
        lastOperator = bu.getAttribute('id')
        storedInput = parseInt(currInput)
        currInput = 0
    })
})

// give functionality to equal/evaluate
const eva = document.getElementById('equal')
eva.addEventListener('click', () => {
    calculate()
})