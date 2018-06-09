const Discord = require("discord.js");
const prefix = "?"
let bot = new Discord.Client();
var math = require('mathjs');
module.exports.run = async (bot, message, args) => {
    let input = args.join(" ");
    if (!input) {
        message.reply('Please provide a Math equasion for the calculator to solve!');
        return;
    }

    const question = args.join(" ");

    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        return message.reply(`**Invalid math equation:** ${err}`);
    }

    const embed = new Discord.RichEmbed()
        .setThumbnail("http://www.iosicongallery.com/img/1024/calculator-2017-10-10.png")
        .setColor('RANDOM')
        .addField("**Question:**", question, true)
        .addField("**Answer:**", answer)

    message.channel.send({
        embed
    })
  }

module.exports.help = {
    name: "calculate"
}