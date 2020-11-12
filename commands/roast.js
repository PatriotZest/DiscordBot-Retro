const fetch = require("node-fetch");
const Discord = require('discord.js');
module.exports = {

    name: 'joke',
    description: "makes a joke",
     async run(client,message, args){
     if(!args[0]) return message.channel.send("Invalid Command Format , please try again.");
     const mentionedMember = message.mentions.members.first();
     if(!mentionedMember) return message.channel.send("The user does not exist");
     let msg = await message.channel.send("Getting ready....")
     fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
    .then(res => res.json())
    .then(json => {
        const jokeEmbed = new Discord.MessageEmbed()
        .setTitle(mentionedMember.user.tag + `${json.insult}`);
        msg.edit(jokeEmbed)
    });
     





























     }
     }