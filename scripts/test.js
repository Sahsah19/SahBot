const { sleep } = require("./main");

module.exports = {
    name: 'test',
    description: 'Test commands',
    execute(message, args){
        message.channel.send('I\'m working currently, shut up!');
    }
}