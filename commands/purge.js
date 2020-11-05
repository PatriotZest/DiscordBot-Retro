const Discord = require('discord.js');
module.exports = {

    name: 'purge',
    description: "deletes messages",
    async execute(message, args){
      if(message.member.hasPermissions("MANAGE_MESSAGES")){
           const deleteCount = parseInt(args[0], 10)
           const deleteMessage = `Deleted ${deleteCount} messages`;

           if(!deleteCount || deleteCount > 100 || deleteCount < 2) return message.reply("Input a number between 2 and 100")
           const fetched = await message.channel.fetchMessages({
                  limit: deleteCount
           });
           message.channel.bulkDelete(fetched)
           .catch(error => console.log(`Cannot delete messages because of ${error}`))
           .then(() => message.channel.send(deleteMessage))
           .catch(err =>{
                 console.log(err)
            });
      }else{
            message.reply("Sorry bro you don't have perms for this command")
      }
      
















     }
     }