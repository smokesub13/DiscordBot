const commando = require('discord.js-commando');
const discord = require('discord.js')

class lennyCommand extends commando.Command 
{
    constructor(client)
    {
        super(client,{
            name: 'lenny',
            group: 'simple',
            memberName: 'lenny',
            description: 'lenny'
        });
    }
    async run(message, args)
    {
        message.channel.send("( ͡° ͜ʖ ͡°)");
    }
}
module.exports = lennyCommand;