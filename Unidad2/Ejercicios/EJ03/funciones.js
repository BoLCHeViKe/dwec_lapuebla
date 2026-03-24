  		/*
			  KC_EJ03
        Crea un programa que solicite una cantidad en Euros y muestre su equivalente en USD.
  		*/

function convertEur2Usd() {

    let euros = parseFloat(document.getElementById("euros").value);
    changeUsdEur=1.17;  //Cambio actual 26/09/25
    dollars = euros*changeUsdEur;

    document.getElementById("dollars").innerHTML = ' <span style="color: red;">' +dollars+ ' $</span>';
}