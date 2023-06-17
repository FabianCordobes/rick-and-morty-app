import { useEffect } from 'react';
import './Card.css';

import { Link } from 'react-router-dom';

export default function Card({ char, onClose, seteandoTitle }) {
	// obj
	const { id, name, gender, species, origin, image, status } = char;

	useEffect(() => {
		seteandoTitle('jujuuu el component Card se ha montado y ya hemos iniciado');
	}, []); // Mount

	useEffect(() => {
		return function () {
			seteandoTitle('bye bye nos hemos desmontado');
		};
	}, []); // willMount

	return (
		<div className="card">
			<div className="close">
				<button onClick={() => onClose(id)}>X</button>
			</div>
			<div className="info">
				<Link to={`/detail/${id}`}>
					<h2>{name}</h2>
					{/* <h2>{status}</h2> */}
					<h2>{species}</h2>
					{/* <h2>{gender}</h2>
         <h2>{origin?.name}</h2> */}
					<img
						src={image}
						alt={name}
					/>
				</Link>
			</div>
		</div>
	);
}
