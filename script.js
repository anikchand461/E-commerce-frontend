// script.js

// Function to toggle the mobile menu
function toggleMenu() {
	const panelOps = document.querySelector('.panel-ops');
	if (panelOps.style.display === 'none') {
		panelOps.style.display = 'flex';
	} else {
		panelOps.style.display = 'none';
	}
}

// Add event listener to the "All" button in the panel
document.querySelector('.panel-all').addEventListener('click', toggleMenu);

// Adjust the layout based on the screen width
function adjustLayout() {
	if (window.innerWidth < 768) {
		// Example: Hide the "panel-ops" content on smaller screens
		document.querySelector('.panel-ops').style.display = 'none';
	} else {
		// Show the "panel-ops" content on larger screens
		document.querySelector('.panel-ops').style.display = 'flex';
	}
}

// Call adjustLayout on page load
window.addEventListener('load', adjustLayout);
// Call adjustLayout on window resize
window.addEventListener('resize', adjustLayout);
