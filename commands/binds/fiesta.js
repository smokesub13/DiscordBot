const commando = require('discord.js-commando');
const discord = require('discord.js')

class fiestaCommand extends commando.Command 
{
    constructor(client)
    {
        super(client,{
            name: 'fiesta',
            group: 'simple',
            memberName: 'fiesta',
            description: 'fiesta'
        });
    }
    async run(message, args)
    {
        message.channel.send("( ͡° ͜◯ ͡°) ﻿ＣＬＯＷＮ ＦＩＥＳＴＡ ( ͡° ͜◯ ͡°)");
    }
}
module.exports = fiestaCommand;