const { ChannelType, EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js")

module.exports = {
    name: "embed",
    options: [{
        name: 'channel',
        description: 'Select a channel to send the embed to',
        type: ApplicationCommandOptionType.Channel,
        required: true,
    },
    {
        name: 'color',
        description: 'INPUT HEX COLOR',
        type: ApplicationCommandOptionType.String,
        required: true,
    }], // Optional
    type: ApplicationCommandType.ChatInput,
    description: "make embed yes",
    allClientPermissions: ["SendMessages"],
    allUserPermissions: ["Administrator"],
    //guilds: ["1013568585894985758"], // Optional (Makes it a guild cmd in the provided Guild IDs)
    run: async(client, interaction) => {
        try {
            const role = interaction.guild.roles.cache.find(r => r.name.toLowerCase() === 'access');
            if (!role) return interaction.reply('**Role Not Found - Access**!');
            if (!interaction.member.roles.cache.has(role.id) && !interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply('**You Are Missing Permissions To Execute This Command**!');
    
            const channel = interaction.options.getChannel('channel');
            if (!channel) return interaction.reply('**Channel Not Found!**');
    
            const color = interaction.options.getString('color');
            if (!color) return interaction.reply('**Please Enter A Hex Code or Color Name**');
    
            interaction.reply({ content: '**Please Enter A Message Or Attachment Below!**', ephemeral: true });
    
            const messageFilter = (message) => message.author.id === interaction.user.id && !interaction.user.bot;
            const collector = await interaction.channel.awaitMessages({
                filter: messageFilter,
                max: 1,
                time: 60000
            });
    
            if (collector.size === 0) return interaction.followUp(`**Timeout!**`);
            if (!collector.first().content && collector.first().attachments.size === 0) return interaction.followUp('**Please Enter A Message Or Attachment To Announce!**');
    
            const embed = new EmbedBuilder()
                .setColor(color)
                .setTimestamp();
    
            if (collector.first().content) {
                //embed.setAuthor(interaction.guild.name, interaction.guild.iconURL({ dynamic: true }))
                embed.setDescription(collector.first().content);
            };
            if (collector.first().attachments.size !== 0) embed.setImage(collector.first().attachments.first().url);
    
            interaction.followUp(`**Embed Sent In ${channel}**`);
            return channel.send({ embeds: [embed] });
        } catch (error) {
            console.error(error);
            return interaction.reply(`An Error Occurred: \`${error.message}\`!`);
        };
    }
}