const commando = require('discord.js-commando');
const discord = require('discord.js')

class ImagemRIPCommand extends commando.Command 
{
    constructor(client)
    {
        super(client,{
            name: 'rip',
            group: 'simple',
            memberName: 'rip',
            description: 'rip'
        });
    }
    async run(message, args)
    {
        message.channel.send("https://i.imgur.com/w3duR07.png");
    }
}
module.exports = ImagemRIPCommand;