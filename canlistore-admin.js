/* přesunout zasilkovna + do objednávek */
var elementToMove = document.querySelector('a[href="/admin/zasilkovna-plugin/"].navigation__link.navigation__link--1277');
var referenceElement = document.querySelector('a[href="/admin/danove-doklady/"].navigation__link.navigation__link--509');
var parentElement = referenceElement.parentNode;
parentElement.insertBefore(elementToMove, referenceElement);
/* END přesunout zasilkovna + do objednávek END */
/* zasilkovna+ označení "vyřizuje se" */
if(location.href.startsWith('https://www.canlistore.com/admin/zasilkovna-plugin/')) {
	var iframe = document.getElementById('partner-iframe');
	if (iframe) {
        	iframe.addEventListener('load', function() {
        		var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        		var selectElement = iframeDocument.getElementById('filter_orders_form_orderStatus');
			if (selectElement) {
                		selectElement.value = "-2";
                		selectElement.style.backgroundColor = '#55995555';
            		}
        	});
	}
    }
/* END zasilkovna+ označení "vyřizuje se" END */	
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
if(location.href.startsWith('https://www.canlistore.com/admin/prehled-objednavek/')) {
	/* Kontrola Dobírek a přehození do vyřizuje se */
	var dropdownList = document.querySelectorAll('ul.dropdown-ready li');
	if (dropdownList[6].classList.contains('active')) {
		var divSelectElement = document.querySelectorAll('td div.v2FormField__select');
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

	/* Kontrola osobní odběr a přehození do osobní odběr */
	var dropdownList = document.querySelectorAll('ul.dropdown-ready li');
	if (dropdownList[5].classList.contains('active')) {
		var divSelectElement = document.querySelectorAll('td div.v2FormField__select');
		var tbody = document.querySelector('tbody');
		var trs = tbody.querySelectorAll('tr');  
		var trsCount = trs.length;
		for (var i = 0; i < trsCount; i++) {
			var v2inlines = trs[i].querySelectorAll('div.v2inline.v2inline--justifyBetween');  
			var spanElement = v2inlines[0].querySelector('span');  
			if (spanElement && spanElement.textContent.trim() === 'Osobní odběr') {
				var selectElement = divSelectElement[i].querySelector('select');
				if(selectElement) selectElement.value = "30";
				if(selectElement) selectElement.style.backgroundColor = '#55995555';
			}
		}
	}
	if (dropdownList[6].classList.contains('active')) {
		var divSelectElement = document.querySelectorAll('td div.v2FormField__select');
		var tbody = document.querySelector('tbody');
		var trs = tbody.querySelectorAll('tr');  
		var trsCount = trs.length;
		for (var i = 0; i < trsCount; i++) {
			var v2inlines = trs[i].querySelectorAll('div.v2inline.v2inline--justifyBetween');  
			var spanElement = v2inlines[0].querySelector('span');  
			var spanElementPay = v2inlines[1].querySelector('span');  
			if (spanElementPay && spanElementPay.textContent.trim() === 'Hotově / kartou' && spanElement && spanElement.textContent.trim() === 'Osobní odběr') {
				var selectElement = divSelectElement[i].querySelector('select');
				if(selectElement) selectElement.value = "30";
				if(selectElement) selectElement.style.backgroundColor = '#55995555';
			}
		}
	}
	/* END Kontrola osobní odběr a přehození do osobní odběr END */

	/* Kontrola Převode/Kartou a přehození do vyřízeno
	var dropdownList = document.querySelectorAll('ul.dropdown-ready li');
	if (dropdownList[3].classList.contains('active')) {
		var divSelectElement = document.querySelectorAll('td div.v2FormField__select');
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
	END Kontrola Převode/Kartou a přehození do vyřízeno END */
}

/* počet dnů u datumu */
if(location.href.startsWith('https://www.canlistore.com/admin/prehled-objednavek/')) {
	var spans = document.querySelectorAll('span.grey.nowrap');
	var currentDate = new Date();
	spans.forEach(function(span) {
    	    var dateString = span.textContent.trim();
    	    var dateParts = dateString.split(' ')[0].split('.');
    	    var timeParts = dateString.split(' ')[1].split(':');
    	    var dateObject = new Date(parseInt(dateParts[2]), parseInt(dateParts[1]) - 1, parseInt(dateParts[0]), parseInt(timeParts[0]), parseInt(timeParts[1]));
    	    var timeDiff = currentDate - dateObject;
    	    var daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
		const parentTr = span.closest('tr');
        	const selectField1 = parentTr.querySelector('[data-testid="orderCode"]');
        	if (selectField1.nextSibling)
		{
			let newSpan = document.createElement('span');
			newSpan.textContent += "\u00A0(" + daysDiff + ")";
			selectField1.parentNode.insertBefore(newSpan, selectField1.nextSibling);
		}
    	});
}
/* END počet dnů u datumu END */


console.log("verze 4.2");
