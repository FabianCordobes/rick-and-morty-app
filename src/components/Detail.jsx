import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Detail.css';

export default function Detail() {
	const navigate = useNavigate();
	const { id } = useParams();
	const [character, setCharacter] = useState({});
	
	//TODO: MOUNT <-> upDate ID
	useEffect(() => {
		axios(`https://rickandmortyapi.com/api/character/${id}`)
			.then(({ data }) => {
				if (data.name) {
					setCharacter(data);
				}
			})
			.catch((err) => {
				window.alert('No hay personajes con ese ID');
				navigate('/home');
			});
		return setCharacter({});
	}, [id]);

	return (
		<div className="detail">
			<div className="text">
				<h3>Id: {id}</h3>
				<h1>{character.name}</h1>
				<h2>Status: {character.status}</h2>
				<p>Specie: {character.species}</p>
				<p>Gender: {character.gender}</p>
				<p>Origin: {character.origin?.name}</p>
			</div>
			<div className="img">
				<img
					src={character.image}
					alt={character.name}
				></img>
			</div>
		</div>
	);
}
