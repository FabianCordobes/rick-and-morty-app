import { useEffect, useState } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { addFav, removeFav } from '../redux/action';

function Card({ char, onClose, seteandoTitle, addFav, removeFav, myFavorites }) {

	const { id, name, gender, species, image } = char;

	const [isFav, setIsFav] = useState(false);

	const handleFavorite = function() {
		if (isFav) {
			setIsFav(false);
			removeFav(id);
		} else {
			setIsFav(true);
			addFav(char);
		}
	};



	useEffect(() => {
		myFavorites.forEach((fav) => {
			if (fav.id === id) {
				setIsFav(true);
			}
		});
	}, [myFavorites]);

	return (
		<div className="card">
			<button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
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





function mapStateToProps (state) {
	return {
		myFavorites: state.myFavorites,
	};
};

function mapDispatchToProps (dispatch) {
	return {
		addFav: function(char) {
			dispatch(addFav(char));
		},
		removeFav: function(id){
			dispatch(removeFav(id));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
