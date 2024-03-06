const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js")

module.exports = {
    name: "policy",
    type: ApplicationCommandType.ChatInput,
    description: "Policy and T&Cs",
    //guilds: ["1013568585894985758"], // Optional (Makes it a guild cmd in the provided Guild IDs)
    run: async(client, interaction) => {
        let embed = new EmbedBuilder()
    .setColor(0x00FF00)
    .setTitle(`ZETAs Privacy Policy and Terms of Service`)
    .setDescription(`Check out the details on the website \n[HERE](https://zeta-bot.webflow.io/policy-terms-conditions)`)
    .setFooter({ text: 'ZETA'})
    .setTimestamp()
    
    await interaction.reply({ embeds: [embed]});
    }
}