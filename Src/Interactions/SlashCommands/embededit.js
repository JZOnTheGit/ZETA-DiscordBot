const { ChannelType, EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js")

module.exports = {
    name: "embededit",
    options: [{
        name: 'channel',
        description: 'Select a channel to edit the embed in',
        type: ApplicationCommandOptionType.Channel,
        required: true,
    },
    {
        name: 'message',
        description: 'Select a message to edit',
        type: ApplicationCommandOptionType.String,
        required: true,
    },
    {
        name: 'color',
        description: 'HECX COLOUR ONLY',
        type: ApplicationCommandOptionType.String,
        required: true,
    }], // Optional
    type: ApplicationCommandType.ChatInput,
    description: "Edit The Embed",
    allClientPermissions: ["SendMessages"],
    allUserPermissions: ["Administrator"],
    //guilds: ["1013568585894985758"], // Optional (Makes it a guild cmd in the provided Guild IDs)
    run: async(client, interaction) => {
        try {
            const role = interaction.guild.roles.cache.find(r => r.name.toLowerCase() === 'access');
            if (!role) return interaction.reply('**Role Not Found - Access**!');
            if (!interaction.member.roles.cache.has(role.id) && !interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply('**You Are Missing Permissions To Execute This Command**!');
    
            const channel = interaction.options.getChannel('channel');
            if (!channel === ChannelType.GuildText) return interaction.reply('**Please Enter A Text Channel!**');
    
            const messageID = interaction.options.getString('message');
            const color = interaction.options.getString('color');
    
            let message;
            try {
                message = await channel.messages.fetch(messageID);
            } catch {
                return interaction.reply('**Message Not Found!**');
            };
    
            interaction.reply('**Please Enter A Message Or Attachment Below!**');
    
            const messageFilter = (msg) => msg.author.id === interaction.user.id && !interaction.user.bot;
            const collector = await interaction.channel.awaitMessages({
                filter: messageFilter,
                max: 1,
                time: 60000
            });
    
            if (collector.size === 0) return interaction.followUp(`**Timeout!**`);
            if (!collector.first().content && collector.first().attachments.size === 0) return interaction.followUp('**Please Enter A Message Or Attachment To Announce!**');
    
            const editEmbed = new EmbedBuilder(message.embeds[0])
                .setColor(color)
                .setDescription(collector.first().content)
                .setTimestamp();
    
            //f (collector.first().content) editEmbed.setAuthor(interaction.guild.name, interaction.guild.iconURL({ dynamic: true }))
            if (collector.first().attachments.size !== 0) editEmbed.setImage(collector.first().attachments.first().url);
    
            interaction.followUp('**Successfully Edited!**');
            return message.edit({ embeds: [editEmbed] });
        } catch (error) {
            console.error(error);
            return interaction.reply(`An Error Occurred: ${error.message}!`);
        };
    }
}