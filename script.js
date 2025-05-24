const artboard = document.getElementById('artboard');
const colorPicker = document.getElementById('colorPicker');
const shapeTypeSelector = document.getElementById('shapeType');

const FADE_DURATION = 2000;
const LINGER_DURATION = 1000;

artboard.addEventListener('click', function(event) {
    const rect = artboard.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    createShape(x, y);
});

function createShape(x, y) {
    const shapeElement = document.createElement('div');
    shapeElement.classList.add('shape');

    const selectedColor = colorPicker.value;
    const selectedShape = shapeTypeSelector.value;

    const size = Math.random() * 30 + 20;

    shapeElement.style.width = `${size}px`;
    shapeElement.style.height = `${size}px`;
    shapeElement.style.backgroundColor = selectedColor;

    shapeElement.style.left = `${x - size / 2}px`;
    shapeElement.style.top = `${y - size / 2}px`;

    if (selectedShape === 'circle') {
        shapeElement.classList.add('circle');
    } else if (selectedShape === 'square') {
        shapeElement.classList.add('square');
    } else if (selectedShape === 'triangle') {
        shapeElement.classList.add('triangle');
        shapeElement.style.width = '0';
        shapeElement.style.height = '0';
        shapeElement.style.backgroundColor = 'transparent';
        shapeElement.style.borderLeft = `${size / 2}px solid transparent`;
        shapeElement.style.borderRight = `${size / 2}px solid transparent`;
        shapeElement.style.borderBottom = `${size}px solid ${selectedColor}`;
        shapeElement.style.top = `${y - size}px`;
    }

    artboard.appendChild(shapeElement);

    setTimeout(() => {
        shapeElement.classList.add('fade-out');
    }, LINGER_DURATION);

    setTimeout(() => {
        if (shapeElement.parentNode) {
            artboard.removeChild(shapeElement);
        }
    }, LINGER_DURATION + FADE_DURATION);
}
