const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Reply with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};
