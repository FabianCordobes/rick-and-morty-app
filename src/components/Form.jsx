import React, { useState } from 'react';
import { validation } from './validation';
import './Form.css';

export default function Form({ login }) {
	const [userData, setUserData] = useState({
		email: '',
		password: '',
	});

	const handleChange = (event) => {
		setUserData({
			...userData,
			[event.target.name]: event.target.value,
		});
	};

	const [errors, setErrors] = useState({});

	const handleSubmit = (event) => {
		event.preventDefault();
		const validationErrors = validation(userData);
		setErrors(validationErrors);
		if (
			validationErrors.hasOwnProperty('email') ||
			validationErrors.hasOwnProperty('password')
		) {
			return;
		}
		login(userData); //else alert('Esta todo bien');
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="login-form"
		>
			<h1>Login</h1>
			<label htmlFor="email">Email: </label>
			<input
				name="email"
				type="text"
				value={userData.email}
				onChange={handleChange}
				placeholder="Ingrese su mail..."
			/>
			{errors.email && <p>{errors.email}</p>}
			<label htmlFor="password">Password: </label>
			<input
				name="password"
				type="password"
				value={userData.password}
				onChange={handleChange}
				placeholder="Ingrese su contraseña..."
				required
			/>
			{errors.password && <p>{errors.password}</p>}

			<button
				className={
					userData.email.length < 1 || userData.password.length < 1
						? 'invalid-data'
						: 'valid-data'
				}
				disabled={userData.email.length < 1 || userData.password.length < 1}
			>
				Submit
			</button>
		</form>
	);
}
