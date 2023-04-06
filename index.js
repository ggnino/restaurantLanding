// Variables
const menuHighlight = document.getElementById('menu-highlight'); // menu highlight element
const burger = document.getElementById('burger'); // burger menu item element
const pollo = document.getElementById('pollo'); // chicken menu item element
const bistec = document.getElementById('bistec'); // steak menu item element
const text = menuHighlight.textContent; // menu highlight elements text content

// Hover effect for menu items
const menuItemHover = (e) => {
	const element = e.target.id; // menu item
	const event = e.type; // event type
	// if event is mouse enter
	if (event === 'mouseenter') {
		// burger menu item
		if (element === 'burger') {
			menuHighlight.textContent = 'The Green Giant';
		}
		// chicken menu item
		if (element === 'pollo') {
			menuHighlight.textContent = "Fried Chik'n and Fries";
		}
		// steak menu item
		if (element === 'bistec') {
			menuHighlight.textContent = 'Churrasco Verde';
		}
	}
	// else if event is mouse leave
	else if (event === 'mouseleave') {
		// default text
		menuHighlight.textContent = text;
	}
};
// add event listener on menu item elements
bistec.onmouseenter = menuItemHover;
bistec.onmouseleave = menuItemHover;
pollo.onmouseenter = menuItemHover;
pollo.onmouseleave = menuItemHover;
burger.onmouseenter = menuItemHover;
burger.onmouseleave = menuItemHover;
