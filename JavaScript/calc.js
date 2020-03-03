function validateInput() {
	let inputText = String(document.getElementById("stockNumberInput").value);
	let errorMessage = document.getElementById("incorrectInputMsg");

	inputText = inputText.replace(/ +/g, "");

	if (inputText.search(/[^0-9]/) != -1 || (inputText.length != 5 && inputText.length != 9 && inputText.length != 11)){
		errorMessage.style = "opacity: 1";

		document.getElementById("fullNumber").style.removeProperty("opacity");

		setTimeout(function() {document.getElementById("calculator").style.removeProperty("height");}, 700);
	}
	else {
		errorMessage.removeAttribute("style");

		document.getElementById("calculator").style.height = "120px";

		document.getElementById("fullNumber").style.display = "inline-block";

		setTimeout(function() {handleNumber(inputText);}, 700);
	}
}

function handleNumber(stockNumber) {
	let control = String(controlDigit(stockNumber));

	document.getElementById("fullNumber").style.opacity = "1";
}

function controlDigit(stockNumber) {
	let out = 0;
	let curr;

	for (let i = 0; i < stockNumber.length; i++){
		curr = Number(stockNumber[i]) * ((i % 2 == 0) ? 2 : 1);
		out += Math.floor(curr / 10) + curr % 10;
	}

	return (Math.floor(out / 10) + 1) * 10 - out;
}
