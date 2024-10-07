const form = document.querySelector(".main__bottom-form");
const inputs = document.querySelectorAll("#name, #surname, #email, #pass");
const errorIcon = document.querySelectorAll(".main__bottom-form-box-img");
const errorText = document.querySelectorAll(".main__bottom-form-box-error");
const btn = document.querySelector(".main__bottom-form-btn");
const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;

const setError = (input, index, message) => {
	input.style.border = "1px solid #ff7a7a";
	errorText[index].textContent = message;
	errorIcon[index].style.display = "block";
	errorText[index].style.display = "block";
};

const clearError = (input, index) => {
	input.style.border = "1px solid #b9b6d34d";
	errorIcon[index].style.display = "none";
	errorText[index].style.display = "none";
};

const checkInput = (input, index) => {
	if (input.value === "") {
		setError(input, index, `${input.placeholder} cannot be empty`);
	} else if (input.id === "email" && !emailRegex.test(input.value)) {
		setError(input, index, "Looks like this is not an email");
	} else if (input.id === "pass" && input.value.length < 6) {
		setError(input, index, "Password includes min. 6 characters");
	} else {
		clearError(input, index);
	}
};

const checkError = () => {
	return Array.from(errorText).every(err => err.style.display !== "block");
};

btn.addEventListener("click", event => {
	event.preventDefault();
	inputs.forEach((input, index) => checkInput(input, index));
	if (checkError()) form.submit();
});
