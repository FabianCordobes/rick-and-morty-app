import { useEffect, useState } from 'react';
import './App.css';

import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar.jsx';
import axios from 'axios';
import { connect } from 'react-redux';
import { addFav, removeFav } from './redux/action';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import About from './components/About';
import Detail from './components/Detail';
import ErrorNotFound from './components/ErrorNotFound';
import Favorites from './components/Favorites';

function App({ removeFav }) {
	const { pathname } = useLocation();

	const [characters, setCharacters] = useState([]);

	const onSearch = (id) => {
		axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
			if (data.name) {
				const char = characters.find((ch) => ch.id === Number(id));
				if (char) return alert('ese characters ya existe');
				setCharacters((oldChars) => [...oldChars, data]);
			} else {
				window.alert('¡No hay personajes con este ID!');
			}
		});
	};

	const onClose = (id) => {
		const newCharacters = characters.filter((ch) => ch.id !== Number(id));
		setCharacters(newCharacters);
		removeFav(Number(id));
	};

	return (
		<div className="app">
			{pathname === '/' ? null : <NavBar onSearch={onSearch} />}

			<Routes>
				<Route
					path="/"
					element={<Login />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/home"
					element={
						<Cards
							characters={characters}
							onClose={onClose}
						/>
					}
				/>
				<Route
					exact
					path="/detail/:id"
					element={<Detail />}
				/>
				<Route
					path="/favorites"
					element={<Favorites onClose={onClose} />}
				/>
				<Route
					path="*"
					element={<ErrorNotFound />}
				/>
			</Routes>
		</div>
	);
}

function mapDispatchToProps(dispatch) {
	return {
		addFav: function (char) {
			dispatch(addFav(char));
		},
		removeFav: function (id) {
			dispatch(removeFav(id));
		},
	};
}

export default connect(null, mapDispatchToProps)(App);
