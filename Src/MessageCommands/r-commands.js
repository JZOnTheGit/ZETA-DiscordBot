module.exports = {
    name: "r-commands",
    aliases: [""],
    ownerOnly: true,
    run: async(client, message, args) => {
        client.application.commands.fetch().then(c=> console.log(c))
        
        
        

    }
}