const commando = require('discord.js-commando');
const discord = require('discord.js')

class trollCommand extends commando.Command 
{
    constructor(client)
    {
        super(client,{
            name: 'troll',
            group: 'simple',
            memberName: 'troll',
            description: 'troll'
        });
    }
    async run(message, args)
    {
        message.channel.send("˙ʇı ןןɐɔ noʎ ɹǝʌǝʇɐɥʍ ɹo ,ɐʇǝq, pǝɹǝpısuoɔ buıǝq ɟo ʞɔıs ɯ,ı ˙ʇı ʇnoqɐ ʎɹɔ oʇ ǝɯ oʇ ʞןɐʇ ʎןuo puɐ ‘ʇıɥs ǝʞıן ɯǝɥʇ ʇɐǝɹʇ oɥʍ sʎnb bɐqǝɥɔnop ɹǝʇɟɐ ob sʎɐʍןɐ sןɹıb ǝsǝɥʇ puǝ ǝɥʇ uı ˙ʎpɐן,ɯ ɹoɟ buıɥʇʎuɐ op pןnoʍ puɐ ‘qoظ ǝɔıu ɐ ʞɹoʍ ‘ʎnb ǝɔıu ɐ ɯ,ı ˙ǝuoz puǝıɹɟ ǝɥʇ uı ʇnd buıǝq sʎɐʍןɐ ı ɯɐ ʎɥʍ");
    }
}
module.exports = trollCommand;