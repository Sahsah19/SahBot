const main = require('./main');
const roles = require('./sources/roles.json');
const embeds = require('./sources/embeds');
const members = ['291709610270654474', '290287999583780864', '355917314115371009'];
const channels = ['697521141903917142', '688086693890228366', '870110653904461825', '688104755226083419', '699035283961806948'];

module.exports = {
    name: 'rolereact',
    description: 'Command for the Role Reaction Setup',
    async execute(message, args, Discord, client){
        message.delete();

        if(main.compareTo(members, message.member.id) === 0 || main.compareTo(channels, message.channel.id) === 0) {
            message.member.send('You cannot use this command, or you cannot use it in this channel.');
            return;
        }

        for(var i = 0; i < embeds.roleEmbeds.length; i++){
            let messageEmbed = await message.channel.send(embeds.roleEmbeds[i]);
            
            for(var f = 0; f < roles.length; f++){
                if(roles[f].class_category === embeds.categories[i]){
                    messageEmbed.react(roles[f].symbol);
                }
            }

            main.sleep(500);
        }

        client.on('messageReactionAdd', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot || !reaction.message.guild) return;

            if(main.compareTo(channels, reaction.message.channel.id) > 0){
                for(var g = 0; g < roles.length; g++){
                    if(reaction.emoji.name === roles[g].symbol){
                        const role = message.guild.roles.cache.find(role => role.name === roles[g].role_name);
                        await reaction.message.guild.members.cache.get(user.id).roles.add(role);
                    }
                }
            } else {
                return;
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot || !reaction.message.guild) return;

            if(main.compareTo(channels, reaction.message.channel.id) > 0){
                for(var g = 0; g < roles.length; g++){
                    if(reaction.emoji.name === roles[g].symbol){
                        const role = message.guild.roles.cache.find(role => role.name === roles[g].role_name);
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                    }
                }
            } else {
                return;
            }
        });
    }
}
