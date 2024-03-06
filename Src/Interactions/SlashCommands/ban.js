const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js")


module.exports = {
    name: "ban",
    options: [{
        name: "member",
        type: ApplicationCommandOptionType.User,
        description: "Select a member to ban",
        required: true
    },
    {
        name: 'reason',
        description: "Select a reason to ban",
        type: ApplicationCommandOptionType.String,
        required: true,
    }], // Optional
    type: ApplicationCommandType.ChatInput,
    description: "ban users yes",
    allClientPermissions: ["BanMembers"],
    allUserPermissions: ["BanMembers"],
    //guilds: ["1013568585894985758"], // Optional (Makes it a guild cmd in the provided Guild IDs)
    run: async(client, interaction) => {
        try {
            //if (!interaction.member.permissions.has("BAN_MEMBERS")) return interaction.reply("**You Don't Have The Permission To Ban Users!**");
            //if (!interaction.guild.me.permissions.has("BAN_MEMBERS")) return interaction.reply("**I Don't Have The Permission To Ban Users!**");
    
            const banMember = interaction.options.getMember('member');
            const reason = interaction.options.getString('reason') || 'No Reason Provided';
    
            if (!banMember) return interaction.reply("**User Is Not In The Server**");
            if (banMember === interaction.member) return interaction.reply("**You Cannot Ban Yourself!**");
            if (!banMember.bannable) return interaction.reply("**Cannot Ban That User!**");
    
            interaction.guild.bans.create(banMember.id, { days: 0, reason: reason.length !== 0 ? reason : 'No Reason Provided' }).then(() => {
                const banEmbed = new EmbedBuilder()
                    .setColor(0xFF0000)
                    //.setAuthor(banMember.user.username, banMember.user.displayAvatarURL({ dynamic: true }))
                    .setDescription(`
                **Hello, You Have Been Banned From ${interaction.guild.name}
                ${reason.length !== 0 ? `\n\`Reason\` - ${reason}` : ''}**`)
                   // .setFooter(interaction.guild.name, interaction.guild.iconURL({ dynamic: true }))
                    .setTimestamp();
                banMember.send({ embeds: [banEmbed] }).catch(() => null);
            }).catch(() => {
                return interaction.reply(`Couldn't Ban ${banMember}`);
            });
    
            const confirmEmbed = new EmbedBuilder()
                .setColor(0x00FF00)
                //.setAuthor(interaction.guild.name, interaction.guild.iconURL({ dynamic: true }))
                .setDescription(`
                **${banMember.user.username} Has Been Banned
                ${reason.length !== 0 ? `\n\`Reason\` - ${reason}` : '\n\`Reason\` - No Reason Provided'}**`)
                //.setFooter(this.bot.user.username, this.bot.user.displayAvatarURL())
                .setTimestamp();
            return interaction.reply({ embeds: [confirmEmbed] });
        } catch (error) {
            console.error(error);
            return interaction.reply(`An Error Occurred: \`${error.message}\`!`);
        };
    }
}