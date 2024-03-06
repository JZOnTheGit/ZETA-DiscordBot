module.exports = {
    name: "anime",
    run: async (DiscordClient, interaction) => {
        interaction.reply({
            embeds: [
                {
                    title: `(z+)(/) Anime Commands 🖼`,
                    description: `
                    **(z+)(/)pat** \`- Draw a user anime style\`\n**(z+)(/)punch** \`- Punch a yute 😎\`\n**(z+)(/)wink** \`- Wink at a user\`\n**(z+)(/)waifu** \`- Get a random waifu\`\n
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