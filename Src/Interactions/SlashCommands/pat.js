const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js")
const superagent = require('superagent');


module.exports = {
    name: "pat",
    options: [{
        name: "user",
        type: ApplicationCommandOptionType.User,
        description: "Provide the user.",
        required: true
    }], // Optional
    type: ApplicationCommandType.ChatInput,
    description: "pat users yes",
    //guilds: ["1013568585894985758"], // Optional (Makes it a guild cmd in the provided Guild IDs)
    run: async(client, interaction) => {
        let victim = interaction.options.getMember('user');
        const { body } = await superagent
          .get("https://nekos.life/api/v2/img/pat");
              const embed = new EmbedBuilder()
             .setColor(0x00FFFF)
              .setTitle("Here's your Pat, 👀")
          .setDescription(`${victim} Pats ${interaction.author}`)
          .setImage(body.url)
           .setTimestamp()
          .setFooter({ text: 'ZETA'})
      
               interaction.reply({ embeds: [embed]});
    }
}