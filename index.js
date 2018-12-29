const Commando = require('discord.js-commando');
const bot = new Commando.Client({commandPrefix: '$'});
const TOKEN = process.env.token;
const prefix = '$';
bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

//playing $ready
bot.on('ready', () => {
    bot.user.setActivity('$help')
  })
bot.on('message', function(message){
    
    //reply using the word
    if (message.content === "$(prefix)cat") {
      message.reply('http://aws.random.cat/meow');
    }
    
    //changind color using the role
    /*if(message.content.startsWith("$cor #"))
    {
    var index = message.content.search("#");
    var color_code = message.content.slice(index, message.content.length);
    }
    if(message.member.roles.some(r => r.name == "smokesub13"))
    {
        var role = message.guild.roles.find(function(elem){if(elem.name == "smokesub13") return true;});
        role.setColor(color_code);
    }*/
    
    //change color using rainbow colors 
    if(message.content.startsWith("$rainbow"))
    {
        var role = message.guild.roles.find(function(elem){if(elem.name == "cool") return true;});
        for(var i = 0; i < 5; i++)
        {
        role.setColor('#ff0000');
        role.setColor('#ffa500');
        role.setColor('#ffff00');
        role.setColor('#008000');
        role.setColor('#0000ff');
        role.setColor('#800080');
        role.setColor('#0000FF');
        }
    }

        //changing the name using the bot
        if (message.content.startsWith(prefix + "nick")) {
            var content = message.content.split(" ");
            message.member.setNickname(content[1]);
           message.reply("Mudei " + content[1] + " para o teu nickname.")
    }


    //sending a random picture of a cat
    /*if(cmd === '$(prefix)cat'){
        let message = await message.channel.send("atualizando...")

        let {body} = await superagent 
        .get('http://aws.random.cat/meow')
        if(!{body}) return message.channel.send("arrebentou!")
        let cEmbed = new Discord.RichEmbed()
        .setColor("#00FF00")
        .setImage(body.file)

        message.channel.send({embed: cEmbed})
        message.delete();
        
    }*/
});

bot.on('ready',function () {
    console.log("pronto");
})

bot.login(TOKEN);
