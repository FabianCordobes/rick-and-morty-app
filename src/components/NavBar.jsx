import React from 'react';
import './NavBar.css';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react';
export default function NavBar({ onSearch }) {
	const [isOpen, setOpen] = React.useState(false);

	return (
		<div className="nav">
			<div className="hamburguer-menu">
				<Hamburger
					toggled={isOpen}
					toggle={setOpen}
				/>
			</div>
			{isOpen && <div>hola</div>}
			<Link to={'/'}>
				<div>LogOut</div>
			</Link>
			<Link to={'/home'}>
				<div>Home</div>
			</Link>
			<Link to={'/about'}>
				<div>About</div>
			</Link>
			<Link to={'/favorites'}>
				<div>Favorites</div>
			</Link>
			<SearchBar onSearch={onSearch} />
		</div>
	);
}
