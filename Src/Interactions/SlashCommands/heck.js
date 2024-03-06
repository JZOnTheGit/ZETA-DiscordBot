const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js")
const ms = require("ms")

module.exports = {
    name: "hack",
    options: [{
        name: "target",
        type: ApplicationCommandOptionType.User,
        description: "Provide the user.",
        required: true
    }], // Optional
    type: ApplicationCommandType.ChatInput,
    description: "heck someone yes",
    //guilds: ["1013568585894985758"], // Optional (Makes it a guild cmd in the provided Guild IDs)
    run: async(client, interaction) => {
        const victim = interaction.options.getMember("target")


	await interaction
		.channel.send(`Hacking ${victim.displayName}....`)
		.catch((err) => {})

	const time = "1s"
	setTimeout(async function () {
		await interaction
        .channel.send(
				`Finding ${victim.displayName}'s Email and Password.....`
			)
			.catch((err) => {})
	}, ms(time))

	const time1 = "6s"
	setTimeout(async function () {
		await interaction
        .channel.send(
				`E-Mail: ${victim.displayName}@gmail.com \nPassword: ********`
			)
			.catch((err) => {})
	}, ms(time1))

	const time2 = "9s"
	setTimeout(async function () {
		await interaction
        .channel.send("Finding Other Accounts.....")
			.catch((err) => {})
	}, ms(time2))

	const time3 = "15s"
	setTimeout(async function () {
		await interaction
        .channel.send("Setting up Epic Games Account.....")
			.catch((err) => {})
	}, ms(time3))

	const time4 = "21s"
	setTimeout(async function () {
		await interaction
        .channel.send("Hacking Epic Games Account......")
			.catch((err) => {})
	}, ms(time4))

	const time5 = "28s"
	setTimeout(async function () {
		await interaction
        .channel.send("Hacked Epic Games Account!!")
			.catch((err) => {})
	}, ms(time5))

	const time6 = "31s"
	setTimeout(async function () {
		await interaction.channel.send("Collecting Info.....Stealing Mod Menu Keys....").catch((err) => {})
	}, ms(time6))

	const time7 = "38s"
	setTimeout(async function () {
		await interaction
        .channel.send("Selling data to FBI....")
			.catch((err) => {})
	}, ms(time7))

	const time8 = "41s"
	setTimeout(async function () {
		await interaction
        .channel.send(`Finished hacking ${victim.displayName}, get hacked biiiitich! (jks)`)
			.catch((err) => {})
	}, ms(time8))
    }
}