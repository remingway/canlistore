console.log("verze 13.1");
/* vždy zobrazit přehled u objednávek a produktů */
const anchors = [
    'a.navigation__link.navigation__link--123',
    'a.navigation__link.navigation__link--155'
];

anchors.forEach(anchorSelector => {
    const anchor = document.querySelector(anchorSelector);

    if (anchor) {
        // Najdi rodičovský <li> prvek
        const liElement = anchor.closest('li');

        if (liElement) {
            // Zkopíruj <li> prvek
            const liClone = liElement.cloneNode(true);

            // Vytvoř nový <ul> prvek
            const newUl = document.createElement('ul');

            // Nastav styl display: block !important
            newUl.style.setProperty('display', 'block', 'important');

            // Vlož zkopírovaný <li> do nového <ul>
            newUl.appendChild(liClone);

            // Najdi rodičovský <ul> prvek, do kterého se původně <li> nacházel
            const ulElement = liElement.closest('ul');

            if (ulElement) {
                // Vlož nový <ul> za původní <ul>;
                ulElement.parentNode.insertBefore(newUl, ulElement.nextSibling);
            } else {
                console.error('Rodičovský <ul> nenalezen.');
            }
        } else {
            console.error('Rodičovský <li> nenalezen.');
        }
    } else {
        console.error(`<a> s třídou ${anchorSelector} nenalezen.`);
    }
});
/* END vždy zobrazit přehled u objednávek a produktů END */
/* zasilkovna+ označení "vyřizuje se"

if (location.href.startsWith('https://www.artyrium.cz/admin/zasilkovna-plugin/'))
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

 END zasilkovna+ označení "vyřizuje se" END */
/* označení více jak 1 ks v objednávce */

if (location.href.startsWith('https://www.artyrium.cz/admin/prehled-objednavek/'))
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

if (location.href.startsWith('https://www.artyrium.cz/admin/prehled-objednavek/'))
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
				if (spanElement && spanElement.textContent.trim() === 'Osobní odběr / digitální produkty') {
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
		var divSelectElement = document.querySelectorAll('td div.v2FormField__select');
		if(divSelectElement.length > 0)
		{
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
						spanElement.textContent.trim() === 'Osobní odběr / digitální produkty'
					) {
						var selectElement = divSelectElement[i].querySelector('select');
						if (selectElement) selectElement.value = '-2';
						if (selectElement) selectElement.style.backgroundColor = '#55995555';
					}
				}
			}
		}
	}

/* END Kontrola osobní odběr v nevyřizenýcha přehození do vyřizuje se END */
/* počet dnů u datumu */

if (location.href.startsWith('https://www.artyrium.cz/admin/prehled-objednavek/'))
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
/* kontrola stavu zásilek - odeslané

if (location.href.startsWith('https://www.artyrium.cz/admin/prehled-objednavek/'))
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

 END kontrola stavu zásilek - odeslané END */
/* přepínání tabování mezi sloupci a řádky - další tlačítko u "uložit" */

if (document.querySelector('tbody')) {
	let tabindexEnabled = localStorage.getItem('tabindexEnabled') === 'true';

	if (tabindexEnabled) {
		applyTabindex();
	} else {
		removeTabindex();
	}

	if (location.href.startsWith('https://www.artyrium.cz/admin/produkty/')) {
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

if (location.href.startsWith('https://www.artyrium.cz/admin/prehled-objednavek/'))
{
	var dropdownLists = document.querySelectorAll('ul.dropdown-ready li');
	if (dropdownLists[5].classList.contains('active')) {
		var originalButton1 = document.querySelectorAll('a[data-custom-action="openCreateAndPrintShipmentsModal"]')[1];
		if(originalButton1)
		{
			if (originalButton1)// && originalButton.textContent.includes("Tisknout štítky (Balíky)"))
			{
				originalButton1.style.backgroundColor = '#55995555';
	  			var newButtonTisk = document.createElement('button');
	    			newButtonTisk.className = 'btn btn-sm btn-secondary';
    				newButtonTisk.style.backgroundColor = '#55995555';
    				newButtonTisk.innerText = 'Tisk';
				newButtonTisk.addEventListener('click', function(event)
				{
    		        		originalButton1.click();
    		    		});
   	 		    	var dropdownMenu = document.querySelector('.massAction');
   		 	    	(dropdownMenu).appendChild(newButtonTisk);
    			}
		}	
	    	var originalButton2 = document.querySelector('a[rel="massStatusChange|2"]');
		if(originalButton2)
		{
			var parentSpan = originalButton2.closest('.massAction__submenuTrigger').querySelector('.massAction__submenuHeader');
			originalButton2.style.backgroundColor = '#55995555';
			if (originalButton2 && originalButton2.textContent.includes("Odeslaná") && parentSpan && parentSpan.textContent.includes("Stav"))
			{
	    			var newButtonOdeslana = document.createElement('button');
	    			newButtonOdeslana.className = 'btn btn-sm btn-secondary';
	    			newButtonOdeslana.style.backgroundColor = '#55995555';
	    			newButtonOdeslana.innerText = 'Odeslaná';
				newButtonOdeslana.addEventListener('click', function(event)
				{
    		        		originalButton2.click();
    		    		});
				var dropdownMenu = document.querySelector('.massAction');
   		 		(dropdownMenu).appendChild(newButtonOdeslana);
    			}
		}	
	}
	var dropdownLists = document.querySelectorAll('ul.dropdown-ready li');
	if (dropdownLists[4].classList.contains('active')) {
		if(document.querySelector('a[rel="massStatusChange|-3"]'))
		{
	    	var originalButton = document.querySelector('a[rel="massStatusChange|-3"]');
			var parentSpan = originalButton.closest('.massAction__submenuTrigger').querySelector('.massAction__submenuHeader');
		
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
        
	    	    var dropdownMenu = document.querySelector('.massAction');
	    	    (dropdownMenu).appendChild(newButtonVyrizena);
	    	}
		}
	}
}

/* END zvýraznění přehazování objednávek do odesláno END */
/* vytvořit tlačítko které přeskočí mezi "zaplaceno" "nevyřízeno" a uloží je = přehodí vše do "vyřizuje se"

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
    window.location.href = 'https://www.artyrium.cz/admin/prehled-objednavek/33/';
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
			window.location.href = 'https://www.artyrium.cz/admin/prehled-objednavek/-1/';
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
			window.location.href = 'https://www.artyrium.cz/admin/prehled-objednavek/-2/';
    	}
	}
}

 END vytvořit tlačítko které přeskočí mezi "zaplaceno" "nevyřízeno" a uloží je = přehodí vše do "vyřizuje se" END */
/* odesílání digitálních produktů */

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
	location.href.startsWith('https://www.artyrium.cz/admin/objednavky-detail')
) {
	document.addEventListener('click', function (event) {
		// Zkontrolujeme, zda kliknutí bylo na odkaz uvnitř elementu s třídou 'open-modal'
		if (event.target.closest('.open-modal a')) {
			setTimeout(function () {
				let inputElement = document.querySelector(
					'input[value="Artýrium 📚 PDF soubory"]'
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

/* END odesílání digitálních produktů END */
/* kontrola custom produktu a odeslání do google sheet */

function poslatObjednavku(datum, jmeno) {
  fetch("https://script.google.com/macros/s/AKfycbzOm1laILFgGBR_q1WH0q-wIo6zyja8L_Waw2OvFLvhstb7Ur-37Am9yvGPSNdvXxBs/exec", {
    method: "POST",
    mode: "no-cors", 
    body: JSON.stringify({ datum, jmeno}),
    headers: { "Content-Type": "application/json" }
  }).then(response => console.log("Objednávka odeslána"));
}
if (window.location.href === "https://www.artyrium.cz/admin/pokladna/univerzalni-produkt/") {
	const productActionButton = document.querySelector('.btn.btn-lg.btn-action.product-action');
	if (productActionButton) {
		productActionButton.addEventListener('click', () => {
		const now = new Date();
		const formattedDate = now.toLocaleString('cs-CZ');
		const input = document.getElementById('cash-desk-hollow-product-name');
		const inputValue = input ? input.value : 'Název neznámý';
		poslatObjednavku(formattedDate,inputValue);
		});
	}
}

/* END kontrola custom produktu a odeslání do google sheet END */
/* vytvořit kalendář */

const numberLiKalendar = document.createElement('li');
numberLiKalendar.className = 'headerNavigation__link js-drawer-toggle';
const buttonKalendar = document.createElement('button');
buttonKalendar.textContent = "Kalendář";
buttonKalendar.style.backgroundColor = "#FF634755";
buttonKalendar.style.display = "block";
buttonKalendar.style.zIndex = "10000";
buttonKalendar.style.margin = "10px auto";
buttonKalendar.style.fontSize = "16px";
buttonKalendar.style.padding = "5px 5px";
buttonKalendar.style.cursor = "pointer";
buttonKalendar.style.border = "1px solid";
numberLiKalendar.appendChild(buttonKalendar);

const targetElementProKalendar = document.querySelector(
	'.headerNavigation__item.headerNavigation__item--university'
);
if (targetElementProKalendar) {
    targetElementProKalendar.parentNode.insertBefore(numberLiKalendar, targetElementProKalendar);
}
// Funkce pro přidání obsahu kalendáře
let calendarVisible = false; // Stav, zda je kalendář zobrazen

function loadCalendar() {
    const existingCalendar = document.getElementById("calendar-container");
    if (existingCalendar) {
        // Pokud kalendář již existuje, skryjeme ho
        existingCalendar.style.display = calendarVisible ? "none" : "block";
        calendarVisible = !calendarVisible;
        return;
    }

    // Vytvoření kontejneru pro celý kalendář
    const calendarContainer = document.createElement("div");
    calendarContainer.id = "calendar-container";
    calendarContainer.style.zIndex = "9999"; // Vertikální střed
    calendarContainer.style.position = "absolute"; // Vertikální střed
    calendarContainer.style.top = "50%"; // Vertikální střed
    calendarContainer.style.left = "50%"; // Horizontální střed
    calendarContainer.style.transform = "translate(-50%, -50%)";
    calendarContainer.style.maxWidth = "800px"; // Maximální šířka kalendáře
    calendarContainer.style.margin = "auto"; // Zarovnání na střed
    calendarContainer.style.padding = "20px";
    calendarContainer.style.border = "2px solid #ccc"; // Rámeček kolem kalendáře
    calendarContainer.style.borderRadius = "10px"; // Zaoblení rohů
    calendarContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    calendarContainer.style.textAlign = "center";
    calendarContainer.style.backgroundColor = "white"; // Horizontální střed
    document.body.appendChild(calendarContainer);

    // Vytvoření hlavičky a stylování
    const h1 = document.createElement("h1");
    h1.id = "date";
    calendarContainer.appendChild(h1);

    // Vytvoření kontejneru pro události
    const eventContainer = document.createElement("div");
    eventContainer.id = "event-container";
    calendarContainer.appendChild(eventContainer);

    // Funkce pro převod formátu "DD.MM.YYYY" na Date v UTC bez hodin
    function parseDate(dateStr) {
        let parts = dateStr.trim().split(".");
        if (parts.length === 3) {
            let date = new Date(Date.UTC(parts[2], parts[1] - 1, parts[0]));
            return date;
        }
        return null;
    }

    // Funkce pro výpočet počtu uplynulých dní a celkového počtu dní (bez času)
    function getDaysProgress(startDate, endDate, currentDate) {
        const totalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
        const elapsedDays = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
        return {
            progress: Math.min(elapsedDays / totalDays, 1),
            totalDays: totalDays,
            elapsedDays: elapsedDays
        };
    }

    // Dnešní datum
    let today = new Date();
    let formattedToday = today.toLocaleDateString('cs-CZ');
    document.getElementById("date").textContent = formattedToday;

    // Funkce pro výběr barvy progress baru podle typu akce
    function getProgressBarColor(eventName) {
        if (eventName.includes("Ilustrace")) {
            return "#FF634755";
        } else if (eventName.includes("Produkty příprava")) {
            return "#1E90FF55";
        } else if (eventName.includes("Reklama příprava")) {
            return "#32CD3255";
        } else {
            return "#4CAF5055";
        }
    }

    // Načítání dat z CSV
    fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQpcLfA-b_8s1xUDwu9SVElVqbgf0xPtYBDBz-w3XeAG29UavKuBUXyPVRY2jFgoGrXhWgtAbqPSBeT/pub?gid=1964521897&single=true&output=csv")
        .then(response => response.text())
        .then(csv => {
            let rows = csv.split("\n");
            let events = [];

            for (let i = 4; i < 34 && i < rows.length; i++) {
                let cols = rows[i].split(",").map(col => col.trim());
                if (cols.length >= 6) {
                    let date1 = parseDate(cols[0]);
                    let date2 = parseDate(cols[1]);
                    let date3 = parseDate(cols[2]);
                    let date4 = parseDate(cols[3]);
                    let date5 = parseDate(cols[4]);
                    let eventName = cols[5];

                    if (date1 && date2 && date3 && date4 && date5) {
                        let eventProgress;
                        if (date1 <= today && today < date2) {
                            eventProgress = getDaysProgress(date1, date2, today);
                            events.push({ name: `Ilustrace - ${eventName}`, progress: eventProgress });
                        } else if (date2 <= today && today < date3) {
                            eventProgress = getDaysProgress(date2, date3, today);
                            events.push({ name: `Produkty příprava - ${eventName}`, progress: eventProgress });
                        } else if (date3 <= today && today < date4) {
                            eventProgress = getDaysProgress(date3, date4, today);
                            events.push({ name: `Reklama příprava - ${eventName}`, progress: eventProgress });
                        } else if (today === date5) {
                            eventProgress = getDaysProgress(date5, date5, today);
                            events.push({ name: `${eventName}`, progress: eventProgress });
                        }
                    }
                }
            }

            // Zobrazování akcí
            if (events.length > 0) {
                events.forEach(event => {
                    let eventDiv = document.createElement("div");
                    eventDiv.classList.add("event");
                    eventDiv.style.backgroundColor = "#f0f0f0";
                    eventDiv.style.border = "1px solid #ccc";
                    //eventDiv.style.margin = "auto";
                    eventDiv.style.padding = "10px";
                    eventDiv.style.width = "80%";
                    eventDiv.style.margin = "5px auto 5px auto";
                    eventDiv.style.textAlign = "left";
                    eventDiv.style.borderRadius = "5px";
                    eventDiv.style.display = "flex";
                    eventDiv.style.flexDirection = "column";

                    let eventHeaderDiv = document.createElement("div");
                    eventHeaderDiv.classList.add("event-header");
                    eventHeaderDiv.style.display = "flex";
                    eventHeaderDiv.style.justifyContent = "space-between";
                    eventHeaderDiv.style.alignItems = "center";

                    let eventNameDiv = document.createElement("div");
                    eventNameDiv.classList.add("event-name");
                    eventNameDiv.textContent = event.name;
                    eventNameDiv.style.textAlign = "left";
                    eventNameDiv.style.flexGrow = "1";

                    let eventProgressDiv = document.createElement("div");
                    eventProgressDiv.classList.add("event-progress");
                    eventProgressDiv.textContent = `${event.progress.elapsedDays}/${event.progress.totalDays}`;
                    eventProgressDiv.style.textAlign = "right";
                    eventProgressDiv.style.marginLeft = "20px";

                    eventHeaderDiv.appendChild(eventNameDiv);
                    eventHeaderDiv.appendChild(eventProgressDiv);

                    let progressBar = document.createElement("div");
                    progressBar.classList.add("progress-bar");
                    progressBar.style.height = "8px";
                    progressBar.style.backgroundColor = getProgressBarColor(event.name);
                    progressBar.style.borderRadius = "5px";
                    progressBar.style.width = (event.progress.progress * 100) + "%";
                    progressBar.style.marginTop = "5px";

                    eventDiv.appendChild(eventHeaderDiv);
                    eventDiv.appendChild(progressBar);

                    eventContainer.appendChild(eventDiv);
                });
            } else {
                let noEventDiv = document.createElement("div");
                noEventDiv.classList.add("event");
                noEventDiv.textContent = "Dnes žádná akce";
                eventContainer.appendChild(noEventDiv);
            }
        })
        .catch(error => {
            console.error("Chyba při načítání dat:", error);
            let eventContainer = document.getElementById("event-container");
            eventContainer.innerHTML = "";
            let errorDiv = document.createElement("div");
            errorDiv.classList.add("event");
            errorDiv.textContent = "Chyba při načítání";
            eventContainer.appendChild(errorDiv);
        });

    calendarVisible = true; // Kalendář je nyní zobrazen
}

// Akce pro tlačítko, které načte/skryje kalendář
buttonKalendar.addEventListener("click", loadCalendar);

/* END vytvořit kalendář END */

/* pokladna úprava */

function updateImageSrc() {
	var imgElements = document.querySelectorAll('img');
	imgElements.forEach((img) => {
		if (img.src.includes('/related/')) {
			img.src = img.src.replace('/related/', '/detail/');
		}
	});
}

if (location.href.startsWith('https://www.artyrium.cz/admin/pokladna/')) {
	updateImageSrc();

	// Nastavení MutationObserver pro sledování změn v .cashdesk-search-result
	var observer = new MutationObserver((mutationsList) => {
		for (var mutation of mutationsList) {
			if (mutation.type === 'childList') {
				updateImageSrc();
			}
		}
	});

	// Najdeme .cashdesk-search-result prvek a začneme ho sledovat
	var targetNode = document.querySelector('.cashdesk-search-result');
	if (targetNode) {
		observer.observe(targetNode, { childList: true, subtree: true });
	} else {
		console.warn('.cashdesk-search-result element not found.');
	}
}

/* END pokladna úprava END */
