const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType, ButtonStyle, ButtonBuilder, ActionRowBuilder, ChannelType  } = require("discord.js")


module.exports = {
    name : 'tic',
    returnErrors: false,
    ownerOnly: false,
    type: ApplicationCommandType.ChatInput,
    run : async(client, interaction) => {
        const ticChannel = await interaction.guild.channels.create({
            name: `ticket-${interaction.user.username}`,
            type: ChannelType.GuildText,
            permissionOverwrites: [
                {
                id: interaction.guild.id,
                deny: ["ViewChannel"],
                },
                {
                    id: interaction.user.id,
                    allow: ["ViewChannel", "SendMessages", "EmbedLinks" ,"ReadMessageHistory", "AddReactions", "AttachFiles", "UseApplicationCommands", "UseExternalStickers"],
                },
                {
                    id: client.user.id,
                    allow: ["ViewChannel", "SendMessages", "EmbedLinks" ,"ReadMessageHistory", "AddReactions", "AttachFiles", "UseApplicationCommands", "UseExternalStickers"],
                }
        ]
        })

        const embed = new EmbedBuilder()
        .setColor(0x00AE86)
        .setAuthor({name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true })})
        .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
        .setTitle("Ticket ")
        .setDescription(`**${interaction.user.username}** Your Ticket Has Been Created! \n\n Support will be with you as soon as possible!\n\n Patience is key!\n\n **Ticket ID:** ${ticChannel.id} \n\n Please Tell Us Your Problem Below!!`)
        .setFooter({text: "ZETA", iconURL: "https://imgur.com/wtRAMEK.png"})
        .setTimestamp()
        //.toJSON(); // <-- Add this line

        const ticSuccess = new EmbedBuilder()
        .setColor(0x00AE86)
        .setDescription(`Your Ticket Has Been Created At ${ticChannel}!`)
        //.toJSON(); // <-- Add this line

        const del = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId("del")
            .setLabel("🗑️ Delete Ticket")
            .setStyle(ButtonStyle.Danger),
           /* new ButtonBuilder()
            .setCustomId("transcript")
            .setLabel("📄 Transcript")
            .setStyle(ButtonStyle.Secondary)*/
        )

        try {
            await interaction.reply({ embeds: [ticSuccess], ephemeral: true })
            await ticChannel.send({content: `Welcome <@${interaction.user.id}> !`, embeds: [embed], components: [del] }).catch(err => console.log(err))
        } catch (error) {
            console.log(error)


        }
    }
}