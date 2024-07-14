import { email, country, zipcode, password, confirmPassword } from './globals';
import { showError } from './error';

function checkEmail() {
	const emailErrorText = document.querySelector('#email + span.error');

	if (email.validity.valid) {
		emailErrorText.textContent = '';
		emailErrorText.className = 'error';
	} else {
		showError().emailError();
	}
	return email;
}

// check country
function checkCountry() {
	const countryErrorText = document.querySelector('#country + span.error');
	if (country.validity.valid) {
		countryErrorText.textContent = '';
		countryErrorText.className = 'error';
	} else {
		showError().countryError();
	}
	return country;
}

// check zipcode

function checkZipcode() {
	const zipcodeErrorText = document.querySelector('#zipcode + span.error');

	if (zipcode.validity.valid) {
		zipcodeErrorText.textContent = '';
		zipcodeErrorText.className = 'error';
	} else {
		showError().zipcodeError();
	}
	return zipcode;
}

// check
function passwordCheck() {
	let pw = null;

	function checkPassword() {
		const passwordErrorText = document.querySelector('#password + span.error');
		if (password.validity.valid) {
			passwordErrorText.textContent = '';
			passwordErrorText.className = 'error';
			pw = password.value;
		} else {
			showError().passwordError();
		}
		return password;
	}

	function checkConfirmPassword() {
		const confirmPasswordErrorText = document.querySelector(
			'#confirm-password + span.error'
		);
		let pwd = checkPassword().value;

		if (pwd === confirmPassword.value) {
			confirmPasswordErrorText.textContent = '';
			confirmPasswordErrorText.className = 'error';
			confirmPassword.setCustomValidity('');
		} else {
			showError().confirmPasswordError();
		}
		return confirmPassword;
	}

	return {
		checkPassword,
		checkConfirmPassword,
	};
}

function formSubmission(event) {
	const m = checkEmail();
	const c = checkCountry();
	const z = checkZipcode();
	const p = passwordCheck().checkPassword();
	const pc = passwordCheck().checkConfirmPassword();
	const elementsArray = [m, c, z, p, pc];
	event.preventDefault();
	isAllGood(elementsArray);
}

function isAllGood(arr) {
	const passTest = arr.every((el) => {
		return el.checkValidity();
	});

	if (passTest) {
		alert('hi five we did it! ');
	}
}
export {
	checkEmail,
	checkCountry,
	checkZipcode,
	passwordCheck,
	formSubmission,
};
