const main = require('./main');
const channels = ['684233137215111317', '819970348363284552', '688086693890228366', '870110653904461825'];

module.exports = {
    name: 'quote',
    description: 'Provides a random quote',
    execute(message){
        if(main.compareTo(channels, message.channel.id) > 0){
            message.channel.send(main.getQuote());
        } else {
            message.channel.send('This command cannot be used in this channel');
        }
    }
}