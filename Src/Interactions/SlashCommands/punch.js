const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js")
const { Random } = require("something-random-on-discord");
//const { generateRandomHex } = require("../../Structures/functions");

module.exports = {
    name: "punch",
    options: [{
        name: "user",
        type: ApplicationCommandOptionType.User,
        description: "Punch A Guy.",
        required: true
    }], // Optional
    type: ApplicationCommandType.ChatInput,
    description: "Punch A Yute 😎",
    //guilds: ["1013568585894985758"], // Optional (Makes it a guild cmd in the provided Guild IDs)
    run: async(client, interaction) => {
        let target = interaction.options.getMember('user').user.username;
    
        let data = await Random.getAnimeImgURL("punch");
    
        let embed = new EmbedBuilder()
        .setImage(data)
        .setColor(0x00FF00)
        .setTitle(`${interaction.member.user.username} Punches ${target}`)
        .setDescription(`[Click here if the image failed to load](${data})`)
        .setFooter({ text: 'ZETA'})
        .setTimestamp()
    
        interaction.reply({ embeds: [embed]});
    }
}