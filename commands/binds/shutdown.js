const commando = require('discord.js-commando');
const discord = require('discord.js')

class shutdownCommand extends commando.Command 
{
    constructor(client)
    {
        super(client,{
            name: 'shutdown',
            group: 'simple',
            memberName: 'shutdown',
            description: 'shutdown'
        });
    }
    async run(message, args)
    {
        message.channel.send(" ̴͇͔ ̴̛͍ ̨̲͓ ̴̢̧ ̱̖̘ ̢̆̌ ͭ͆̊ ̵̧̦ ͖̠̥ ̧̢̰ ̴̵̷ ̦͕̲ ̧̨͙ ̶̮̯ ̶̧̛ ̸̡̟ ̡͇̟ ̶̵̭ ̐͛̇ ̶̡̓ ̵̛͉ ̶̸ͨ҉̙̻̱ ̷͎͔ ̶̸̧ ̢̘̦ ̢̨̰ ̢̡̠ ͈̜̖ ̴̢̹ ͩͫ̊҉̙̬̰ ̲͓̙ ́̓ͤ҉̙̱͓ ̨̡̱ ̓̓͛҉̵͎̫ ̶͚̺ ̴̵̱ ̴̨̪ ̸̶̻ ̆̓̌ ̆͆́҉̫̜̜ ̵̛͉ ̶̸ͨ҉̙̻̱ ̷͎       ҉  ҉  ҉      ҉");
    }
}
module.exports = shutdownCommand;