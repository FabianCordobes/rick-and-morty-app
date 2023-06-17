import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AnimLogo from '../images/anim-logo-pixelgif-unscreen.gif';
import Form from './Form';

export default function Login() {
	const [showForm, setShowForm] = useState(false);

	const handleLogin = () => {
		setShowForm(true);
	};

	

	return (
		<div className="login">
			<img
				src={AnimLogo}
				alt="Anim Logo"
			/>

			{showForm ? (
				<Form />
			) : (
				<div className="acid">
					<button onClick={handleLogin}>Ingresar</button>
				</div>
			)}
		</div>
	);
}
