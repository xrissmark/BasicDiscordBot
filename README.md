# Basic Discord Bot

This is a simple Discord Bot using [discordjs](https://github.com/discordjs/discord.js) v13.3.1.  
Use it as a framework to your bots. It comes with a ping command out of the box to you use as a guide!

## Setup instructions
See it [on the project Wiki](https://github.com/xrissmark/BasicDiscordBot/wiki/Setup-Instructions)!
  
## Adding Commands to your bot!
  
Create a new file on `commands` folder, naming it with the new Bot Command name you like and add .js extension.
```js
ex.: ping.js
```
  
To reply the Bot Command with text, you can use:
```js
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('command_name')
		.setDescription('A short description to what the command will do!'),
	async execute(interaction) {
		await interaction.reply('The reply text that the bot will send!');
	},
};
```
  
Note: you always have to reply the `interaction`. And you can only do it once.

Register new Bot Command using the command bellow. Important: read about it on the [Setup Instructions Wiki page](https://github.com/xrissmark/BasicDiscordBot/wiki/Setup-Instructions).

```sh-session
npm run deploy 
```
  
I'm trying to make it easier to answer interactions, or send messages freely on the guild, but meanwhile you can see more about how to do other stuff than reply with text reading [The DiscordJS Guide](https://discordjs.guide/#before-you-begin).
  
## Some important links and guides

https://discord.js.org/#/docs/main/stable/general/welcome  
https://discordjs.guide/#before-you-begin

<!-- LICENSE -->
## License

Distributed under the Apache License 2.0. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>
