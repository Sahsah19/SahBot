module.exports = {
    name: 'source',
    description: 'send source code to user',
    execute(message){
        message.channel.send('The source code can be found on my public GitHub repository at https://github.com/Sahsah19/SahBot');
    }
}