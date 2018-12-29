const commando = require('discord.js-commando');
const discord = require('discord.js')

class freeCommand extends commando.Command 
{
    constructor(client)
    {
        super(client,{
            name: 'free',
            group: 'simple',
            memberName: 'free',
            description: 'free'
        });
    }
    async run(message, args)
    {
        message.channel.send("https://media.giphy.com/media/5wWf7GMbT1ZUGTDdTqM/giphy.gif");
    }
}
module.exports = freeCommand;