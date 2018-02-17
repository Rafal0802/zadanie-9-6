// script.js

var list = document.getElementById('list'),
	add = document.getElementById('addElem');

add.addEventListener('click', function(e) {
	var element = document.createElement('li'),
		itemsByTagName = document.getElementsByTagName('li');
		
	element.innerHTML = 'item ' + itemsByTagName.length;
	
	list.appendChild(element);
});