const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js")
const superagent = require('superagent');

module.exports = {
    name: "waifu",
    
    type: ApplicationCommandType.ChatInput,
    description: "Whos your waifu 👀",
    //guilds: ["1013568585894985758"], // Optional (Makes it a guild cmd in the provided Guild IDs)
    run: async(client, interaction) => {
        try {
            superagent
              .get("https://nekos.life/api/v2/img/waifu")
              .end((err, response) => {
                const embed = new EmbedBuilder()
                .setTitle("Here's your Waifu")
                  .setDescription(interaction.user.tag)
                  .setImage(response.body.url)
                  .setColor(0x00FFFF)
              .setTimestamp()
              .setFooter({ text: 'ZETA'})
                interaction.reply({ embeds: [embed]});
              })
              
            }catch(err){
              console.log(err)
            }
    }
}