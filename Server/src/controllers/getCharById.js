const axios = require('axios');

const getCharById = (res, id) => {
	const APIURL = `https://rickandmortyapi.com/api/character/${id}`;

	axios
		.get(APIURL)
		.then((response) => {
			const character = {
				id: id,
				name: response.data.name,
				gender: response.data.gender,
				species: response.data.species,
				origin: response.data.origin.name,
				image: response.data.image,
				status: response.data.status,
			};

			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify(character));
		})
		.catch((error) => {
			const errorMessage =
				error.message || 'Error en la solicitud a la API de Rick & Morty';
			res.writeHead(404, { 'Content-Type': 'text-plain' });
			res.end(errorMessage);
		});
};

module.exports = getCharById;
