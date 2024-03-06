module.exports = {
    name: "moderation",
    run: async (DiscordClient, interaction) => {
        interaction.reply({
            embeds: [
                {
                    title: `Moderation Commands 🔒`,
                    description: `
                    **(/)ban** \`- Ban someone\`\n**(/)unban** \`- Unban someone\`\n**(/)kick** \`- Kick someone\`\n**(/)purge** \`- Delete messages\`\n
                    

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