const commando = require('discord.js-commando');
const discord = require('discord.js')

class heyCommand extends commando.Command 
{
    constructor(client)
    {
        super(client,{
            name: 'hey',
            group: 'simple',
            memberName: 'hey',
            description: 'hey'
        });
    }
    async run(message, args)
    {
        message.channel.send("Hey  ( ° ͜ʖ͡°)╭∩╮");
    }
}
module.exports = heyCommand;