var menuItems = [];

function navbar() {

	var nb = document.getElementById("nbcontainer");
	// if window width is less than 768 we need
	// to have a dropdown menu
	if(window.innerWidth <= 768) {
		console.log("started");
		// save the children!
		if(menuItems.length == 0){
			for(var i = 0; i < nb.children.length; i++){
				nb.children[i].className = "";
				menuItems.push(nb.children[i]);
			}
		}
		else {
			menuItems[0].className = "";
		}

		// delete children
		while(nb.firstChild) {
			nb.removeChild(nb.firstChild);
		}

		// create navbar's menu items container
		var dropdown = document.createElement("li");
		dropdown.setAttribute('role', 'presentation');
		dropdown.className = "active";
		dropdown.onmousedown = drop;
		// create inner a tag
		var a = document.createElement("a");
		a.href = "#";
		a.setAttribute("style", "margin: 4px");
		a.innerText = "Menu ";
		var s = document.createElement("span");
		s.className = "caret";
		a.appendChild(s);

		dropdown.appendChild(a);

		// do the switch
		nb.appendChild(dropdown);
	}
	else{
		if (menuItems.length > 0) {
			// delete children
			while(nb.firstChild) {
				nb.removeChild(nb.firstChild);
			}

			// Make Home active
			menuItems[0].className = "active";
			// re-add menu items
			for (var i = 0; i < menuItems.length; i++) {
			nb.appendChild(menuItems[i]);
		}
		}
	}
}

window.onresize = navbar;

function drop() {
	var nb = document.getElementById("nbcontainer");
	console.log(menuItems);
	// add menuItems when the button is the only thing showing
	if (nb.children.length <= 1) {
		for (var i = 0; i < menuItems.length; i++) {
			nb.appendChild(menuItems[i]);
		}
	}
	else {
		for (var i = 0; i < menuItems.length; i++) {
			nb.removeChild(menuItems[i]);
		}
	}
}

