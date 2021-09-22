const board = document.querySelector('#board');
const SQUARES_NUMBER = 500;

const colors = ['#57F500', '#7100D6','#E93DEB','#0BC9D6', '#00FAB6','#FA6101','#FA0065'];

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    });

    square.addEventListener('mouseleave', () => {
        removeColor(square);
    });

    board.append(square);
}


function setColor (element) {
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

function removeColor (element) {
    element.style.backgroundColor = '#ffffff';
    element.style.boxShadow = `0 0 2px #ffffff`;
};

function getRandomColor () {
   const index = Math.floor(Math.random() * colors.length);
   return colors[index];
};