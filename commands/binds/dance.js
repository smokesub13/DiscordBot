const commando = require('discord.js-commando');
const discord = require('discord.js')

class danceCommand extends commando.Command 
{
    constructor(client)
    {
        super(client,{
            name: 'dance',
            group: 'simple',
            memberName: 'dance',
            description: 'dance'
        });
    }
    async run(message, args)
    {
        message.channel.send("https://media.giphy.com/media/l3V0lsGtTMSB5YNgc/giphy.gif");
    }
}
module.exports = danceCommand;