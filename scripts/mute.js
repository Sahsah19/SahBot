const ms = require('ms');

module.exports = {
    name: 'mute',
    description: 'mute a certain user',
    execute(message, args) {
        message.delete();

        if (message.member.roles.cache.has('618556966284951582') === false || message.member.roles.cache.has('629877934949269506') === false) {
            message.member.send('You do not have the permission to use this command');
            return;
        }

        const target = message.mentions.users.first();
        const muteTarget = message.guild.members.cache.get(target.id);

        muteTarget.roles.add('779077760995164200');
        muteTarget.send(`You have been muted by <@${message.member.id}>`);

        if (args.length > 2) {
            muteTarget.send(`You have been muted for ${args[2]} by <@${message.member.id}>`);
            setTimeout(function () {
                muteTarget.roles.remove('779077760995164200')
            }, ms(args[2]));
        }
    }
}