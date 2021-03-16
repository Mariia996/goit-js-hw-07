const inputValidationRef = document.getElementById('validation-input');
console.log(inputValidationRef);
inputValidationRef.addEventListener('blur', handleValidationInput);
inputValidationRef.addEventListener('input', onDefaultStyle);

    function handleValidationInput(event) {
        const length = +inputValidationRef.dataset.length;
        const currentTargetValueLength = event.currentTarget.value.length;
        console.log(length);
        console.log(currentTargetValueLength);

        if (currentTargetValueLength === length) {

            inputValidationRef.classList.add('valid');
            inputValidationRef.classList.remove('invalid');
        } else {

            inputValidationRef.classList.add('invalid');
            inputValidationRef.classList.remove('valid');
        }
}

function onDefaultStyle() {
    inputValidationRef.classList.remove('valid', 'invalid');
}