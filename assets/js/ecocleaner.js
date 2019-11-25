jQuery(document).ready(function () {
	let razem = jQuery(".razem-cena");

    razem.on("click", function (event) {
	event.preventDefault();
	let okna = jQuery("input[name='okna-cena']").val();
	let lazienka = jQuery("input[name='lazienka-cena']").val();
	let podlogi = jQuery("input[name='podlogi-cena']").val();
	let glazura = jQuery("input[name='glazura-cena']").val();
	let meble = jQuery("input[name='meble-cena']").val();
	let naczynia = jQuery("input[name='naczynia-cena']").val();
    let dywany = jQuery("input[name='dywany-cena']").val();
	let gabki = jQuery("input[name='gabki-cena']").val();
	let kosmetyki = jQuery("input[name='kosmetyki-cena']").val();
	let samochod = jQuery("input[name='samochod-cena']").val();
    let kamien = jQuery("input[name='kamien-cena']").val();
	let woda = jQuery("input[name='woda-cena']").val();


    let inne = jQuery("input[name='inne-cena']").val();
		

		let oknaVal = 0;
		let lazienkaVal = 0;
		let podlogiVal = 0;
		let glazuraVal = 0;
		let mebleVal = 0;
		let naczyniaVal = 0;
		let dywanyVal = 0;
		let gabkiVal = 0;
		let kosmetykiVal = 0;
		let samochodVal = 0;
		let kamienVal = 0;
		let wodaVal = 0;
		let inneVal = 0;
		
		if (okna.length != 0) {
			oknaVal = parseFloat(okna);
		};
		if (lazienka.length != 0){
			lazienkaVal = parseFloat(lazienka);
		};
		if(podlogi.length != 0){
			podlogiVal = parseFloat(podlogi);
		};
		if (glazura.length != 0){
			glazuraVal = parseFloat(glazura);
		};
		if (meble.length != 0){
			mebleVal = parseFloat(meble);
		};
		if (naczynia.length != 0){
			naczyniaVal = parseFloat(naczynia);
		};
		if (dywany.length != 0){
			dywanyVal = parseFloat(dywany);
		};
		if (gabki.length != 0){
			gabkiVal = parseFloat(gabki);
		};
		if (kosmetyki.length != 0){
			kosmetykiVal = parseFloat(kosmetyki);
		};
		if (samochod.length != 0){
			samochodVal = parseFloat(samochod);
		};
		if (kamien.length != 0){
			kamienVal = parseFloat(kamien);
		};
		if (woda.length != 0){
			wodaVal = parseFloat(woda);
		};
		if (inne.length != 0){
			inneVal = parseFloat(inne);
		};

        let sum = oknaVal + lazienkaVal + podlogiVal + glazuraVal + mebleVal + naczyniaVal + dywanyVal + gabkiVal + kosmetykiVal + samochodVal + kamienVal + wodaVal + inneVal;
        razem.text(`${sum} zł`);
    });
});