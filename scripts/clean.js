module.exports = {
    name: 'clean',
    description: 'Clears a specificied number of messages in the channel the user is in',
    execute(message, args) {
        message.delete();
        if (args.length === 2) {
            if (message.member.roles.cache.has('616468574709743663') === true || message.member.roles.cache.has('629877934949269506') === true) {
                if (args[1] > 100 || args[1] < 2) {
                    message.member.send('You need to provide a valid number in between ranges 2-100');
                } else {
                    message.channel.bulkDelete(args[1]);
                }
            } else {
                message.member.send('You don\'t have permissions to use this command, required role: Admin');
            }
        } else {
            message.member.send('You need to provide the number of messages you want to delete');
        }
    }

}