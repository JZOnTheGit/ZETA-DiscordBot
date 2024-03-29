const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js")

module.exports = {
    name: "unban",
    options: [{
        name: "member",
        type: ApplicationCommandOptionType.User,
        description: "Provide the user to unban.",
        required: true
    }], // Optional
    //type: ApplicationCommandType.ChatInput,
    description: "unban users yes",
    allClientPermissions: ["BanMembers"],
    allUserPermissions: ["BanMembers"],
    //guilds: ["1013568585894985758"], // Optional (Makes it a guild cmd in the provided Guild IDs)
    run: async(client, interaction) => {
        try {
            //if (!interaction.member.permissions.has("BAN_MEMBERS")) return interaction.reply("**You Don't Have The Permission To Unban Users!**");
            //if (!interaction.guild.me.permissions.has("BAN_MEMBERS")) return interaction.reply("**I Don't Have The Permission To Unban Users!**");
    
            const userID = interaction.options.getUser('member');
            let bannedMember;
            
            try {
                bannedMember = await interaction.guild.bans.fetch(userID);
            } catch {
                return interaction.reply("**Please Provide A Valid User Or ID Or The User Is Not Banned!**");
            };
    
            try {
                await interaction.guild.bans.remove(bannedMember.user.id);
            } catch {
                return interaction.reply(`Couldn't Unban ${bannedMember}`);
            };
    
            const banEmbed = new EmbedBuilder()
                .setColor(0x00FF00)
                //.setAuthor(bannedMember.user.username, bannedMember.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`**${bannedMember.user.tag} Has Been Unbanned From ${interaction.guild.name}**`)
               // .setFooter(interaction.guild.name, interaction.guild.iconURL({ dynamic: true }))
                .setTimestamp();
            return interaction.reply({ embeds: [banEmbed] });
        } catch (error) {
            console.error(error);
            return interaction.reply(`An Error Occurred: \`${error.message}\`!`);
        };
    }
}