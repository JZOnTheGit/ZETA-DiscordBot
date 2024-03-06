module.exports = {
    name: "utillity",
    run: async (DiscordClient, interaction) => {
        interaction.reply({
            embeds: [
                {
                    title: `Utillity Commands 🔧`,
                    description: `
                    **(/)avatar** \`- Check someone's avatar\`\n**(/)serverinfo** \`- Check the server info\`\n**(/)user **- \`Check the user info\`\n**(/)botinfo** - \`Check the bot info\`\n**(/)embed** - \`Create an embed\`\n**(/)embededit** - \`Edit an embed\`\n**(/)ticket** - \`Multi-Server Ticket System\`\n

                    

                    `,
                    color: 0x00FFFF,
                    thumbnail: {
                        url: "https://i.imgur.com/wtRAMEK.png"
                    },
                    timestamp: new Date(),
                    footer: {
                        text: interaction.guild.name,
                        icon_url: interaction.guild.iconURL({ dynamic: true })
                    }
                }
            ]
        })
    }
}

//\`(/)remind - Create | edit | delete | view a reminder\`\n