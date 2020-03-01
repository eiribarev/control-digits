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
