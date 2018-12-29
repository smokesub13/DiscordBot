const commando = require('discord.js-commando');
const discord = require('discord.js')

class FunMirrorCommand extends commando.Command 
{
    constructor(client)
    {
        super(client,{
            name: 'mirror',
            group: 'simple',
            memberName: 'mirror',
            description: 'mirror'
        });
    }
    async run(message, args)
    {
        if(message.author.avatarURL != null){
        message.reply(message.author.avatarURL);
        message.reply("tá fixe!");
        message.react('😂');
        }
        else
        {
            message.reply("default image <.<");
            message.react('😴');
        }
    }
}
module.exports = FunMirrorCommand;