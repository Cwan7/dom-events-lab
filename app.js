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
        console.log(event.target.innerHTML);
        if (button.classList.contains('number')) {
            if (operator === '') {
                number1 = buttonText;
                displayElement.innerHTML = number1;
                console.log(number1)
            } else {
                number2 = buttonText;
                displayElement.innerHTML = number2;
            }
        } else if (button.classList.contains ===){

        }

}

);
  });
  
  
/*-------------------------------- Functions --------------------------------*/
function displayText() {
    displayElement.innerHTML = event.target.innerHTML
}
