const fs = require('fs');
const https = require('https');
const { prefix, token } = require('./config.json');
const main = require('./scripts/main.js');


const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./scripts/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./scripts/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Online');
});


client.on('message', message => {
    if (message.channel.id === '822703872501219348') {
        client.commands.get('verification').execute(message, Discord, client);
        return;
    } else if (!message.content.startsWith(prefix) || message.author.bot) return;

    let args = message.content.substring(prefix.length).split(/ +/);
    args = main.lowerCaseArr(args);

    try {
        client.commands.get(args[0]).execute(message, args, Discord, client, https);
    } catch (error) {
        console.error(error);
        message.member.send('An error occurred while trying to process your request. Please try again or type **s!help** to see the list of commands available.')
    }
});

client.login(token);




