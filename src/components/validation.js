export const validation = (user) => {
	const errors = {};
	const { email, password } = user;

	if (!email) {
		errors.email = 'El correo electronico es requerido';
	} else if (!/\S+@\S+\.\S+/.test(email)) {
		errors.email = 'El correo electronico no es válido';
	} else if (email.length > 35) {
		errors.email = 'El correo electronico no puede tener mas de 35 caracteres';
	}

	if (!password) {
		errors.passwod = 'la contraseña es requerida';
	} else if (!/\d/.test(password)) {
		errors.password = 'La contraseña debe tener al menos un numero';
	} else if (password.length < 6 || password.length > 10) {
		errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';
	}

	return errors;
};
