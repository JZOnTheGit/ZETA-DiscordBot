const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js")
const { ActionRowBuilder, SelectMenuBuilder } = require("discord.js")

module.exports = {
    name: "help",
    description: "Help Menu",
    type: ApplicationCommandType.ChatInput,
    
    //guilds: ["1013568585894985758"], // Optional (Makes it a guild cmd in the provided Guild IDs)
    run: async(client, interaction) => {
        const ActionRow = new ActionRowBuilder().addComponents(
            new SelectMenuBuilder()
            .setCustomId("HelpMenu")
            .setPlaceholder("HelpCommand")
            .addOptions(
                [
                    {
                        label: `Anime 🖼`,
                        description: `A few Anime related commands`,
                        value: `anime`
                    },
                    {
                        label: `Info 📢`,
                        description: `A few Info related commands`,
                        value: `info`
                    },
                    {
                        label: `Moderation 🔒`,
                        description: `A few Moderation related commands`,
                        value: `moderation`
                    },
                    {
                        label: `Utillity 🔧`,
                        description: `A few Utillity related commands`,
                        value: `utillity`
                    },
                    {
                        label: `Fun 🎲`,
                        description: `A few Fun related commands`,
                        value: `fun`
                    },
                ]
            )
        )
        interaction.reply({
            content: "Help Menu",
            components: [ActionRow]
        })
    }
}