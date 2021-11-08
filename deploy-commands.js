require('dotenv').config();
const fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;

if (process.env.ENV_TYPE && process.env.ENV_TYPE.toLowerCase() == 'prod'){
	rest.put(Routes.applicationCommands(clientId), { body: commands })
		.then(() => console.log('Successfully registered application commands.'))
		.catch(console.error);
} else {
	rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
		.then(() => console.log('Successfully registered application commands.'))
		.catch(console.error);
}
