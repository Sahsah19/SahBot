module.exports = {
    name: 'unmute',
    description: 'unmute a user',
    execute(message){
        message.delete();

        if (message.member.roles.cache.has('618556966284951582') === false || message.member.roles.cache.has('629877934949269506' === false)) {
            message.member.send('You do not have the permission to use this command');
            return;
        }

        const target = message.mentions.users.first();
        const unmuteTarget = message.guild.members.cache.get(target.id);

        unmuteTarget.roles.remove('779077760995164200');
        unmuteTarget.send(`You have been unmuted by <@${message.member.id}>`);
    }
}