const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js")

module.exports = {
    name: "avatar",
    options: [{
        name: "member",
        type: ApplicationCommandOptionType.User,
        description: "Provide the user.",
        required: true
    }], // Optional
    type: ApplicationCommandType.ChatInput,
    description: "Shows Avatar Of An User Or Your Avatar",
    //guilds: ["1013568585894985758"], // Optional (Makes it a guild cmd in the provided Guild IDs)
    run: async(client, interaction) => {
        try {
            const member = interaction.options.getMember('member') || interaction.member;
            if (!member) return interaction.reply('**Member Not Found!**');
    
            if (interaction.options.length > 0) {
                return interaction.reply({
                    embeds: [
                        {
                            title: `${member.user.username}'s Avatar`,
                            color: 0x00FF00,
                            image: {
                                url: member.user.displayAvatarURL({ dynamic: true, size: 4096 })
                            },
                            timestamp: new Date(),
                            footer: {
                                text: interaction.guild.name,
                                icon_url: interaction.guild.iconURL({ dynamic: true })
                            }
                        }
                    ]
                });
            } else {
                return interaction.reply({
                    embeds: [
                        {
                            title: `${member.user.username}'s Avatar`,
                            color: 0x00FF00,
                            image: {
                                url: member.user.displayAvatarURL({ dynamic: true, size: 4096 })
                            },
                            timestamp: new Date(),
                            footer: {
                                text: interaction.guild.name,
                                icon_url: interaction.guild.iconURL({ dynamic: true })
                            }
                        }
                    ]
                });
            };
        } catch (error) {
            console.error(error);
            return interaction.reply(`An Error Occurred: \`${error.message}\`!`);
        };
    }
}