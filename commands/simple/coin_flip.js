const commando = require('discord.js-commando');

class CoinFlipCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'flip',
            group: 'simple',
            memberName: 'flip',
            description: 'heads or tails'
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 2);
        if(chance == 0)
        {
            message.reply("Heads", {files: [__dirname + "/coins/head.jpg"]});
        }
        else
        {
            message.reply("Tails", {files: [__dirname + "/coins/tails.jpg"]});
        }
    }
}
module.exports = CoinFlipCommand;