import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './action-types';

const initialState = {
	myFavorites: [],
	allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_FAV:
			return {
				...state,
				myFavorites: [payload, ...state.allCharacters],
				allCharacters: [payload, ...state.allCharacters],
			};
		case REMOVE_FAV:
			const newFavorites = state.myFavorites.filter((char) => {
				return char.id !== payload;
			});
			return {
				...state,
				myFavorites: newFavorites,
			};

		case FILTER:
			const allCharactersFiltered = state.allCharacters.filter(
				(character) => character.gender === payload
			);
			return {
				...state,
				myFavorites: 
					payload === 'allCharacters'
					? [...state.allCharacters]
					: allCharactersFiltered,
			};

		case ORDER:
			const allCharactersCopy = [...state.allCharacters];
			return {
				...state,
				myFavorites:
					payload === 'A'
						? allCharactersCopy.sort((a, b) => a.id - b.id)
						: allCharactersCopy.sort((a, b) => b.id - a.id),
			};

		default:
			return { ...state };
	}
};

export default reducer;
