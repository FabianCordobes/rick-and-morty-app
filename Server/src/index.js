var http = require('http');
const characters = require('./utils/data.js');

const PORT = 3001;

const server = http
	.createServer((req, res) => {
		res.setHeader('Access-Control-Allow-Origin', '*');

		// Verificar si la URL incluye "/rickandmorty/character"
		if (req.url.includes('/rickandmorty/character')) {
			const parts = req.url.split('/');
			const idIndex = parts.indexOf('character') + 1;
			const characterId = parts[idIndex];

			// Convertir el id de la URL a número
			const numId = parseInt(characterId);

			// Buscar el personaje por su id dentro del archivo data.js
			const character = characters.find((char) => char.id === numId);

			// Enviar el personaje como respuesta en formato JSON
			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify(character));
		} else {
			// Si la URL no incluye "/rickandmorty/character", responder con un mensaje de error
			res.writeHead(404, { 'Content-Type': 'text/plain' });
			res.end('Error: La URL no incluye "/rickandmorty/character"');
		}
	})
	.listen(PORT, 'localhost');

/* ⚠️ LA LÍNEA SIGUIENTE TIENE QUE QUEDAR COMO ESTÁ PARA PODER EXPORTAR EL SERVIDOR ⚠️ */
module.exports =
	/* AQUÍ DEBAJO YA PUEDES ESCRIBIR TÚ CÓDIGO REEMPLAZANDO EL VALOR DE NULL POR EL SERVIDOR */
	server;
