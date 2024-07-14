import { email, country, zipcode, password, confirmPassword } from './globals';
import {
	checkEmail,
	checkCountry,
	checkZipcode,
	passwordCheck,
	formSubmission,
} from './checks';
import './style.css';

(function handleEventListeners() {
	const form = document.getElementById('form');

	email.addEventListener('input', checkEmail);
	country.addEventListener('input', checkCountry);
	zipcode.addEventListener('input', checkZipcode);
	password.addEventListener('input', passwordCheck().checkPassword);
	confirmPassword.addEventListener(
		'input',
		passwordCheck().checkConfirmPassword
	);
	form.addEventListener('submit', formSubmission);
})();
