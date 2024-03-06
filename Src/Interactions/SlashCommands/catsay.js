const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js")

module.exports = {
    name: "catsay",
    options: [{
        name: "text",
        type: ApplicationCommandOptionType.String,
        description: "The text to say.",
        required: true
    }], // Optional
    type: ApplicationCommandType.ChatInput,
    description: "Make The Cat say thing of your choice",
    //guilds: ["1013568585894985758"], // Optional (Makes it a guild cmd in the provided Guild IDs)
    run: async(client, interaction) => {
        const text = interaction.options.getString("text")

	await interaction
		.reply({
			files: [
				{
					attachment: `https://cataas.com/cat/cute/says/${text}`,
					name: "catsay.png",
				},
			],
		})
		.catch((err) => {})
    }
}