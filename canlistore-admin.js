console.log("verze 9.9");
/* přesunout zasilkovna + do objednávek */

var elementToMove = document.querySelector('a[href="/admin/zasilkovna-plugin/"].navigation__link.navigation__link--1277');
var referenceElement = document.querySelector('a[href="/admin/danove-doklady/"].navigation__link.navigation__link--509');
if (elementToMove && referenceElement) {
	var parentElement = referenceElement.parentNode;
	parentElement.insertBefore(elementToMove, referenceElement);
	if (location.href.startsWith('https://www.canlistore.cz/admin/zasilkovna-plugin/'))
	{
		var elementLink122 = document.querySelector('.navigation__link--122');
		var elementLink606 = document.querySelector('.navigation__link--606');
		if (elementLink122 && elementLink606) {
			elementLink122.classList.add('navigation__link--active');
			elementLink606.classList.remove('navigation__link--active');
		}
	}
}

/* END přesunout zasilkovna + do objednávek END */
/* zasilkovna+ označení "vyřizuje se" */

if (location.href.startsWith('https://www.canlistore.cz/admin/zasilkovna-plugin/'))
{
	var iframe = document.getElementById('partner-iframe');
	if (iframe) {
		iframe.addEventListener('load', function () {
			var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
			var SelectFilterElement = iframeDocument.getElementById('filter_orders_form_orderStatus');
			if (SelectFilterElement) {
				SelectFilterElement.value = '-2';
				SelectFilterElement.style.backgroundColor = '#55995555';
			}
			var SelectOrdersElement = iframeDocument.getElementById('orders_overview_form_massAction_type');
			if (SelectOrdersElement) {
				SelectOrdersElement.value = 'createPacketsAndCreatePrintLabelsLinks'; // Vybere "Tisknout štítek"
				SelectOrdersElement.style.backgroundColor = '#55995555'; // Změna barvy pozadí pro vizuální potvrzení
			}
		});
	}
}

/* END zasilkovna+ označení "vyřizuje se" END */
/* označení více jak 1 ks v objednávce */

if (location.href.startsWith('https://www.canlistore.cz/admin/prehled-objednavek/'))
{
	setInterval(function () {
		var cells = document.querySelectorAll('.table__cell--number');
		cells.forEach(function (cell) {
			if (
				cell.innerText.trim() != '1 ks' &&
				cell.innerText.trim() != 'Množství' &&
				cell.innerText.trim() != ''
			) {
				cell.style.backgroundColor = '#FFFF0040';
			}
		});
	}, 500);
}

/* END označení více jak 1 ks v objednávce END */
/* Kontrola Dobírek a přehození do vyřizuje se */

if (location.href.startsWith('https://www.canlistore.cz/admin/prehled-objednavek/'))
{
	var dropdownList = document.querySelectorAll('ul.dropdown-ready li');
	if (dropdownList[7].classList.contains('active')) {
		var divSelectElement = document.querySelectorAll('td div.v2FormField__select');
		if(divSelectElement.length > 0)
		{
			var tbody = document.querySelector('tbody');
			var trs = tbody.querySelectorAll('tr');
			var trsCount = trs.length;
			for (var i = 0; i < trsCount; i++) {
				var v2inlines = trs[i].querySelectorAll('div.v2inline.v2inline--justifyBetween');
				var spanElement = v2inlines[1].querySelector('span');
				if (spanElement && spanElement.textContent.trim() === 'Dobírkou') {
					var selectElement = divSelectElement[i].querySelector('select');
					selectElement.value = '-2';
					selectElement.style.backgroundColor = '#55995555';
				}
			}
		}
	}

	/* END Kontrola Dobírek a přehození do vyřizuje se END */
	/* Zaplaceno přehodit do Vyřizuje se */

	var dropdownList = document.querySelectorAll('ul.dropdown-ready li');
	if (dropdownList[6].classList.contains('active')) {
		var divSelectElement = document.querySelectorAll('td div.v2FormField__select');
		if(divSelectElement.length > 0)
		{
			var tbody = document.querySelector('tbody');
			var trs = tbody.querySelectorAll('tr');
			var trsCount = trs.length;
			for (var i = 0; i < trsCount; i++) {
				var selectElement = divSelectElement[i].querySelector('select');
				if (selectElement) selectElement.value = '-2';
				if (selectElement) selectElement.style.backgroundColor = '#55995555';
			}
		}
	}

/* END Zaplaceno přehodit do Vyřizuje se END */
/* Kontrola osobní odběr ve vyřizuje se a přehození do osobní odběr */

	var dropdownList = document.querySelectorAll('ul.dropdown-ready li');


	if (dropdownList[5].classList.contains('active')) {
		var divSelectElement = document.querySelectorAll('td div.v2FormField__select');
		if(divSelectElement.length > 0)
		{
			var tbody = document.querySelector('tbody');
			var trs = tbody.querySelectorAll('tr');
			var trsCount = trs.length;
			for (var i = 0; i < trsCount; i++) {
				var v2inlines = trs[i].querySelectorAll('div.v2inline.v2inline--justifyBetween');
				var spanElement = v2inlines[0].querySelector('span');
				if (spanElement && spanElement.textContent.trim() === 'Osobní odběr') {
					var selectElement = divSelectElement[i].querySelector('select');
					if (selectElement) selectElement.value = '30';
					if (selectElement) selectElement.style.backgroundColor = '#ffff0040';
				}
			}
		}
	}
	
	/* END Kontrola osobní odběr ve vyřizuje se a přehození do osobní odběr END */
	/* Kontrola osobní odběr v nevyřizenýcha přehození do vyřizuje se */

	if (dropdownList[7].classList.contains('active')) {
		var divSelectElement = document.querySelectorAll(
			'td div.v2FormField__select'
		);
		var tbody = document.querySelector('tbody');
		var trs = tbody.querySelectorAll('tr');
		var trsCount = trs.length;
		for (var i = 0; i < trsCount; i++) {
			var v2inlines = trs[i].querySelectorAll(
				'div.v2inline.v2inline--justifyBetween'
			);
			var spanElement = v2inlines[0].querySelector('span');
			var spanElementPay = v2inlines[1].querySelector('span');
			if (
				spanElementPay &&
				spanElementPay.textContent.trim() === 'Hotově / kartou' &&
				spanElement &&
				spanElement.textContent.trim() === 'Osobní odběr'
			) {
				var selectElement = divSelectElement[i].querySelector('select');
				if (selectElement) selectElement.value = '-2';
				if (selectElement) selectElement.style.backgroundColor = '#55995555';
			}
		}
	}
}

/* END Kontrola osobní odběr v nevyřizenýcha přehození do vyřizuje se END */
/* počet dnů u datumu */

if (location.href.startsWith('https://www.canlistore.cz/admin/prehled-objednavek/'))
{
	var spans = document.querySelectorAll('span.grey.nowrap');
	if(spans.length > 0)
	{
		var currentDate = new Date();
		spans.forEach(function (span, index) {
			var dateString = span.textContent.trim();
			var dateParts = dateString.split(' ')[0].split('.');
			var timeParts = dateString.split(' ')[1].split(':');
			var dateObject = new Date(
				parseInt(dateParts[2]),
				parseInt(dateParts[1]) - 1,
				parseInt(dateParts[0]),
				parseInt(timeParts[0]),
				parseInt(timeParts[1])
			);
			var timeDiff = currentDate - dateObject;
			var daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) - 1;
			const parentTr = span.closest('tr');
			const selectField1 = parentTr.querySelector('[data-testid="orderCode"]');
			if (selectField1.nextSibling) {
				let newSpan = document.createElement('span');
				newSpan.textContent += '\u00A0(' + daysDiff + ')\u00A0';
				selectField1.parentNode.insertBefore(newSpan, selectField1.nextSibling);

				var dropdownList = document.querySelectorAll('ul.dropdown-ready li');

	/* nevyřízeno */
				
				if (dropdownList[7].classList.contains('active')) { 
					if (daysDiff >= 5) {
						newSpan.style.backgroundColor = '#cf000363';
						newSpan.style.borderRadius = '10px';

	/* přesunout dlouho nezaplacené objednávky do "Stále nezaplacené" */

						var divSelectElement = document.querySelectorAll('td div.v2FormField__select');
						var selectElement = divSelectElement[index].querySelector('select');
						if(selectElement) selectElement.value = '39';
						if(selectElement) selectElement.style.backgroundColor = '#55995555';

	/* END přesunout dlouho nezaplacené objednávky do "Stále nezaplacené" END */ 
	/* END nevyřízeno END */

					}
				}
				if (dropdownList[4].classList.contains('active')) {	/* osobní odběr */			
					if (daysDiff >= 7)
					{
						newSpan.style.backgroundColor = '#cf000363';
						newSpan.style.borderRadius = '10px';
					}
				}
				if (dropdownList[3].classList.contains('active')) { /* odesláno */
				
        			var previousMonth = currentDate.getMonth() - 1;
       				var previousMonthYear = currentDate.getFullYear();
           			console.log(previousMonth);
           			if (previousMonth < 0) {
			            previousMonth = 11;
	   			        previousMonthYear -= 1;
	       			}
					var elementDobírky = document.querySelector(`tr:nth-child(${index+1}) td:nth-child(5) div.v2inline.v2inline--justifyBetween span`);
            		if (elementDobírky && elementDobírky.textContent.trim() === 'Dobírkou') {
						if (dateObject.getMonth() === previousMonth && dateObject.getFullYear() === previousMonthYear) {
	            			newSpan.style.backgroundColor = '#0000ff66';
	            			newSpan.style.borderRadius = '10px';
	            		}
	            	}
				}
			}
		});
	}
}
/* END počet dnů u datumu END */
/* kontrola stavu zásilek - odeslané*/

if (location.href.startsWith('https://www.canlistore.cz/admin/prehled-objednavek/'))
{
	var dropdownLists = document.querySelectorAll('ul.dropdown-ready li');
	if (dropdownLists[3].classList.contains('active')) {
		const contentDiv = document.getElementById('bank-connection-notifications');
		var button = document.createElement('button');
		button.innerHTML = 'download zasilkovna-file';
		button.style.margin = '10px 20px';
		button.style.border = '1px solid';
		button.style.borderRadius = '2px';
		button.style.transform = 'translate(0px, 1px)';
		button.addEventListener('click', function () {
			window.open('https://client.packeta.com/cs/packets/list?list-id=1&do=list-export');
		});
		contentDiv.appendChild(button);

		const fileInput = document.createElement('input');
		fileInput.setAttribute('type', 'file');
		fileInput.setAttribute('id', 'csvFileInput');
		fileInput.setAttribute('accept', '.csv');
		contentDiv.appendChild(fileInput);
		document.getElementById('csvFileInput').addEventListener('change', handleFileSelect, false);

		let data = []; // Data budou globální pro možnost opakované kontroly
	}
	function handleFileSelect(event) {
		const file = event.target.files[0];
		const reader = new FileReader();
		reader.onload = function (event) {
			const csv = event.target.result;
			const lines = csv.split('\n');
			data = [];
			lines.forEach(function (line) {
				const columns = line.split(';').map((cell) => cell.replace(/"/g, ''));
				const objednavka = columns[3];
				const stav = columns[11];
				const datum = columns[12];
				data.push({ objednavka, stav, datum });
			});
			checkOrdersOnPage();
		};
		reader.readAsText(file);
	}
	function checkOrdersOnPage() {
		const objednavkyNaStrance = document.querySelectorAll('[data-testid="orderCode"]');
		objednavkyNaStrance.forEach(function (objednavkaElement) {
			const objednavkaKod = objednavkaElement.textContent;
			const hledanaObjednavka = data.find(function (item) {
				return item.objednavka === objednavkaKod;
			});
			if (hledanaObjednavka) {
				const parentTr = objednavkaElement.closest('tr');
				const selectField1 = parentTr.querySelector('[data-testid="orderRowDeliveryType"]');
				if (selectField1) {
					selectField1.textContent = hledanaObjednavka.stav;
					selectField1.style.padding = '0px 10px 0px 10px';
					selectField1.style.borderRadius = '10px';
				}
				if (hledanaObjednavka.stav === 'Zásilka je připravena k vyzvednutí') {
					const targetDateParts = hledanaObjednavka.datum.split('.');
					const targetDate = new Date(
						`20${targetDateParts[2]}-${targetDateParts[1]}-${targetDateParts[0]}`
					);
					const today = new Date();
					today.setHours(0, 0, 0, 0); // Set time to 00:00:00 for accurate comparison
					const timeDiff = targetDate - today;
					const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) - 1;
					selectField1.textContent =
						'Ready to: ' + hledanaObjednavka.datum + ' (' + daysDiff + ')';
					if (daysDiff == 0) {
						selectField1.style.backgroundColor = '#99555555';
					} else if (daysDiff == 1) {
						selectField1.style.backgroundColor = '#99995555';
					} else if (daysDiff == 2) {
						selectField1.style.backgroundColor = '#55995555';
					}
				}
				if (hledanaObjednavka.stav === 'A je to! Zásilka je u vás' || hledanaObjednavka.stav === 'Zásilka byla doručena')
				{
					const parentTr = objednavkaElement.closest('tr');
					const selectField2 = parentTr.querySelector('.selectField.sm');
					if (selectField2) {
						selectField2.value = '-3';
						selectField2.style.backgroundColor = '#55995555';
					}
				}
			} else {
				const parentTr = objednavkaElement.closest('tr');
				const selectField1 = parentTr.querySelector(
					'[data-testid="orderRowDeliveryType"]'
				);
				if (selectField1) {
					selectField1.textContent = 'Objednávka nebyla nalezena';
					selectField1.style.backgroundColor = '#99555555';
					selectField1.style.padding = '0px 10px 0px 10px';
					selectField1.style.borderRadius = '10px';
				}
			}
		});
	}
}

/* END kontrola stavu zásilek - odeslané END */
/* přepínání tabování mezi sloupci a řádky - další tlačítko u "uložit" */

if (document.querySelector('tbody')) {
	let tabindexEnabled = localStorage.getItem('tabindexEnabled') === 'true';

	if (tabindexEnabled) {
		applyTabindex();
	} else {
		removeTabindex();
	}

	if (location.href.startsWith('https://www.canlistore.cz/admin/produkty/')) {
		const toggleButtonElement = document.querySelector('.content-buttons');

		const buttonSpan = document.createElement('span');
		const buttonA = document.createElement('a');
		buttonA.id = 'toggleTabindex';
		buttonA.className = 'btn btn-sm btn-primary';
		buttonA.textContent = 'column tab';
		buttonA.title = 'tabování po sloupcích';

		if (tabindexEnabled) buttonA.style.backgroundColor = '#14b1ef';
		else buttonA.style.backgroundColor = '#00000055';

		buttonSpan.appendChild(buttonA);
		toggleButtonElement.insertBefore(
			buttonSpan,
			toggleButtonElement.firstChild
		);

		buttonA.addEventListener('click', () => {
			if (tabindexEnabled) {
				removeTabindex();
				buttonA.style.backgroundColor = '#00000055';
			} else {
				applyTabindex();
				buttonA.style.backgroundColor = '#14b1ef';
			}
			tabindexEnabled = !tabindexEnabled;
			localStorage.setItem('tabindexEnabled', tabindexEnabled);
		});
	}
}
function applyTabindex() {
	document.querySelectorAll('tbody').forEach((tbody) => {
		const rows = Array.from(tbody.querySelectorAll('tr'));
		if (rows.length > 0) {
			const colsCount = rows[0].querySelectorAll('td').length;
			for (let col = 0; col < colsCount; col++) {
				for (let row = 0; row < rows.length; row++) {
					const cell = rows[row].querySelectorAll('td')[col];
					if (cell) {
						const inputs = cell.querySelectorAll('input, select, a');
						inputs.forEach((input) => {
							input.setAttribute('tabindex', col * rows.length + row + 1);
						});
					}
				}
			}
		}
	});
}
function removeTabindex() {
	document.querySelectorAll('tbody').forEach((tbody) => {
		tbody.querySelectorAll('input, select, a').forEach((input) => {
			input.removeAttribute('tabindex');
		});
	});
}

/* END přepínání tabování mezi sloupci a řádky - další tlačítko u "uložit" END */
/* zvýraznění přehazování objednávek do odesláno */

if (location.href.startsWith('https://www.canlistore.cz/admin/prehled-objednavek/'))
{
	var dropdownLists = document.querySelectorAll('ul.dropdown-ready li');
	if (dropdownLists[5].classList.contains('active')) {
		if(document.querySelector('a[rel="massStatusChange|2"]'))
		{
	    	var originalButton = document.querySelector('a[rel="massStatusChange|2"]');
			var parentSpan = originalButton.closest('.mass-action-submenu-trigger').querySelector('.mass-action-submenu-header');
			originalButton.style.backgroundColor = '#55995555';

			if (originalButton && originalButton.textContent.includes("Odeslaná") && parentSpan && parentSpan.textContent.includes("Stav"))
			{
    		    var newButtonOdeslana = document.createElement('button');
    		    newButtonOdeslana.className = 'btn btn-sm btn-secondary';
    		    newButtonOdeslana.style.backgroundColor = '#55995555';
    		    newButtonOdeslana.innerText = 'Odeslaná';

				newButtonOdeslana.addEventListener('click', function(event)
				{
    		        originalButton.click();
    		    });
        
   	 		    var dropdownMenu = document.querySelector('.mass-action');
   		 	    (dropdownMenu).appendChild(newButtonOdeslana);
    		}
		}	
	}

	var dropdownLists = document.querySelectorAll('ul.dropdown-ready li');
	if (dropdownLists[4].classList.contains('active')) {
		if(document.querySelector('a[rel="massStatusChange|-3"]'))
		{
	    	var originalButton = document.querySelector('a[rel="massStatusChange|-3"]');
			var parentSpan = originalButton.closest('.mass-action-submenu-trigger').querySelector('.mass-action-submenu-header');
		
			originalButton.style.backgroundColor = '#55995555';

			if (originalButton && originalButton.textContent.includes("Vyřízena") && parentSpan && parentSpan.textContent.includes("Stav"))
			{
    		    var newButtonVyrizena = document.createElement('button');
    		    newButtonVyrizena.className = 'btn btn-sm btn-secondary';
    		    newButtonVyrizena.style.marginBottom = '10px';
    		    newButtonVyrizena.style.backgroundColor = '#55995555';
    		    newButtonVyrizena.innerText = 'Vyřízena';

				newButtonVyrizena.addEventListener('click', function(event)
				{
    	    	    originalButton.click();
    	  	 	});
        
	    	    var dropdownMenu = document.querySelector('.mass-action');
	    	    (dropdownMenu).appendChild(newButtonVyrizena);
	    	}
		}
	}
}

/* END zvýraznění přehazování objednávek do odesláno END */
/* vytvořit tlačítko které přeskočí mezi "zaplaceno" "nevyřízeno" a uloží je = přehodí vše do "vyřizuje se" */

var dropdownLists = document.querySelectorAll('ul.dropdown-ready li');
if (window.location.href.includes('/admin/prehled-objednavek/') && dropdownLists[5].classList.contains('active'))
{
	const newDivForButtonZkontrolovat = document.createElement('div');
	newDivForButtonZkontrolovat.style.display = 'flex';
	newDivForButtonZkontrolovat.style.justifyContent = 'flex-end';

	const newButtonZkontrolovat = document.createElement('button');
	newButtonZkontrolovat.className = 'btn btn-sm btn-secondary';
	newButtonZkontrolovat.style.position = 'absolute';
	newButtonZkontrolovat.style.transform = 'translateY(-30px)';
	newButtonZkontrolovat.style.marginLeft = '20px';
	newButtonZkontrolovat.style.backgroundColor = '#55995555';
	newButtonZkontrolovat.innerText = 'Zkontrolovat';
	if (sessionStorage.getItem('autoClick') === 'true') newButtonZkontrolovat.innerText = 'Hotovo';	

	document.querySelector('#bank-connection-notifications').appendChild(newDivForButtonZkontrolovat);
	newDivForButtonZkontrolovat.appendChild(newButtonZkontrolovat)

	sessionStorage.setItem('autoClick', 'false');
	sessionStorage.setItem('saveComplete', 'false');

	newButtonZkontrolovat.addEventListener('click', function()
	{
		sessionStorage.setItem('autoClick', 'true');
    window.location.href = 'https://www.canlistore.cz/admin/prehled-objednavek/33/';
  });
}
else if (window.location.href.includes('/admin/prehled-objednavek/33/'))
{
    if (sessionStorage.getItem('autoClick') === 'true')
	{
		const saveButton = document.querySelector('[data-testid="buttonSaveAndStay"]');
	    if (saveButton && sessionStorage.getItem('saveComplete') === 'false')
	    {
	    	sessionStorage.setItem('saveComplete', 'true');
		  saveButton.click();
		}
		else
		{
			sessionStorage.setItem('saveComplete', 'false');
			window.location.href = 'https://www.canlistore.cz/admin/prehled-objednavek/-1/';
       	}
	}
}
else if (window.location.href.includes('/admin/prehled-objednavek/-1/'))
{
	if (sessionStorage.getItem('autoClick') === 'true')
	{
	    const saveButton = document.querySelector('[data-testid="buttonSaveAndStay"]');
	    if (saveButton && sessionStorage.getItem('saveComplete') === 'false')
	    {
	    	sessionStorage.setItem('saveComplete', 'true');
			saveButton.click();
		}
		else
		{
			sessionStorage.setItem('saveComplete', 'false');
			window.location.href = 'https://www.canlistore.cz/admin/prehled-objednavek/-2/';
    	}
	}
}

/* END vytvořit tlačítko které přeskočí mezi "zaplaceno" "nevyřízeno" a uloží je = přehodí vše do "vyřizuje se" END */
/* odesílání digitálních proiduktů */

const linksMap = {
	'Digitální diář Minimalistický':'https://drive.google.com/drive/folders/18elDfL7V4Hgvt5HTH-G_BGOFT4TuiT1u?usp=drive_link',
	'Digitální receptář':'https://drive.google.com/drive/folders/1MUMi6lWqA01v33kyQEoPoocUqrNr1lTV?usp=drive_link',
	'Digitální rozvrh hodin Duha':'https://drive.google.com/drive/folders/1IlaJqqWpBZN13t2q7b5gY7AHZIx8txcE?usp=drive_link',
	'Digitální rozvrh hodin Kaktus':'https://drive.google.com/drive/folders/1qcgNHYLtZvhsPBGtb1Sne-xZu32DIUnJ?usp=drive_link',
	'Digitální rozvrh hodin Květiny':'https://drive.google.com/drive/folders/1v5o6wxjQJ9RZyFEFEgWjKt6uptyz8Dru?usp=drive_link',
	'Digitální rozvrh hodin Monstera':'https://drive.google.com/drive/folders/1ZqwU1kP0G-OO0gha5pvgVYlWUTlXD2ll?usp=drive_link',
	'Digitální rozvrh hodin Slunečnice':'https://drive.google.com/drive/folders/11XtYeJwgHMdopmXMsiD06VRjjWm1zXoY?usp=drive_link',
	'Digitální rozvrh hodin Škola':'https://drive.google.com/drive/folders/1aElcvdPNkDD_-H2inaGFe1b5U7yhfoTx?usp=drive_link',
	'Digitální rozvrh hodin Tele':'https://drive.google.com/drive/folders/1MNh2NykVGizi3f-xjZiyn1TDnVPBQ9n_?usp=drive_link',
	'Horizontální rozložení k tisku':'https://drive.google.com/drive/folders/1wYMtesWBmodS15E2CQEhGSb6BoXo2GVA?usp=drive_link',
	'Kalendářní rozložení k tisku':'https://drive.google.com/drive/folders/12_zaD2pDV7YQ_0KseiZQ9OI5ko9SXEg_?usp=drive_link',
	'Knihy k tisku':'https://drive.google.com/drive/folders/1os7eRw-7W6DiLt8kiXl_SM7Mi1OQoc-P?usp=drive_link',
	'Mapa k tisku':'https://drive.google.com/drive/folders/1_5QYGX-rpPBGntEYvzZt_aRFUYS_1rzV?usp=drive_link',
	'Narozeniny k tisku':'https://drive.google.com/drive/folders/1dvdWbprTO-Xf0XNVY-XdQmmazqzirjcW?usp=drive_link',
	'Organizace + sloupce k tisku':'https://drive.google.com/drive/folders/1QgOwkj54CV6Ty4-pDVUCqgf4xKnKUvxw?usp=drive_link',
	'Random rozložení k tisku':'https://drive.google.com/drive/folders/1XM1-7FhrlrFl3eMfUmVsJyS1Krzu1kc_?usp=drive_link',
	'Rozdělovač hory k tisku':'https://drive.google.com/drive/folders/1BzQzRaTqZTLrF5euoh2x3NU3HZFupQtK?usp=drive_link',
	'Řádky + poznámky k tisku':'https://drive.google.com/drive/folders/14qRfY6Tpl1qbkVK_K6M3299xTVqqsizi?usp=drive_link',
	'Řádky + prázdná strana k tisku':'https://drive.google.com/drive/folders/1QUVv0DvgmSNMy8Lq82EFq_K4I76lmrZg?usp=drive_link',
	'Řádky k tisku':'https://drive.google.com/drive/folders/1PhWzIH-7NBVM3W4ZMzYAqze90CEGp1jl?usp=drive_link',
	'Sloupce + hodiny k tisku':'https://drive.google.com/drive/folders/1_zVqtnUH2TN4U111km-CPJLCwSxFZlUK?usp=drive_link',
	'Spoření k tisku':'https://drive.google.com/drive/folders/1W2LwjgsSqy88jDmHq6CI4pX3EZhxFS2O?usp=drive_link',
	'Učitelský zápisník - PDF k tisku':'https://drive.google.com/drive/folders/1nM7_M6WufM9EzWHLBS8NHRFwbzbqQVwG?usp=drive_link',
	'Zápisník asistenta pedagoga - PDF k tisku':'https://drive.google.com/drive/folders/1BkOOukxKUVjmZQeaxk-NXTi35bXfiObl?usp=drive_link',
	'Zápisník pro Mateřské školy - PDF k tisku':'https://drive.google.com/drive/folders/17rPMDxw9C1l6tZ9UoJyjPM_EfuxAV09A?usp=drive_link'
};
if (
	location.href.startsWith('https://www.canlistore.cz/admin/objednavky-detail')
) {
	document.addEventListener('click', function (event) {
		// Zkontrolujeme, zda kliknutí bylo na odkaz uvnitř elementu s třídou 'open-modal'
		if (event.target.closest('.open-modal a')) {
			setTimeout(function () {
				let inputElement = document.querySelector(
					'input[value="Canli Store 📚 PDF soubory"]'
				);
				if (inputElement) {
					var iframe = document.getElementById('description_ifr');

					if (iframe && iframe.contentDocument) {
						var iframeDocument =
							iframe.contentDocument || iframe.contentWindow.document;

						if (iframeDocument.readyState === 'complete') {
							var links = iframeDocument.body.getElementsByTagName('a');
							var replacementHTML = '';
							for (var i = 0; i < links.length; i++) {
								for (const [text, url] of Object.entries(linksMap)) {
									if (links[i].textContent.includes(text)) {
										replacementHTML += `<a href="${url}">${text}</a><br>`;
									}
								}
							}
							var paragraphsForZde =
								iframeDocument.body.getElementsByTagName('p');
							for (var j = 0; j < paragraphsForZde.length; j++) {
								var p = paragraphsForZde[j];
								if (p.textContent.includes('CHYBA')) {
									if (replacementHTML != '') {
										p.innerHTML = replacementHTML;
									}
									if (replacementHTML == '') {
										replacementHTML =
											"<p style='color: red'>V objednávce není žádný digitální produkt!</p>";
										p.innerHTML = replacementHTML;
									}
								}
								if (p.textContent.includes('SMAZAT')) {
									while (p.nextSibling) {
										p.parentNode.removeChild(p.nextSibling);
									}
									p.parentNode.removeChild(p);
									break;
								}
							}
						}
					}
				}
			}, 1000);
		}
	});
}
/* END odesílání digitálních proiduktů END */
