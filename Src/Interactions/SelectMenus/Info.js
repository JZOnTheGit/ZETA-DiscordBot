module.exports = {
    name: "info",
    run: async (DiscordClient, interaction) => {
        interaction.reply({
            embeds: [
                {
                    title: `Info Commands 📢`,
                    description: `
                    **(/)help** \`- This command\`\n**(z+)(/)ping** \`- Check the latency of the bot\`\n**(z+)(/)policy**\` - Check the privacy policy and terms and conditions\`\n**(/)user** \`- Check the user info\`\n**(/)stats** \`- Bot Stats\`\n**(/)invite** \`- Invite the bot\`\n

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