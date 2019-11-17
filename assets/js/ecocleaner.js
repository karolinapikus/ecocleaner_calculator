jQuery(document).ready(function () {
    let razem = jQuery(".razem-cena");
	let naczynia = jQuery("input[name='naczynia-cena']").val();
    let podlogi = jQuery("input[name='podlogi-cena']").val();
    let dywany = jQuery("input[name='dywany-cena']").val();
    let kuchnia = jQuery("input[name='kuchnia-cena']").val();
    let lazienka = jQuery("input[name='lazienka-cena']").val();
    let okna = jQuery("input[name='okna-cena']").val();
    let inne = jQuery("input[name='inne-cena']").val();

    razem.on("click", function (event) {



      	event.preventDefault()
		let naczyniaVal = 0
		let podlogiVal = 0
		let dywanyVal = 0
		let kuchniaVal = 0
		let lazienkaVal = 0
		let oknaVal = 0
		let inneVal = 0
		
		if (naczynia.length != 0) {
			naczyniaVal = parseFloat(naczynia);
		}
		if (podlogi.length != 0){
			podlogiVal = parseFloat(podlogi);
		}
		if(dywany.length != 0){
			dywanyVal = parseFloat(dywany);
		}
		if (kuchnia.length != 0){
			kuchniaVal = parseFloat(kuchnia);
		}
		if (lazienka.length != 0){
			lazienkaVal = parseFloat(lazienka);
		}
		if (okna.length != 0){
			oknaVal = parseFloat(okna)
		}
		if (inne.length != 0){
			inneVal = parseFloat(inne);
		}

        let sum = naczyniaVal + podlogiVal + dywanyVal + kuchniaVal + lazienkaVal + oknaVal + inneVal;

        razem.text(`${sum} zł`)
    })
})