module.exports = {
    name: 'ban',
    description: 'ban a specified user',
    execute(message, args) {
        message.delete();
        if (!message.member.roles.cache.has('618556966284951582') || !message.member.roles.cache.has('629877934949269506')) {
            message.member.send('You do not have the permission to use this command');
            return;
        }

        var reason = '';

        if (args.length < 2) {
            message.member.send('Please specify who you would like to ban, and(optional) the reason for the ban');
        } else {
            if (args.length < 3) {
                reason = 'not provided'
            } else {
                reason = args[2];
            }

            const member = message.mentions.users.first();

            member.send(`You have been banned from ${message.guild.name} by <@${message.member.id}>. Reason: + ${reason} + \nIf you would like to appeal this ban, please fill out this form: https://forms.gle/7mgg3xUe2sojjL1x8`)
            member.ban();

            message.member.send('Successfully banned ${member.tag}' + ' Reason:' + reason);
        }
    }
}
