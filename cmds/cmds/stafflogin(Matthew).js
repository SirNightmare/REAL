const Discord = require("discord.js");
const prefix = "?"
const fs = require("fs");
let bot = new Discord.Client();
let client = new Discord.Client();
module.exports.run = async (bot, message, args) => {
    let botmessage = args.join(" ");
        if(message.author.id !== "314935399346733067") return message.reply(`Sorry! You are not recognised as a valid member of staff for Sylveon!`);
        var embed = new Discord.RichEmbed()
        .setAuthor(`Successfully logged in!`)
        .setColor("RANDOM")
        .setTitle(`Hi there, ${message.author.username} here are the commands you can use as Staff!`)
        .addField(`None yet still in Development!`)
        .setThumbnail(`${message.author.avatarURL}`)
        message.author.send(embed)
    }

module.exports.help = {
    name: "login"
}
