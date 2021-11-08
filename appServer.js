const express = require('express');

const appServer = express();

appServer.get("/", (request, response) => {
	const ping = new Date();
	ping.setHours(ping.getHours() - 3);
	console.log(`Ping received at ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
	response.sendStatus(200);
});

appServer.listen(process.env.PORT);
