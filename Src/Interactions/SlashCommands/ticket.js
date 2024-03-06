const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType, ButtonStyle, ButtonBuilder, ActionRowBuilder  } = require("discord.js")
const ms = require('ms')

module.exports = {
    name: "ticket",
    options: [{
        name: "channel",
        type: ApplicationCommandOptionType.Channel,
        description: "Create A Ticket sent to a channel.",
        required: true
    }], // Optional
    type: ApplicationCommandType.ChatInput,
    description: "Create A Ticket sent to a channel.",
    allClientPermissions: ["ManageGuild"],
    allUserPermissions: ["ManageGuild"],
    //guilds: ["1013568585894985758"], // Optional (Makes it a guild cmd in the provided Guild IDs)
    run: async(client, interaction) => {
        const channel = interaction.options.getChannel("channel");

        const ticketEmbed = new EmbedBuilder()
        .setColor(0x00AE86)
        .setAuthor({name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true })})
        .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
        .setDescription(
            "__**How To Create A Ticket**__\n\n" + "> Click On The Button Below Saying 'Create Ticket'\n" +"> Once The Ticket Is Made, You Will Be Able To Type In There!"

        )
        .setTitle("Ticket System")
        .setFooter({text: "Ticket System", iconURL: interaction.guild.iconURL({ dynamic: true })})
        .setTimestamp()


        const bt = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId("tic")
            .setLabel("🎟️ Create Ticket")
            .setStyle(ButtonStyle.Primary)
        )

        channel.send({ embeds: [ticketEmbed], components: [bt] });

        interaction.reply({ content: "Ticket System Sent To " + channel, ephemeral: true });

    }
    }
