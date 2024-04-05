function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const input = document.querySelector('.input-number');
const boxesContainer = document.querySelector('#boxes');
    
createButton.addEventListener('click', () => {

  const amount = Number(input.value);

  if (amount < 1 || amount > 100) {
        
        alert('Please enter a number between 1 and 100');
        return;
      }
      createBoxes(amount);
      input.value = '';
    });

    destroyButton.addEventListener('click', () => {
      destroyBoxes();
    });

    function createBoxes(amount) {
      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxesContainer.appendChild(box);
      }
    }

    function destroyBoxes() {
      boxesContainer.innerHTML = '';
    }
