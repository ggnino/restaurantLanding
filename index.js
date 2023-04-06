const headingElement = document.getElementById('home');
const menuElement = document.getElementById('menu');
const headingGroup = document.getElementById('hgroup');
const aboutElement = document.getElementById('about-us');
const menuHighlight = document.getElementById('menu-highlight');
const burger = document.getElementById('burger');
const pollo = document.getElementById('pollo');
const bistec = document.getElementById('bistec');
const text = menuHighlight.textContent;

console.log(window.innerWidth, window.innerHeight);
const menuItemHover = (e) => {
	const element = e.target.id;
	const event = e.type;

	if (event === 'mouseenter') {
		if (element === 'burger') {
			menuHighlight.textContent = 'The Green Giant';
		}
		if (element === 'pollo') {
			menuHighlight.textContent = "Fried Chik'n and Fries";
		}
		if (element === 'bistec') {
			menuHighlight.textContent = 'Churrasco Verde';
		}
	} else if (event === 'mouseleave') {
		menuHighlight.textContent = text;
	}

	console.log(event, text);
};
bistec.onmouseenter = menuItemHover;
bistec.onmouseleave = menuItemHover;
pollo.onmouseenter = menuItemHover;
pollo.onmouseleave = menuItemHover;
burger.onmouseenter = menuItemHover;
burger.onmouseleave = menuItemHover;
