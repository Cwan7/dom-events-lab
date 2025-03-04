/*-------------------------------- Constants --------------------------------*/
const buttonsElement = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const displayElement = document.querySelector('.display')



/*-------------------------------- Variables --------------------------------*/
let number1 = '';
let number2 = '';
let operator = '';

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttonsElement.forEach((button) => {
    button.addEventListener('click', (event) => {
        let buttonText = button.innerHTML
        let num1 = Number(number1);
        let num2 = Number(number2);

        if (button.classList.contains('number')) {
            if (operator === '') {
                number1 = number1 + buttonText
                displayElement.innerHTML = number1
            
            } else {
                number2 = number2 + buttonText;
                displayElement.innerHTML = number1 + operator+ number2;
            }
        } 

        if (button.classList.contains('operator') && buttonText !== 'C') {
                operator = buttonText; 
                displayElement.innerHTML = number1 + buttonText                
        }
        if (buttonText === 'C') {
            clearAll();
        }
        if (button.classList.contains('equals') && number1 !== '' && number2 !== '' && operator !== '') {           
            let result = ''
            result = result.slice(0,10);
            if (operator === '+') {
                result = num1 + num2;
                displayElement.innerHTML = result
            }
            if (operator === '-') {
                result = num1 - num2;
                displayElement.innerHTML = result;
            }
            if (operator === '/') {
                result = num1 / num2;
                displayElement.innerHTML = result.toFixed(10);
            }
            if (operator === '*') {
                result = num1 * num2;
                displayElement.innerHTML = result;
            }
        }

    });
});
  

/*-------------------------------- Functions --------------------------------*/
function clearAll (){
    number1 = '';
    number2 = '';
    operator = '';
    displayElement.innerHTML = 0
}

