const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '-';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
client.once('ready', () => {
    console.log('yes its online');
});

client.on('message', async message=>{
    let blacklisted = ['shit','sh*t'];
    let foundInText = false;
    for(i in blacklisted){
        if(message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }
    if(foundInText){
        message.delete();
        const hello = message.mentions.users.first();
        message.channel.send("Sorry buddy that's a blacklisted word.")
    }
});

client.on('ready',() => {
    try{
        let serverIn = client.guilds.size;
        console.log(client.user.tag +'has logged in!');
        function pickStatus(){
            let status = ["Retros Community","Dank Memer Giveaways!"];
            let Status = Math.floor(Math.random()*status.length)
            client.user.setActivity(status[Status]),{
                type:"WATCHING"
            }
        };
        setInterval(pickStatus, 8000)
    } catch (err){
        console.log(err)
    }
    
});
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
       message.channel.send("Finding bots ping...").then(msg =>{
              const ping  = msg.createdTimestamp - message.createdTimestamp;
              msg.edit(`Retrodanker's ping is ${ping}`);
       })
    }
     if (command === "ban"){
        if(message.member.hasPermission('BAN_MEMBERS')){
            const userBan = message.mentions.users.first();

            if(userBan){
                   var member = message.guild.member(userBan);

                    if(member) {
                           member.ban({
                    reason: 'you broke rules buddy.'
                }).then(() => {
                    message.reply(`${userBan.tag} was banned from the server.`)
                })

            }          else{
                         message.reply('that user is not in the server.');
            }
        }             else {
                            message.reply('you need to state a user to ban')
        }
                       
                     
     
                      
                        
                      

    
}else{
    message.reply("Sorry man but you don't have the power to wield the BAN HAMMER!")
}    
   }
   if(command === "lock"){
          client.commands.get('lock').execute(message, args);
   }
   if(command === "userinfo"){
          client.commands.get('info').execute(message, args);
   }
   if(command === "slowmode"){
         client.commands.get('slowmode').execute(message, args);
   }
   if(command === 'betatester'){
          message.channel.send("itsmenoel the Pro Player :) P.S. Sorry for testing on him")
   }
   if(command === 'among'){
          message.reply(`is looking for a among us game! <@&${766295832948899840}> `)
   }
   if(command === "roast"){
          client.commands.get('joke').execute(message, args);
   }
   if(command === "say"){
          client.commands.get('say').execute(message, args);
   }
   if(command === "vote"){
          const embed = new Discord.MessageEmbed()
          .setTitle ("Vote for us")
          .addField("Thank you for choosing to vote for us")
          .addField("You will unlock sweet perks after voting just DM Retro2op with a screenshot")
          .addField("https://disboard.org/server/701404814223081572")
          message.channel.send(embed).catch(err => console.log(err));
   }       
   
});
 
 




client.login(process.env.token);
