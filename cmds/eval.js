const Discord = require("discord.js");
const prefix = "?"
const fs = require("fs");
let bot = new Discord.Client();
module.exports.run = async (bot, message, args) => {
    let botmessage = args.join(" ");
        if(message.author.id !== "360908660727087107") return;
    try {
        var code = args.join(" ");
        var evaled = eval(code);

        if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled)
        var embed = new Discord.RichEmbed()
        message.channel.send({embed: {
            color: 3447003,
            author: {
              name: bot.user.username,
              icon_url: bot.user.avatarURL
            },
            title: `Successfully Evaluated!`,
            fields: [{
                name: "Input",
                value: botmessage
            },
            {
                name: "Output",
                value: ("x1", clean(evaled))
            }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: message.author.avatarURL,
              text: `${message.author.username}#${message.author.discriminator}`
            }
          }       
        });
    } catch(err) {
        message.channel.send(`\`ERROR\` \`\`\`x1\n${clean(err)}\n\`\`\``);
    }
    function clean(text) {
        if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
    }
      }
module.exports.help = {
    name: "eval"
}