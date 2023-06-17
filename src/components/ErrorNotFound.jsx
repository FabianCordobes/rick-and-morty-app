import React from 'react';
import ErrorImg from '../images/error.png'

export default function ErrorNotFound() {
	return (
		<div className="error-img">
			<h1>Erorr</h1>
			<img
				src={ErrorImg}
				alt="Error 404"
			/>
		</div>
	);
}
