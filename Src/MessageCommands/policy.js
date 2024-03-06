const {EmbedBuilder} = require("discord.js");

module.exports = {
    name: "policy",
    aliases: ["terms"],
    run: async(client, message, args) => {
        let embed = new EmbedBuilder()
    .setColor(0x00FF00)
    .setTitle(`ZETAs Privacy Policy and Terms of Service`)
    .setDescription(`Check out the details on the website \n[HERE](https://zeta-bot.webflow.io/policy-terms-conditions)`)
    .setFooter({ text: 'ZETA'})
    .setTimestamp()
    
    await message.channel.send({ embeds: [embed]});
    }
}