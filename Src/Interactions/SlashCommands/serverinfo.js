const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js")

module.exports = {
    name: "serverinfo",
    
    type: ApplicationCommandType.ChatInput,
    description: "Get Info On Server",
    allClientPermissions: ["SendMessages"],
    allUserPermissions: ["SendMessages"],
    //guilds: ["1013568585894985758"], // Optional (Makes it a guild cmd in the provided Guild IDs)
    run: async(client, interaction) => {
       // if (!interaction.member.permissions.has("SEND_MESSAGES")) return interaction.reply("**You Don't Have The Permission To Ban Users!**");
       // if (!interaction.guild.me.permissions.has("SEND_MESSAGES")) return interaction.reply("**I Don't Have The Permission To Ban Users!**");

    const daGuild = interaction.guild

    let embed = new EmbedBuilder()
    .setColor(0xFF0000)
    .setTitle(`Server Info: ${daGuild.name}`)
    //.setAuthor(`${interaction.author.tag}`, `${interaction.author.displayAvatarURL({dynamic: true})}`)
    .setThumbnail(daGuild.iconURL({ dynamic: true }))
    .addFields(
        { name: 'Name:', value: `${daGuild.name}`, inline: true},
        { name: 'ID:', value: `${daGuild.id}\n`, inline: true},
        { name: 'Owner:', value: `<@${daGuild.ownerId}>\n`, inline: true},
        { name: 'Members:', value: `${daGuild.members.cache.size}`, inline: true},
        { name: 'Users:', value: `${daGuild.members.cache.filter(member => !member.user.bot).size}`, inline: true},
        { name: 'Bots:', value: `${daGuild.members.cache.filter(member => member.user.bot).size}`, inline: true},
        { name: 'Date of Creation:', value: `\`\`\`${daGuild.createdAt.toLocaleString()}\`\`\``},
    )
    .setTimestamp()
    //.setFooter("ZETA", client.user.displayAvatarURL())

    await interaction.reply({ embeds: [embed] }).then((msg) => {
        if(client.config.deleteCommands) {
            setTimeout(() => {
                msg.delete().catch(e => {});
            }, 14000);
        }
    }).catch(e => {});
    }
}