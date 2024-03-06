const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType, ButtonStyle, ButtonBuilder, ActionRowBuilder  } = require("discord.js")

module.exports = {
    name: "invite",
    
    type: ApplicationCommandType.ChatInput,
    description: "Get the bot's invite link.",
    //guilds: ["1013568585894985758"], // Optional (Makes it a guild cmd in the provided Guild IDs)
    run: async(client, interaction) => {
        await interaction.deferReply({
            ephemeral: false
        });

           
    const row = new ActionRowBuilder()
    .addComponents(
    new ButtonBuilder()
    .setLabel("Invite")
    .setStyle(ButtonStyle.Link)
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`),
	new ButtonBuilder()
    .setLabel("Twitter")
    .setStyle(ButtonStyle.Link)
    .setURL("https://twitter.com/JA1N35H"),
    new ButtonBuilder()
    .setLabel("Website")
    .setStyle(ButtonStyle.Link)
    .setURL("https://zeta-bot.webflow.io/")
			);

          const mainPage = new EmbedBuilder()
            .setAuthor({ name: 'ZETA', iconURL: 'https://imgur.com/wtRAMEK.png'})
            //.setThumbnail('https://media.discordapp.net/attachments/876035356460462090/888434725235097610/20210820_124325.png')
            .setColor(0x303236)
             .addFields([{ name: 'Invite ZETA', value: `[Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot)`}])
             await interaction.followUp({embeds: [mainPage], components: [row]})
    }
}