const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js")
const figlet = require('figlet');

module.exports = {
    name: "ascii",
    options: [{
        name: "message",
        type: ApplicationCommandOptionType.String,
        description: "Provide the message.",
        required: true
    }], // Optional
    type: ApplicationCommandType.ChatInput,
    description: "Convert test in ASCII yes",
    //guilds: ["1013568585894985758"], // Optional (Makes it a guild cmd in the provided Guild IDs)
    run: async(client, interaction) => {
        const msg = interaction.options.getString("message")

        figlet.text(msg, function (err, data){
            if(err){
                console.log('Something went wrong');
                console.dir(err);
            }
            if(data.length > 2000) return message.channel.send('Please provide text shorter than 2000 characters')

            interaction.reply('```' + data + '```')
        })
    }
}