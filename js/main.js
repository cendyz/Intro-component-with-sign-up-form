const form = document.querySelector(".main__bottom-form");
const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const emailInput = document.querySelector("#email");
const passInput = document.querySelector("#pass");
const errorIcon = document.querySelectorAll(".main__bottom-form-box-img");
const errorText = document.querySelectorAll(".main__bottom-form-box-error");
const btn = document.querySelector(".main__bottom-form-btn");
const email = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;

const checkNames = (input, icon, error) => {
	input.forEach((el, index) => {
		if (el.value === "") {
			el.style.border = "1px solid #ff7a7a";
			error[index].textContent = `${el.placeholder} cannot be empty`;
			icon[index].style.display = "block";
			error[index].style.display = "block";
		} else {
			el.style.border = "1px solid #b9b6d34d";
			icon[index].style.display = "none";
			error[index].style.display = "none";
		}
	});
};

const checkEmail = input => {
	if (email.test(input.value)) {
		input.style.border = "1px solid #b9b6d34d";
		errorIcon[2].style.display = "none";
		errorText[2].style.display = "none";
	} else if (!email.test(input.value)) {
		input.style.border = "1px solid #ff7a7a";
		errorText[2].textContent = `Looks like this is not an email`;
		errorIcon[2].style.display = "block";
		errorText[2].style.display = "block";

		if (input.value === "") {
			errorText[2].textContent = `${input.placeholder} cannot be empty`;
		}
	}
};

const checkPass = input => {
	if (input.value.length < 6) {
		input.style.border = "1px solid #ff7a7a";
		errorText[3].textContent = `Password includes min. 6 characters`;
		errorIcon[3].style.display = "block";
		errorText[3].style.display = "block";

		if (input.value === "") {
			errorText[3].textContent = `${input.placeholder} cannot be empty`;
		}
	} else {
		input.style.border = "1px solid #b9b6d34d";
		errorIcon[3].style.display = "none";
		errorText[3].style.display = "none";
	}
};

const checkError = () => {
	let errorCount = 0;

	errorText.forEach(err => {
		if (err.style.display === "block") {
			errorCount++;
		}
	});
	if (errorCount === 0) {
		form.submit();
	}
};

btn.addEventListener("click", () => {
	event.preventDefault();
	checkNames([nameInput, surnameInput], errorIcon, errorText);
	checkEmail(emailInput);
	checkPass(passInput);
	checkError();
});
