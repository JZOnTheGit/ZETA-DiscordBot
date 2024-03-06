const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js")

module.exports = {
    name: "8ball",
    options: [{
        name: "question",
        type: ApplicationCommandOptionType.String,
        description: "The question you want to ask the magic 8ball.",
        required: true
    }], // Optional
    type: ApplicationCommandType.ChatInput,
    description: "Ping users yes",
    //guilds: ["1013568585894985758"], // Optional (Makes it a guild cmd in the provided Guild IDs)
    run: async(client, interaction) => {
        const inquiry = interaction.options.getString("question")
	const fortunes = [
		"yep!",
		"i guess",
		"probably not",
		"YES YES YES!!!11",
		"hell no",
		"um.. what?",
		"sorry, say again?",
		"what is that",
		"you know what just ask someone else",
		"i mean sure, if you believe",
		"without doubt",
		"without doubt      no",
		"sorry son",
		"possibly",
		"in one universe out of 9876567... yes",
        "Bitch HELLLL NOOO",
        "Of cource baby 😉😏"
	]
	const fortune = fortunes[Math.floor(Math.random() * fortunes.length)]

	const Embed = new EmbedBuilder()
		.setColor(0x00FFFF)
		.setTitle(`${inquiry}`)
		.setDescription(`🎱 ${fortune}`)

	await interaction
		.reply({
			embeds: [Embed],
		})
		.catch((err) => {})
    }
}