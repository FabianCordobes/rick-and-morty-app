import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AnimLogo from '../images/anim-logo-pixelgif-unscreen.gif';
import Form from './Form';
import axios from 'axios';

export default function Login() {
	const [showForm, setShowForm] = useState(false);

	const handleLogin = () => {
		setShowForm(true);
	};

	const navigate = useNavigate();
	const [access, setAccess] = useState(false);
	const EMAIL = 'ejemplo@gmail.com';
	const PASSWORD = 'password12';

	function login(userData) {
		const { email, password } = userData;
		const URL = 'http://localhost:3001/rickandmorty/login/';
		axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
			const { access } = data;
			setAccess(data);
			access && navigate('/home');
		});
	}

	useEffect(() => {
		!access && navigate('/');
	}, [access]);

	return (
		<div className="login">
			<img
				src={AnimLogo}
				alt="Anim Logo"
			/>

			{showForm ? (
				<Form login={login} />
			) : (
				<div className="acid">
					<button onClick={handleLogin}>Ingresar</button>
				</div>
			)}
		</div>
	);
}
