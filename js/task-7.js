const inputRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');

inputRef.addEventListener('input', rangeHandler);

function rangeHandler(event) {
    textRef.style.fontSize = `${event.currentTarget.value}px`;
}