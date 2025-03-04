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
      console.log(event.target.innerText);
     
    });
  });
  
  
/*-------------------------------- Functions --------------------------------*/
function displayText() {
    displayElement.innerHTML = event.target.innerHTML
}
