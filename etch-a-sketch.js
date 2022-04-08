let container = document.querySelector('#container');
let clearButton = document.querySelector('#clear');
let colorButton = document.querySelector('#color-button');
let rangeSlider = document.querySelector('#range');
let sliderLabel = document.querySelector('label');

let colorOptions = ['RGB', 'GRAY', 'BLACK'];

let erasing = false;
let colorSelection = 0;

colorButton.addEventListener('click', () => {
    if (colorSelection == 2) {
        colorSelection = 0;
        colorButton.textContent = colorOptions[colorSelection];
        return colorSelection;
    } else {
        colorSelection += 1;
        colorButton.textContent = colorOptions[colorSelection];
        return colorSelection;
    }
});

const clearScreen = () => {
    for (let i = 0; i < container.children.length; i++) {
        container.children[i].style.cssText = 'background-color: rgb(255, 255, 255);';
    }
}

const reset = () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

clearButton.addEventListener('click', () => {
    clearScreen();
});

rangeSlider.addEventListener('input', () => {
    sliderLabel.textContent = rangeSlider.value.toString();
});

rangeSlider.addEventListener('mouseup', () => {
    reset();
    createDivs(rangeSlider.value);
});

window.addEventListener('keydown', (e) => {
    if (e.key == 'e') {
        erasing = true;
    }
})

window.addEventListener('keyup', (e) => {
    if (e.key == 'e') {
        erasing = false;
    }
});

const randomColor = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const createDivs = (num) => {
    container.chidren
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    for (let i = 0; i < num**2; i++){    
        let newDiv = document.createElement('div');
        newDiv.style.cssText = 'background-color: rgb(255, 255, 255);';
        newDiv.addEventListener('mouseover', () => {
            if (erasing) {
                newDiv.style.cssText = 'background-color: rgb(255, 255, 255)';
            } else {
                switch(colorSelection) {
                    case 0:
                        newDiv.style.cssText = 'background-color: rgb(0, 0, 0);';
                        break;
                    case 1:
                        newDiv.style.cssText = `background-color: ${randomColor()}`;
                        break;
                    case 2:
                        currentColor = newDiv.style.backgroundColor;
                        let extractColor = (/\d{1,3}/);
                        newColor = Math.floor(parseInt(extractColor.exec(currentColor)[0]) * 0.9);
                        newColor == 0 ? newDiv.style.cssText = 'background-color: rgb(255, 255, 255);' :
                        newDiv.style.cssText = `background-color: rgb(${newColor}, ${newColor}, ${newColor})`
                        break; 
                }
            }
        });
        container.appendChild(newDiv);
    }
}

createDivs(24);

