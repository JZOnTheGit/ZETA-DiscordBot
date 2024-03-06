const { EmbedBuilder } = require("discord.js");
const superagent = require('superagent');

module.exports = {
    name: "wink",
    aliases: ["wink"],
    run: async(client, message, args) => {
        let { body } = await superagent.get(`https://some-random-api.ml/animu/wink`);
        const embed = new EmbedBuilder()
          .setColor(0x00FFFF)
          .setTitle("Here's your Wink 😉 ")
          .setImage(body.link)
          .setTimestamp()
          .setFooter({ text: 'ZETA'})
        message.channel.send({ embeds: [embed]});
    }
}