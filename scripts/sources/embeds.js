const {genRoleStr, getTitle, getColor} = require('./../main');
const Discord = require('discord.js');


const color = '#00cdc4';
const roleEmbeds = [];
const categories = ['main', 'eng', 'math', 'sst', 'sci', 'wlang', 'comp', 'misc'];

const helpEmbed = new Discord.MessageEmbed()
    .setColor(color)
    .setTitle('SahBot Command List')
    .setDescription('Use s!help and one of the suffixes listed below to access help pages <@291709610270654474>')
    .addField('Admin Commands', 'Commands only accessible by admins, type s!help admin')
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

function pollEmbeds(){
    
}

module.exports = {
    helpEmbed: helpEmbed,
    roleEmbeds: roleEmbeds,
    categories: categories,
    newPollEmbed, newPollEmbed
}
        