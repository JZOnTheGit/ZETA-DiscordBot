const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js")

module.exports = {
    name: "serverlist",
    
    ownerOnly: true,
    type: ApplicationCommandType.ChatInput,
    description: "Devs Server List.",
    //guilds: ["1013568585894985758"], // Optional (Makes it a guild cmd in the provided Guild IDs)
    run: async(client, interaction) => {
        interaction.reply("Check console log please:");
        client.guilds.cache.forEach(guild => {
            console.log(`${guild.name} | ${guild.id}`);
           
          })
    }
}