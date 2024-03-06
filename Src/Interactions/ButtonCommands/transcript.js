const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType, ButtonStyle, ButtonBuilder, ActionRowBuilder, ChannelType  } = require("discord.js")

const transcript = require('discord-transcript');

module.exports = {
    name : 'transcript',
    returnErrors: false,
    ownerOnly: true,
    run : async(client, interaction) => {
        const channel = interaction.channel;

        let messagecollection = interaction.channel.messages.fetch({
            limit: 100
            
            });

        let link = await transcript.generate(interaction, messagecollection, channel);

        const embed = new EmbedBuilder()
        .setColor(0x00AE86)
        .setTitle("Transcript")
        .setDescription(`Here is your transcript: ${link}`)
        .setFooter({text: "ZETA", iconURL: "https://imgur.com/wtRAMEK.png"})
        .setTimestamp()

        interaction.reply({ embeds: [embed] })
    }
}