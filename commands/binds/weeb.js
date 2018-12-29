const commando = require('discord.js-commando');
const discord = require('discord.js')

class weeboCommand extends commando.Command 
{
    constructor(client)
    {
        super(client,{
            name: 'weebo',
            group: 'simple',
            memberName: 'weebo',
            description: 'weebo'
        });
    }
    async run(message, args)
    {
        message.channel.send("Omg hai ^ I’m anon-san and I absolutely luuuv @@ anime <3 and my fav is naurto!!! Okies so anyways, im going to tell you about the BEST day of my life when I met my hot husband sasuke!! <333333333 OMFGZ HE WAS SOOOOO FREAKIN KAWAII IN PERSON!!! Supa kawaii desu!!!!!!!! ^__^When I walked onto Tokyo street =__=I looked up and saw…SASUKE!!!!!!!!!!!!!!! <33333333333333333333333333333333333333333333333333333333333333!!!! “ KONNICHIWA OMGZZZZZZZZZZZZZZZZ SUPA SUPA SUPA KAWAII SASUKE-SAMA!!!!!” I yelled n_n then he turned chibi then un-chibi!! he looked at me [O.O;;;;;;;;;;;] and then he saw how hot I am ** he grabbed my hand and winked ~_^ then pulled me behind a pocky shop oo and started to kiss me!!!!!! [OMG!!! HIS TOUNGE TASTED LIKE RAMEN!!! RLY!! >.> <.< >.< (O) (O) (O)] then I saw some baka fat bitch watching us and I could tell she was undressing him with her eyes!!!!!!! [ -__-;;;;; OMG I COULDN’T BELIEVE IT EITHER!!! (òó) (òó) (òó)] so I yelled “UH UH BAKA NEKO THAT’S MY MAN WHY DON’T YOU GO HOOK UP WITH NARUTO CAUSE SASUKE-SAMA LOVES ME!!! (òó)” then sasuke held me close =^= and said he would only ever love me and kissed me again!!!!!!! ** (O)/ then we went to his apartment and banged all night long and made 42 babies and they all became ninjas!!!!!!!!!!!!!!! Nyaaaaa!!! (^_<) ^__;;;;;;;;;;;;;;;;");
    }
}
module.exports = weeboCommand;