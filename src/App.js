import { useEffect, useState } from 'react';
import './App.css';

import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar.jsx';
import axios from 'axios';

import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/Login';
import About from './components/About';
import Detail from './components/Detail';
import ErrorNotFound from './components/ErrorNotFound';

function App() {
	const [characters, setCharacters] = useState([]);
	// console.log(characters)
	const [title, setTitle] = useState('Bienvenidos');
	const seteandoTitle = (str) => {
		setTitle(str);
	};

	function onSearch(id) {
		axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
			if (data.name) {
				const char = characters.find((ch) => ch.id === Number(id));
				if (char) return alert('ese characters ya existe');
				setCharacters((oldChars) => [...oldChars, data]);
			} else {
				window.alert('¡No hay personajes con este ID!');
			}
		});
	}
	function onClose(id) {
		const newCharacters = characters.filter((ch) => ch.id !== Number(id));
		setCharacters(newCharacters);
	}

	const { pathname } = useLocation();
	console.log(pathname);

	return (
		<div className="app">
			{/* <h1>{title}</h1> */}
			{pathname === '/' ? null : <NavBar onSearch={onSearch} />}

			<Routes>
				<Route
					path="/"
					element={<Login />}
				></Route>
				<Route
					path="/about"
					element={<About />}
				></Route>
				<Route
					path="/home"
					element={
						<Cards
							characters={characters}
							onClose={onClose}
							seteandoTitle={seteandoTitle}
						/>
					}
				></Route>
				<Route
					exact
					path="/detail/:id"
					element={<Detail />}
				></Route>
				{/* desde el Link -> /detail/algoMas */}
				{/* --> params => {id:undefined} -->next desde el Link le damos el value =>  {id:algoMas} */}
				<Route
					path="*"
					element={<ErrorNotFound />}
				/>
			</Routes>
		</div>
	);
}

export default App;
