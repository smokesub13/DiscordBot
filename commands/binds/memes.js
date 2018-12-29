const commando = require('discord.js-commando');
const discord = require('discord.js')

class memesCommand extends commando.Command 
{
    constructor(client)
    {
        super(client,{
            name: 'memes',
            group: 'simple',
            memberName: 'memes',
            description: 'memes'
        });
    }
    async run(message, args)
    {
        message.channel.send("OBAMA IS GONE");
    }
}
module.exports = memesCommand;