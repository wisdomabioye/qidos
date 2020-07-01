document.addEventListener("DOMContentLoaded", function() {
	getBitcoinPrices();
	writeCurrentYear();
})

function getBitcoinPrices() {
	var dollar = "https://api.coinbase.com/v2/prices/spot?currency=USD";
	var naira = "https://api.coinbase.com/v2/prices/spot?currency=NGN";

	fetch(dollar)
	.then(toJson)
	.then(price => writeHtml(".btc-dollar", parseFloat(price.data.amount).toFixed(2)))
	.then(() => fetch(naira))
	.then(toJson)
	.then(price => writeHtml(".btc-naira", parseFloat(price.data.amount).toFixed(2)))
	.catch(console.log)
	.finally(() => setTimeout(getBitcoinPrices, 5000))
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

function writeCurrentYear() {
	var el = document.querySelector(".current-year");

	el.innerHTML = new Date().getFullYear();
}