const showError = () => {
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
		const confirmPassword = document.getElementById('confirm-password');
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

// check email
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
		const confirmPassword = document.getElementById('confirm-password');
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
(function handleEventListeners() {
	const email = document.getElementById('email');
	const country = document.getElementById('country');
	const zipcode = document.getElementById('zipcode');
	const form = document.getElementById('form');
	const password = document.getElementById('password');
	const confirmPassword = document.getElementById('confirm-password');

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
