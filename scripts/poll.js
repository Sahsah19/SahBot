const ms = require('ms');
const embeds = require('./sources/embeds');
const { prefix } = require('./../config.json');
const polls = require('./sources/polls.json');

module.exports = {
    name: 'poll',
    description: 'Create a new poll',
    async execute(message, args, Discord){
        //message.delete();

        const date = new Date();
        const currDate = date.toLocaleString();
        date.setTime(Date.now() + ms(args[1])); 
        const setDate = date.toLocaleString()

        if(message.content.includes('\"') || message.content.includes('\'')){
            let quoteAt = [];

            for (var i = 0; i < message.content.length; i++){
                if(message.content.charAt(i) === '\"' || message.content.charAt(i) === '\''){
                    quoteAt.push(i);
                }
            }

            const title = message.content.substring(quoteAt[0], quoteAt[1] + 2);
            let param = message.content.replace(title, '');
            param = param.substring(prefix.length).split(/ +/);
            console.log(param);
        }

        

        switch(args[1]){
            case 'new':
                const pollEmbed = embeds.newPollEmbed(title, currDate, setDate);
                const poll = new Poll(title, setDate, pollEmbed);
                polls.push(poll);

                let messageEmbed = await message.channel.send(pollEmbed);
                messageEmbed.react('👍');
                messageEmbed.react('👎');
                
                setTimeout(function(){
                    const react = messageEmbed.reactions.cache;
                    const yes = react.get('👍');
                    const no = react.get('👎');

                    for(var i = 0; i < polls.length; i++){
                        if(polls[i].question() === title){
                                polls.splice(i, 1);
                        }
                    }

                    if(yes > no){

                    }
                }, ms(args[1]));
                break;
            
            default:
                message.member.send('s!poll by itself is not a command. Please use s!help poll to see the list of available commands');
                break;
        }


    }
}