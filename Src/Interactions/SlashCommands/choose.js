const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js")

module.exports = {
    name: "choose",
    options: [{
        name: "1st",
        type: ApplicationCommandOptionType.String,
        description: "The 1st thing to choose from.",
        required: true
    },
    {
        name: "2nd",
        type: ApplicationCommandOptionType.String,
        description: "The 2nd thing to choose from.",
        required: true
    },
    {
        name: "3rd",
        type: ApplicationCommandOptionType.String,
        description: "The 3rd thing to choose from.",
        required: false
    },
    {
        name: "4th",
        type: ApplicationCommandOptionType.String,
        description: "The 4th thing to choose from.",
        required: false
    },
    {
        name: "5th",
        type: ApplicationCommandOptionType.String,
        description: "The 5th thing to choose from.",
        required: false
    },
    {
        name: "6th",
        type: ApplicationCommandOptionType.String,
        description: "The 6th thing to choose from.",
        required: false
    },
    {
        name: "7th",
        type: ApplicationCommandOptionType.String,
        description: "The 7th thing to choose from.",
        required: false
    },
    {
        name: "8th",
        type: ApplicationCommandOptionType.String,
        description: "The 8th thing to choose from.",
        required: false
    },
    {
        name: "9th",
        type: ApplicationCommandOptionType.String,
        description: "The 9th thing to choose from.",
        required: false
    },
    {
        name: "10th",
        type: ApplicationCommandOptionType.String,
        description: "The 10st thing to choose from.",
        required: false
    },], // Optional
    type: ApplicationCommandType.ChatInput,
    description: "I choose for you,  Yes!",
    //guilds: ["1013568585894985758"], // Optional (Makes it a guild cmd in the provided Guild IDs)
    run: async(client, interaction) => {
        const choice1 = interaction.options.getString("1st")
	const choice2 = interaction.options.getString("2nd")
	const choice3 = interaction.options.getString("3rd")
	const choice4 = interaction.options.getString("4th")
	const choice5 = interaction.options.getString("5th")
	const choice6 = interaction.options.getString("6th")
	const choice7 = interaction.options.getString("7th")
	const choice8 = interaction.options.getString("8th")
	const choice9 = interaction.options.getString("9th")
	const choice10 = interaction.options.getString("10th")

	let responsevalues = [choice1, choice2]

	if (choice3) {
		responsevalues.push(choice3)
	}

	if (choice4) {
		responsevalues.push(choice4)
	}

	if (choice5) {
		responsevalues.push(choice5)
	}

	if (choice6) {
		responsevalues.push(choice6)
	}

	if (choice7) {
		responsevalues.push(choice7)
	}

	if (choice8) {
		responsevalues.push(choice8)
	}

	if (choice9) {
		responsevalues.push(choice9)
	}

	if (choice10) {
		responsevalues.push(choice10)
	}

	const response =
		responsevalues[Math.floor(Math.random() * responsevalues.length)]

	await interaction
		.reply({
			content: `I choose... **${response}**`,
		})
		.catch((err) => {})
    }
}