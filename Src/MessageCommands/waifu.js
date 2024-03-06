const superagent = require('superagent');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "waifu",
    aliases: ["waifu"],
    run: async(client, message, args) => {
        try {
            superagent
              .get("https://nekos.life/api/v2/img/waifu")
              .end((err, response) => {
                const embed = new EmbedBuilder()
                .setTitle("Here's your Waifu")
                  .setDescription(message.author.toString())
                  .setImage(response.body.url)
                  .setColor(0x00FFFF)
              .setTimestamp()
              .setFooter({ text: 'ZETA'})
                message.channel.send({ embeds: [embed]});
              })
              
            }catch(err){
              console.log(err)
            }
    }
}