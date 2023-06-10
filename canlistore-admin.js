// Najděte prvek, který chcete přesunout
console.log("15:06");
var elementToMove = document.querySelector('a[href="/admin/zasilkovna-plugin/"].navigation__link.navigation__link--1277');

// Najděte referenční prvek, před který chcete přesunout první prvek
var referenceElement = document.querySelector('a[href="/admin/danove-doklady/"].navigation__link.navigation__link--509');

// Získejte nadřazený prvek, který obaluje oba prvky <a>
var parentElement = referenceElement.parentNode;

// Přesuňte prvek <a> před referenční prvek
parentElement.insertBefore(elementToMove, referenceElement);


/* označení více jak 1 ks v objednávce */
if(location.href.startsWith('https://www.canlistore.com/admin/prehled-objednavek/')) {
	setInterval(function() {
   		var cells = document.querySelectorAll('.v2table__cell--number');
		cells.forEach(function(cell) {
			if (cell.innerText.trim() != '1 ks' && cell.innerText.trim() != 'Množství'&& cell.innerText.trim() != ''){
				cell.style.backgroundColor = '#FFFF0040';
			}
		});
	}, 500);
}
/* END označení více jak 1 ks v objednávce END */
document.addEventListener('DOMContentLoaded', function() { /* po načtení stránky */
	console.log("stránka se načetla");
	/* Kontrola Dobírek a přehození do vyřizuje se */
	var dropdownList = document.querySelectorAll('ul.dropdown-ready li');
	if (dropdownList[5].classList.contains('active')) {
		var divSelectElement = document.querySelectorAll('div.v2FormField__select');
		// Zkontrolujte, zda div existuje a obsahuje span s obsahem "Dobírkou"
		var tbody = document.querySelector('tbody');
		var trs = tbody.querySelectorAll('tr');  
		var trsCount = trs.length;
		for (var i = 0; i < trsCount; i++) {
			var v2inlines = trs[i].querySelectorAll('div.v2inline.v2inline--justifyBetween');  
			var spanElement = v2inlines[1].querySelector('span');  
			if (spanElement && spanElement.textContent.trim() === 'Dobírkou') {
				var selectElement = divSelectElement[i].querySelector('select');
				if(selectElement) selectElement.value = "-2";
				if(selectElement) selectElement.style.backgroundColor = '#55995555';
			}
		}
	}
	/* END Kontrola Dobírek a přehození do vyřizuje se END */

	/* Kontrola Převode/Kartou a přehození do vyřízeno */
	var dropdownList = document.querySelectorAll('ul.dropdown-ready li');
	if (dropdownList[3].classList.contains('active')) {
		var divSelectElement = document.querySelectorAll('div.v2FormField__select');
		// Zkontrolujte, zda div existuje a obsahuje span s obsahem "Dobírkou"
		var tbody = document.querySelector('tbody');
		var trs = tbody.querySelectorAll('tr');  
		var trsCount = trs.length;
		for (var i = 0; i < trsCount; i++) {
			var v2inlines = trs[i].querySelectorAll('div.v2inline.v2inline--justifyBetween');  
			var spanElement = v2inlines[1].querySelector('span');  
			if (spanElement && (spanElement.textContent.trim() === 'Převodem' || spanElement.textContent.trim() === 'Online platba kartou' || spanElement.textContent.trim() === 'Apple Pay' || spanElement.textContent.trim() === 'Google Pay')) {
				var selectElement = divSelectElement[i].querySelector('select');
				if(selectElement) selectElement.value = "-3";
				if(selectElement) selectElement.style.backgroundColor = '#55995555';
			}
		}
	}
	/* END Kontrola Převode/Kartou a přehození do vyřízeno END */
});

