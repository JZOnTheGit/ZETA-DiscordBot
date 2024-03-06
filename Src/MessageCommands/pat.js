const { EmbedBuilder } = require("discord.js");
const superagent = require('superagent');

module.exports = {
    name: "pat",
    aliases: ["pat"],
    run: async(client, message, args) => {
        let victim = message.mentions.users.first() || message.author;
        const { body } = await superagent
          .get("https://nekos.life/api/v2/img/pat");
              const embed = new EmbedBuilder()
             .setColor(0x00FFFF)
              .setTitle("Here's your Pat, 👀")
          .setDescription(`${victim} Pats ${message.author}`)
          .setImage(body.url)
           .setTimestamp()
          .setFooter({ text: 'ZETA'})
      
               message.channel.send({ embeds: [embed]});
    }
}