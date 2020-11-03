const Discord = require('discord.js');
module.exports = {

    name: 'lock',
    description: "locks things",
   async execute(message, args){
 
     if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send("Sorry you dont have the perms for this")

     if(!args[0]) return message.channel.send("You did not specify a channel")
     if(!message.mentions.channels.first()) return message.channel.send("You did not specify a valid channel")
     const role = message.guild.roles.cache.get('755778598794821712')
     if(!role) return message.channel.send("Could not find role")
     await message.mentions.channels.forEach(async channel =>{
        if(channel.name.startsWith('L')) return message.channel.send(`<#${channel.id}> is already locked!`)
        await channel.setName(`L${channel.name}`);
        try{
          await channel.overwritePermissions(role,[
          {
          deny: ['SEND_MESSAGES', 'ADD_REACTIONS'],
          },
        ]); 
          message.channel.send(`<#${channel.id}> has been locked!`);
        } catch(err){
            console.log(err)
            message.channel.send("Something went wrong not sure why error id:$312543_CACh_ERR")
        }
        });
    }
}

