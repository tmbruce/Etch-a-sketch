let container = document.querySelector('#container');

const createDivs = (num) => {
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    for (let i = 0; i < num**2; i++){    
        let newDiv = document.createElement('div');
        newDiv.addEventListener('mouseover', () => {
            newDiv.style.cssText = 'background-color: black;';
        });
        container.appendChild(newDiv);
    }
}

createDivs(50);

