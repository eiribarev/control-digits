function validateInput() {
	let inputText = String(document.getElementById("stockNumberInput").value);
	let errorMessage = document.getElementById("incorrectInputMsg");

	inputText = inputText.replace(/ +/g, "");

	if (inputText.search(/[^0-9]/) != -1 || (inputText.length != 5 && inputText.length != 9 && inputText.length != 11)){
		errorMessage.style = "opacity: 1";

		document.getElementById("fullNumber").style.removeProperty("opacity");

		setTimeout(function() {document.getElementById("calculator").style.removeProperty("height");}, 300);
	}
	else {
		errorMessage.removeAttribute("style");

		document.getElementById("calculator").style.height = "120px";

		document.getElementById("fullNumber").style.display = "inline-block";

		updateNumber(inputText);
	}
}
function updateNumber(stockNumber) {
	let control = String(controlDigit(stockNumber));

	document.getElementById("fullNumber").style.removeProperty("opacity");

	setTimeout(function() {
		if (stockNumber.length == 5){
			document.getElementById("stockType").style.visibility = "hidden";
			document.getElementById("countryCode").style.visibility = "hidden";
			document.getElementById("countryCode").style.marginRight = "10px";
			document.getElementById("leadingZeroes").style.visibility = "hidden";
			document.getElementById("stockClass").style.marginLeft = "-95px";

			document.getElementById("stockClass").innerHTML = stockNumber.substr(0, 2);
			document.getElementById("stockNumber").innerHTML = stockNumber.substr(2, 3);
			document.getElementById("controlDigitSeparator").innerHTML = ".";
			document.getElementById("controlDigit").innerHTML = control;
		}
		if (stockNumber.length == 9){
			document.getElementById("stockType").style.removeProperty("visibility");
			document.getElementById("countryCode").style.removeProperty("visibility");
			document.getElementById("countryCode").style.marginRight = "10px";
			document.getElementById("leadingZeroes").style.visibility = "hidden";
			document.getElementById("stockClass").style.marginLeft = "-62px";

			document.getElementById("stockType").innerHTML = stockNumber.substr(0, 2);
			document.getElementById("countryCode").innerHTML = stockNumber.substr(2, 2);
			document.getElementById("stockClass").innerHTML = stockNumber.substr(4, 2);
			document.getElementById("stockNumber").innerHTML = stockNumber.substr(6, 3);
			document.getElementById("controlDigitSeparator").innerHTML = ".";
			document.getElementById("controlDigit").innerHTML = control;
		}
		if (stockNumber.length == 11){
			document.getElementById("stockType").style.removeProperty("visibility");
			document.getElementById("countryCode").style.removeProperty("visibility");
			document.getElementById("countryCode").style.removeProperty("margin-right");
			document.getElementById("leadingZeroes").style.removeProperty("visibility");
			document.getElementById("stockClass").style.removeProperty("margin-left");

			document.getElementById("stockType").innerHTML = stockNumber.substr(0, 2);
			document.getElementById("countryCode").innerHTML = stockNumber.substr(2, 2);
			document.getElementById("stockClass").innerHTML = stockNumber.substr(6, 2);
			document.getElementById("stockNumber").innerHTML = stockNumber.substr(8, 3);
			document.getElementById("controlDigitSeparator").innerHTML = "-";
			document.getElementById("controlDigit").innerHTML = control;
		}
	}, 500)

	setTimeout(function() {document.getElementById("fullNumber").style.opacity = "1";}, 800);
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
