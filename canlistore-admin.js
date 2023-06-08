// Najděte prvek, který chcete přesunout
var elementToMove = document.querySelector('a[href="/admin/zasilkovna-plugin/"].navigation__link.navigation__link--1277');

// Najděte referenční prvek, před který chcete přesunout první prvek
var referenceElement = document.querySelector('a[href="/admin/danove-doklady/"].navigation__link.navigation__link--509');

// Získejte nadřazený prvek, který obaluje oba prvky <a>
var parentElement = referenceElement.parentNode;

// Přesuňte prvek <a> před referenční prvek
parentElement.insertBefore(elementToMove, referenceElement);


/* označení více jak 1 ks v objednávce */
if(location.href === 'https://www.canlistore.com/admin/prehled-objednavek/'){
	setInterval(function() {
		console.log('Myš ukazuje na prvek s třídou v2table__detailLink.');
   		var cells = document.querySelectorAll('.v2table__cell--number');
		cells.forEach(function(cell) {
			if (cell.innerText.trim() != '1 ks' && cell.innerText.trim() != 'Množství'&& cell.innerText.trim() != ''){
				cell.style.backgroundColor = '#FFFF0040';
			}
		});
	}, 500);
}
/* END označení více jak 1 ks v objednávce END */
