
let count = 0;
const counter = document.getElementById('clickCount');
const field = document.getElementById('starField');

function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = Math.random() * window.innerWidth + 'px';
  star.addEventListener('click', () => {
    count++;
    counter.textContent = 'Очки: ' + count;
    field.removeChild(star);
  });
  field.appendChild(star);
  setTimeout(() => {
    if (field.contains(star)) field.removeChild(star);
  }, 4000);
}

setInterval(createStar, 1000);
