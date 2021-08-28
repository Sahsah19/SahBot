const { riot_key } = require('../config.json');

module.exports = {
    name: 'riot',
    description: 'test riot api',
    execute(message, args, Discord, client, https) {

        const options = {
            hostname: 'na1.api.riotgames.com',
            port: 443,
            path: `/lol/summoner/v4/summoners/by-name/${args[1]}?api_key=${riot_key}`,
            method: 'GET'
        }


        callback = function (res) {

            var data;

            res.on('data', function (chunk) {
                data += chunk;
            });

            response.on('end', function () {
                var dataObj = JSON.parse(data);
                message.channel.send(`${dataObj.name} is currently level ${dataObj.summonerLevel}`);
            });
        }

        https.request(options, callback).end();
    }
}