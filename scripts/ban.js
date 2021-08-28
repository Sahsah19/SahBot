module.exports = {
    name: 'ban',
    description: 'ban a specified user',
    execute(message, args) {
        message.delete();
        if (message.member.roles.cache.has('618556966284951582') === false || message.member.roles.cache.has('629877934949269506') === false) {
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
                for(var i = 2; i < args.length; i++){
                    reason = `${reason} ${args[i]} `; 
                }
            }

            const member = message.mentions.users.first();

            try{
                const target = message.guild.members.resolve(member);

                reasonMsg = `You have been banned from ${message.guild.name} by <@${message.member.id}>. Reason: ${reason}\nIf you would like to appeal this ban, please fill out this form: https://forms.gle/7mgg3xUe2sojjL1x8`;

                target.send(reasonMsg);
                target.kick();
            } catch(error){
                message.member.send('An error occurred while processing your request.')
            }
            

            message.member.send(`Successfully banned ${member.tag}. Reason: ${reason}`);
        }
    }
}
