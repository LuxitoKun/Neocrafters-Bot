const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');
});
                               
client.on('message', message => {
    if (message.content === 'ip') {
    	message.reply('mc.neocrafters.es');
        client.user.setPresence({ game: { name: mc.neocrafters.es }, status 'online' }); 
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
