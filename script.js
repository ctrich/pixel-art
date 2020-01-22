
createGrid(16);

let draw = false;

const btnClear = document.querySelector('.btn');


btnClear.addEventListener('click', clearGrid);

document.body.addEventListener('mousedown', () => draw = true);
document.body.addEventListener('mouseup', () => draw = false);

function createGrid(size) {
	let container = document.querySelector('.container');
	for (let i =0; i<size; i++) {
		let div = document.createElement('div');
		div.classList.add('grid-block');
		container.appendChild(div);

		for (let j=0; j< size; j++) {
			let divBlock = document.createElement('div');
			divBlock.classList.add('grid-col');
			div.appendChild(divBlock);
		}
	}
	addEvents();
}

function addEvents() {
	const divs = document.querySelectorAll('.grid-col');
	divs.forEach(div => div.addEventListener('mouseenter', changeColor));
	divs.forEach(div => div.addEventListener('mousedown', function() {
	this.classList.add('change-color');
	}));
}

function changeColor() {
	if (draw) {
		this.classList.add('change-color');
	}
}

function clearGrid() {
	let childDiv = document.querySelectorAll('.grid-block');
	childDiv.forEach(div => div.parentNode.removeChild(div));
	let newSize = prompt('What size would you like the grid?');
	createGrid(newSize);
}


