document.addEventListener("DOMContentLoaded", function() {
	getBitcoinPrices();
})

function getBitcoinPrices() {
	var dollar = "https://api.coinbase.com/v2/prices/spot?currency=USD";
	var naira = "https://api.coinbase.com/v2/prices/spot?currency=NGN";

	fetch(dollar).then(toJson).then(price => writeHtml(".btc-dollar", parseFloat(price.data.amount).toFixed(2)))
	fetch(naira).then(toJson).then(price => writeHtml(".btc-naira", parseFloat(price.data.amount).toFixed(2)))
}


function toJson(res) {
	return res.json();
}

function writeHtml(el, content) {
	var element = document.querySelector(el);

	if (element) {
		element.textContent = content;
	}
} 