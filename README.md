# Basic Discord Bot

This is a simple Discord Bot using [discordjs](https://github.com/discordjs/discord.js) v13.3.1.  
Use it as a framework to your bots. It comes with a ping command out of the box to you use as a guide!

## Setup instructions
Create .env file on root and fulfil with the required informations:       
```js
TOKEN = bot_token  
CLIENT_ID = bot_application_id  
GUILD_ID = your_guild_id_for_dev_tests  
ENV_TYPE = dev_or_prod  
```
  
Install dependecies:  
```sh-session 
npm ci  
```
  
Every time you add a new command to the bot, you'll have to register the commands again, using the command bellow.  
NOTE: Discord servers have 1h cooldown to register your commands again. To avoid this, use ENV_TYPE = dev and the proper guild to test it.
```sh-session 
npm run deploy 
```
Wake up the bot!  
```sh-session
npm start
```
  
Will be there more informations on this project Wiki. Wait for it.  
  
## Some important links and guides

https://discord.js.org/#/docs/main/stable/general/welcome  
https://discordjs.guide/#before-you-begin

<!-- LICENSE -->
## License

Distributed under the Apache License 2.0. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>
