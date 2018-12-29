const commando = require('discord.js-commando');
const discord = require('discord.js')

class fitemeCommand extends commando.Command 
{
    constructor(client)
    {
        super(client,{
            name: 'fiteme',
            group: 'simple',
            memberName: 'fiteme',
            description: 'fiteme'
        });
    }
    async run(message, args)
    {
        message.channel.send("(ง ͠° ͟ل͜ ͡°)ง");
    }
}
module.exports = fitemeCommand;