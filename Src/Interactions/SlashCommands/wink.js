const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js")
const superagent = require('superagent');

module.exports = {
    name: "wink",
    
    type: ApplicationCommandType.ChatInput,
    description: "wink yes",
    //guilds: ["1013568585894985758"], // Optional (Makes it a guild cmd in the provided Guild IDs)
    run: async(client, interaction) => {
        let { body } = await superagent.get(`https://some-random-api.ml/animu/wink`);
        const embed = new EmbedBuilder()
          .setColor(0x00FFFF)
          .setTitle("Here's your Wink 😉 ")
          .setImage(body.link)
          .setTimestamp()
          .setFooter({ text: 'ZETA'})
        interaction.reply({ embeds: [embed]});
    }
}