const embeds = require('./sources/embeds');

module.exports = {
    name: 'help',
    description: 'Sends help messages to assist user in command application',
    execute(message, args) {
        switch (args[1]) {

            default:
                message.channel.send(embeds.helpEmbed);
                break;
        }
    }
}
