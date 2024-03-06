module.exports = {
    name: "fun",
    run: async (DiscordClient, interaction) => {
        interaction.reply({
            embeds: [
                {
                    title: `(z+)(/) Fun Commands 🎲`,
                    description: `
                    **(z+)(/) ascii** \`- Convert text to ascii\`\n**(z+)(/) pat** \`- Draw a user anime style\`\n**(z+)(/) punch** \`- Punch a yute 😎\`\n**(z+)(/) wink** \`- Wink at a user\`\n**(z+)(/) waifu** \`- Get a random waifu\`\n**(/) 8ball** \`- Ask a question\`\n**(/) catsay** \`- make the cat say smth\`\n**(/) hack** \`- hack a user (jks)\`\n**(/)choose** \`- Make The Bot Choose\`\n
                   

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