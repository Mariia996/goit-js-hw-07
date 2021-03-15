const inputRef = document.getElementById('name-input');
const nameLabelRef = document.getElementById('name-output');

inputRef.addEventListener('input', onInputChange);
const nameLabel = nameLabelRef.textContent;

function onInputChange(event) {

    if (event.currentTarget.value === '') {
        return nameLabelRef.textContent = nameLabel;
    } else {
       return nameLabelRef.textContent = event.currentTarget.value;
    }
}