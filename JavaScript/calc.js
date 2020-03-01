function validateInput() {
	let inputText = String(document.getElementById("stockNumberInput").value);
	let errorMessage = document.getElementById("incorrectInputMsg");

	inputText = inputText.replace(/ +/g, "");

	if (inputText.search(/[^0-9]/) != -1 || (inputText.length != 5 && inputText.length != 9 && inputText.length != 11)){
		errorMessage.style = "opacity: 1";
	}
	else {
		errorMessage.removeAttribute("style");
	}
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
