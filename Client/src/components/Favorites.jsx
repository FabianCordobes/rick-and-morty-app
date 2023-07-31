import Card from './Card';
import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../redux/action';

const Favorites = ({ myFavorites, onClose }) => {
	const dispatch = useDispatch();
	const [aux, setAux] = useState(false);

	const handleOrder = (event) => {
		dispatch(orderCards(event.target.value));
		setAux(true);
	}

	const handleFilter = (event) => {
		dispatch(filterCards(event.target.value))
	}
	
	return (
		<div>
			<select onChange={handleOrder}>
				<option value="A">Ascendente</option>
				<option value="D">Descendente</option>
			</select>

			<select onChange={handleFilter}>
				<option value="Male">Male</option>
				<option value="Female">Female</option>
				<option value="Genderless">Genderless</option>
				<option value="unknown">Unknown</option>
				<option value="allCharacters">All Characters</option>
			</select>
			{myFavorites?.map((char) => {
				return (
					<Card
						key={char.id}
						char={char}
						onClose={onClose}
					></Card>
				);
			})}
		</div>
	);
};

function mapStateToProps(state) {
	return {
		myFavorites: state.myFavorites,
	};
}

export default connect(mapStateToProps)(Favorites);
