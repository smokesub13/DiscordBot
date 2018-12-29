const commando = require('discord.js-commando');
const discord = require('discord.js')

class dongerCommand extends commando.Command 
{
    constructor(client)
    {
        super(client,{
            name: 'donger',
            group: 'simple',
            memberName: 'donger',
            description: 'dongers'
        });
    }
    async run(message, args)
    {
        message.channel.send("ヽ༼ຈل͜ຈ༽ﾉ RAISE YOUR DONGERS ヽ༼ຈل͜ຈ༽ﾉ");
    }
}
module.exports = dongerCommand;