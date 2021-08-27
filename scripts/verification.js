module.exports = {
    name: 'verification',
    description: 'file for server verification',
    async execute(message, Discord, client) {
        message.delete();
        let verificationMsg = await client.channels.cache.get('877434325451305000').send(message.content);

        verificationMsg.react('✅');

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot || !reaction.message.guild) return;

            if (reaction.message.channel.id === '877434325451305000') {
                if (reaction.emoji.name === '✅') {
                    await message.member.roles.add('616469070321025024');
                }
            } else {
                return;
            }
        });
    }
}