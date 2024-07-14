import { email, country, zipcode, password, confirmPassword } from './globals';

export const showError = () => {
	const emailError = () => {
		const emailErrorText = document.querySelector('#email + span.error');
		if (email.validity.typeMismatch) {
			emailErrorText.textContent = 'Fix this shit! Enter an EMAIL!';
		} else if (email.validity.valueMissing) {
			emailErrorText.textContent = 'Please Enter a goddam Email Address!';
		}
	};

	const countryError = () => {
		const countryErrorText = document.querySelector('#country + span.error');
		if (country.validity.tooShort) {
			countryErrorText.textContent = 'Country Must Be At leat 3 Characters';
		} else if (country.validity.valueMissing) {
			countryErrorText.textContent = 'Where you from cuh?!';
		}
	};

	const zipcodeError = () => {
		const zipcodeErrorText = document.querySelector('#zipcode + span.error');

		if (zipcode.validity.patternMismatch) {
			zipcodeErrorText.textContent =
				'Numbers Only and needs to be at least 5 characters long';
		} else if (zipcode.validity.tooShort) {
			zipcodeErrorText.textContent = 'NEEDS TO BE LONGER!';
		} else if (zipcode.validity.valueMissing) {
			zipcodeErrorText.textContent = 'Please Enter a goddam Zipcode!';
		}
	};

	const passwordError = () => {
		const passwordErrorText = document.querySelector('#password + span.error');

		if (password.validity.patternMismatch) {
			passwordErrorText.textContent = `Password must sastify the following requirements:
			1 lowercase letter
			1 uppercase letter
			1 number
			1 special character
			8 characters long`;
		} else if (password.validity.valueMissing) {
			passwordErrorText.textContent = 'Please create a password';
		}
	};

	const confirmPasswordError = () => {
		const confirmPasswordErrorText = document.querySelector(
			'#confirm-password + span.error'
		);
		confirmPassword.setCustomValidity('wrrrrrong');
		confirmPasswordErrorText.textContent = 'passwords do not match!!';
	};
	return {
		emailError,
		countryError,
		zipcodeError,
		passwordError,
		confirmPasswordError,
	};
};
