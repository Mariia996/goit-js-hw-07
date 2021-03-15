const counterValueRef = document.getElementById('value');
let counterValue = 0;


const decrementBtnRef = document.querySelector('#counter [data-action="decrement"]');
const incrementBtnRef = document.querySelector('#counter [data-action="increment"]');

decrementBtnRef.addEventListener('click', handleDecrementAction);
incrementBtnRef.addEventListener('click', handleIncrementAction);

function handleDecrementAction() {
   counterValue -= 1;
   counterValueRef.textContent = counterValue;
   return counterValue;
}

function handleIncrementAction() {
   counterValue += 1;
   counterValueRef.textContent = counterValue;
   return counterValue;
}


