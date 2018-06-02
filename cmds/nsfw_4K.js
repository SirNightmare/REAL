const Discord = require("discord.js");
const randomPuppy = require('random-puppy');
const prefix = "?"
let bot = new Discord.Client();
module.exports.run = async (bot, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(`<@${message.author.id}> 🔞 Cannot display NSFW content in a SFW channel.`);
    var subreddits = [
        'NSFW_Wallpapers',
        'SexyWallpapers',
        'HighResNSFW',
        'nsfw_hd',
        'UHDnsfw'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setAuthor(`${bot.user.username}`, bot.user.avatarURL)
                .setFooter("4k NSFW")
                .setImage(url);
            message.channel.send({
                embed
            });
        })
  }

module.exports.help = {
    name: "4k"
}