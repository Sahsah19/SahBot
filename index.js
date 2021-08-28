const fs = require('fs');
const https = require('https');
const { prefix, token, verification, rules } = require('./config.json');
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
    if (message.channel.id === verification) {
        client.commands.get('verification').execute(message, Discord, client);
        return;
    } else if (!message.content.startsWith(prefix) || message.author.bot) return;

    let args = message.content.substring(prefix.length).split(/ +/);
    args = main.lowerCaseArr(args);

    try {
        client.commands.get(args[0]).execute(message, args, Discord, client, https);
    } catch (error) {
        message.delete();
        console.error(error);
        message.member.send('An error occurred while trying to process your request.')
    }
});

client.on('guildMemberAdd', member => {
    member.send(`Welcome to the ${member.guild.name} Discord Server!\nBefore you get started please read the server rules located in the <#${rules}>\nthen head over to the <#${verification}> channel to get verified and access to the server.`);
})

client.login(token);




