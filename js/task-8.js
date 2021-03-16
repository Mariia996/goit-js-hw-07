const inputRef = document.querySelector('#controls > input');
const buttonRender = document.querySelector('#controls [data-action="render"]');
const buttonDestroy = document.querySelector('#controls [data-action="destroy"]');
const boxesList = document.getElementById('boxes');

buttonRender.addEventListener('click', onBtnRender);
buttonDestroy.addEventListener('click', onBtnDestroy);

function onBtnRender() {
    const inputRenderResult = +inputRef.value -1;
    createBoxes(inputRenderResult);
}

function getRandom(min, max){
    return Math.ceil(Math.random() * (max - min) + min);
}

function createBoxes(amount) {
    console.log(amount);
    let width = 30;
    let height = 30;
    const arrayItems = [];

    for (let i = 0; i <= amount; i += 1) {
        const boxesItem = document.createElement('div');
        boxesItem.style.width = `${width}px`;
        boxesItem.style.height = `${height}px`;
        boxesItem.style.backgroundColor = 'red';

        boxesItem.style.width = `${width + 10 * i}px`;
        boxesItem.style.height = `${height + 10 * i}px`;
        boxesItem.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;


        arrayItems.push(boxesItem);
        console.log(boxesItem);
    }
    boxesList.append(...arrayItems);
}

function onBtnDestroy() {
    boxesList.innerHTML = '';
}