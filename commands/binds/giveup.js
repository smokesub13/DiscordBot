const commando = require('discord.js-commando');
const discord = require('discord.js')

class giveupCommand extends commando.Command 
{
    constructor(client)
    {
        super(client,{
            name: 'giveup',
            group: 'simple',
            memberName: 'giveup',
            description: 'giveup'
        });
    }
    async run(message, args)
    {
        message.channel.send("DO IT, just DO IT! Don’t let your dreams be dreams. Yesterday, you said tomorrow. So just. DO IT! Make. your dreams. COME TRUE! Just… do it! Some people dream of success, while you’re gonna wake up and work HARD at it! NOTHING IS IMPOSSIBLE!You should get to the point where anyone else would quit, and you’re not gonna stop there. NO! What are you waiting for? … DO IT! Just… DO IT! Yes you can! Just do it! If you’re tired of starting over, stop. giving. up.");
    }
}
module.exports = giveupCommand;