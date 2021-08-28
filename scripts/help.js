const {helpEmbed, modHelp} = require('./sources/embeds');

module.exports = {
    name: 'help',
    description: 'Sends help messages to assist user in command application',
    execute(message, args) {
        message.channel.send('Sent a DM to you');

        if (message.member.roles.cache.has('618556966284951582') === false || message.member.roles.cache.has('629877934949269506') === false) {
            message.member.send('There are currently no commands for you to use D: as of the moment');
            return;
        }

        switch (args[1]) {

            case 'mod':
                message.member.send(modHelp);
                break;

            default:
                message.member.send(helpEmbed);
                break;
        }
    }
}
