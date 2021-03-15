const inputValidationRef = document.getElementById('validation-input');

inputValidationRef.addEventListener('blur', handleValidationInput);
inputValidationRef.addEventListener('input', onDefaultStyle);

    function handleValidationInput(event) {
        const length = +this.dataset.length;

        const currentTargetValueLength = event.currentTarget.value.length;

        if (currentTargetValueLength === length) {

            inputValidationRef.classList.add('valid');
            inputValidationRef.classList.remove('invalid');
        } else {

            inputValidationRef.classList.add('invalid');
            inputValidationRef.classList.remove('valid');
        }
}