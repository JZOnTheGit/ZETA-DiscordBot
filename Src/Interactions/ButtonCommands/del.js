module.exports = {
    name : 'del',
    returnErrors: false,
    ownerOnly: true,
    run : async(client, interaction) => {
        const channel = interaction.channel

        channel.delete()
    }
}