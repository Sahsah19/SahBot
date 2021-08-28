const {genRoleStr, getTitle, getColor} = require('./../main');
const Discord = require('discord.js');


const color = '#00cdc4';
const roleEmbeds = [];
const categories = ['main', 'eng', 'math', 'sst', 'sci', 'wlang', 'comp', 'misc'];

const helpEmbed = new Discord.MessageEmbed()
    .setColor(color)
    .setTitle('SahBot Command List')
    .setDescription('Use s!help and one of the suffixes listed below to access help pages')
    .addField('Moderator Commands', 'Commands only accessible by mods, type s!help mod')
    .setFooter('Prefix: s! | A new look 😏')
    .setTimestamp();

const modHelp = new Discord.MessageEmbed()
    .setColor(color)
    .setTitle('Commands for Moderators')
    .setDescription('Use s! and add one of the commands below to use them with the proper arguments. **When <user> is given simply just tag the user you would like to target**')
    .addFields(
        {name: 'mute', value: 'usage: s!mute <user> <time> | **For the time period insert something simple in 1 word such as: \'1d\' or \'10min\'**'},
        {name: 'unmute', value: 'usage: s!unmute <user> | **If you have timed mute someone, do not use this command unless it is important**'},
        {name: 'ban', value: 'usage: s!ban <user> | **This command will kick someone out of the server**'},
        {name: 'poll', value: 'usage: **WIP**'}
    )
    .setFooter('Prefix: s! | A new look 😏')
    .setTimestamp();

for(var i = 0; i < categories.length; i++){
    const newRole = new Discord.MessageEmbed()
        .setColor(getColor(categories[i]))
        .setTitle(getTitle(categories[i]))
        .setDescription('React to one of the emojis below to receive the role that corresponds to your class.')
        .addField('___Available Classes/Roles___', genRoleStr(categories[i]));

    roleEmbeds.push(newRole);
}

function newPollEmbed(title, currDate, date){
    const newPoll = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle(title)
        .addField('___Options___', 'Yes - 👍\nNo - 👎')
        .setFooter('Poll started at: ' + currDate + ' | Poll ends at: ' + date);

    return newPoll;
}   

const roleStart = new Discord.MessageEmbed()
    .setColor(color)
    .setTitle('RoleReactions')
    .setDescription('Simply react to the classes that you are taking to see the channels that coordinate with those specific classes. If you would like to add another role to this system please fill out this google form https://forms.gle/LTeEsyt4wPBqWmD97. **When the system resets, you may see that your previous reactions may have been removed. If you would like to remove your current roles and this happens simply just react and unreact to the specific role.** Please DM <@291709610270654474> if you have any issues.')
    .setFooter('Prefix: s! | A new look 😏');

module.exports = {
    helpEmbed: helpEmbed,
    modHelp: modHelp,
    roleEmbeds: roleEmbeds,
    categories: categories,
    newPollEmbed, newPollEmbed,
    roleStart: roleStart
}
        