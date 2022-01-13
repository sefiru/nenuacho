var last = "";
let timerId = setInterval(function() {
	var p = document.querySelector(".community-points-summary").textContent.replace(/\s/g, '');
	p = p.replace('тыс.', 'k');
	p = p.replace(/\+[56]0/g, '');
	p = p.replace(/(\+[\d][\d][\d]?){2,}/, '$1');
	p = p.replace('Щелкните,чтобыполучитьбонус!', '');
	if ( document.querySelector('[aria-label="Claim Bonus"]') ) {
		console.log( new Date().toLocaleTimeString([], {timeStyle: 'short'}) + " " + p + " !");
		document.querySelector('[aria-label="Claim Bonus"]').dispatchEvent(new Event("click", {"bubbles":true, "cancelable":false}));
	} else {
		if ( p != last ) {
			last = p;
			console.log( new Date().toLocaleTimeString([], {timeStyle: 'short'}) + " " + p );
		}
	}
}, 1000);