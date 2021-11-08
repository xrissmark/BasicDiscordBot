require('dotenv').config();
const appServer = require('./appServer');

// SETUP BOT
const fs = require('fs')
const { Client, Channel, Collection, Intents } = require('discord.js');

const myIntents = setupIntents();

const client = new Client({ intents: myIntents });

client.commands = setupCommands();

client.once('ready', () => {
	console.log('Bot is alive!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.login(process.env.TOKEN); 

function setupIntents() {
	const myIntents = new Intents();
	myIntents.add(Intents.FLAGS.GUILDS);
	return myIntents;
}

function setupCommands() {
	let commands = new Collection();
	const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

	for (const file of commandFiles) {
		const command = require(`./commands/${file}`);
		commands.set(command.data.name, command);
	}

	return commands;
}

