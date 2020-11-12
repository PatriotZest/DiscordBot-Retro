const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const moderation = new Discord.MessageEmbed()
        .setTitle('Moderation')
        .addField('`-kick`', 'Kicks a member from your server via mention or ID')
        .addField('`-ban`', 'Bans a member from your server via mention or ID')
        .addField('`-purge`', 'Purges messages')
        .addField('`-warn`', 'Warns a member of your server')
        .addField('`-deletewarns`', 'Clears the warning of a member')
        .addField('`-lock`', 'Locks a particular channel [not available rn]')
        .addField('`-unlock`', 'Unlocks a particular channel [not available rn]')
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .addField('`-avatar`', 'Shows the avatar of a person')
        .addField('`More coming soon`', 'This bot is in BETA *wink* *wink*')
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Utility')
        .addField('`-vote`', 'Vote for us probably ;-; [not available rn]')
        

        const pages = [
                moderation,
                fun,
                utility
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}