const container = document.getElementById('container');
const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
  'white',
];
const SQUARES = 500;
const reset = document.getElementById('reset');

for (let i = 0; i <= SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('touchstart', () => setColor(square));

  // square.addEventListener('mouseout', () => removeColor(square)); --> Auto remove colors

  reset.addEventListener('click', () => {
    removeColor(square);
  });

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 3px ${color}`;
}

function removeColor(element) {
  element.style.background = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
