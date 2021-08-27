module.exports = {
    name: 'end',
    description: 'sends the amount of days until school ends',
    execute(message){
        message.delete();
        
        const endDate = 1655464500000;
        var currDate = Date.now();

        message.channel.send(`School will end in ${Math.round((endDate - currDate) / (1000*60*60*24))} days 😩.`);
    }
}