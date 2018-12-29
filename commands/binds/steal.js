const commando = require('discord.js-commando');
const discord = require('discord.js')

class stealCommand extends commando.Command 
{
    constructor(client)
    {
        super(client,{
            name: 'steal',
            group: 'simple',
            memberName: 'steal',
            description: 'steal'
        });
    }
    async run(message, args)
    {
        message.channel.send("It would be shame, if that code was stolen.");
        message.channel.send("https://media.giphy.com/media/qAq1zcMJCOv9C/giphy.gif");
        message.channel.send("It's mine now!");
    }
}
module.exports = stealCommand;