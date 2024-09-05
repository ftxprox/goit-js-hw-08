function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.querySelector('#controls');
const contInputEl = document.querySelector('#controls input');
const btnCreateEl = document.querySelector('#controls button[data-create]');
const btnDestroyEl = document.querySelector('#controls button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

boxesEl.style.display = 'flex';
boxesEl.style.flexWrap = 'wrap';
boxesEl.style.flexBasis= 'auto';

btnCreateEl.addEventListener('click', () => {
  const numberIn = Number(contInputEl.value);
  if (numberIn >= 1 && numberIn <= 100) {
    createBoxes(numberIn);
  }
  contInputEl.value = '';
});

btnDestroyEl.addEventListener('click', () => {
  destroyBoxes();
});

function createBoxes(numberIn) {
  boxesEl.innerHTML = '';
  const boxes = [];
  let sizeBox = 30;

  for (let i = 0; i < numberIn; i++) {
    const boxDiv = document.createElement('div');
    boxDiv.style.width = `${sizeBox}px`;
    boxDiv.style.height = `${sizeBox}px`;
    boxDiv.style.backgroundColor = getRandomHexColor();
    boxDiv.style.margin = '44px';

    boxes.push(boxDiv);

    sizeBox += 10;
  }

  boxesEl.append(...boxes);
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}