// const axios = require('axios')
// const URL = "https://rickandmortyapi.com/api/character/"

// const getCharById = (req, res)=> {
//     const { id } = req.params
//     axios(URL + id)
//     .then(({ data })=> {
//         const { id, status, name, species, origin, image, gender } = data
//         const character = { id, status, name, species, origin, image, gender }

//         return character.name ?
//         res.json(character) : res.status(404).send('Not found')
//     })
//     .catch((error)=> {
//         return res.status(500).send(error.message)
//     })

// }

// module.exports = {
//     getCharById
// }

const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character';

const getCharById = (req, res) => {
	const { id } = req.params;

	axios(`${URL}/${id}`)
		.then((response) => response.data)
		.then(({ name, status, origin, image, species, gender }) => {
			if (name) {
				const character = {
					id,
					name,
					species,
					origin,
					image,
					gender,
					status,
				};
				return res.status(200).json(character); //.json se usa para obj de javascript
			}
			// no es necesario colocar un else ya que el return corta el resultado
			return res.status(404).send('Not found');
		})
		.catch((error) => res.status(500).send(error.message));
};

module.exports = {
	getCharById,
};
