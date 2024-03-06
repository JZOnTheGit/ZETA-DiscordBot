const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType, version } = require("discord.js")
const moment = require("moment");
require("moment-duration-format");
const os = require("os");
const si = require("systeminformation");

module.exports = {
    name: "stats",
    
    type: ApplicationCommandType.ChatInput,
    description: "Displays bot status.",
    //guilds: ["1013568585894985758"], // Optional (Makes it a guild cmd in the provided Guild IDs)
    run: async(client, interaction) => {
        
        await interaction.deferReply({
            ephemeral: false,
          });
      
          const duration1 = moment
            .duration(interaction.client.uptime)
            .format(" d [days], h [hrs], m [mins], s [secs]");
          const cpu = await si.cpu();
          //const about = interaction.client.emoji.about;
          let guildsCounts = await client.shard.fetchClientValues(
            "guilds.cache.size"
          );
          let userCounts = await client.shard.fetchClientValues("users.cache.size");
      
          const embed = new EmbedBuilder()
            .setColor(0x00FFFF)
            .setThumbnail(interaction.client.user.displayAvatarURL())
            .setDescription(`**Status**
                      **= STATISTICS =**
                      **• Servers** : ${guildsCounts.reduce(
                        (x, count) => x + count,
                        0
                      )}
                        **• Users** : ${userCounts.reduce((x, count) => x + count, 0)}
                      **• Discord.js** : v${version}
                      **• Node** : ${process.version}
                      **= SYSTEM =**
                      **• Platfrom** : ${os.type}
                      **• Uptime** : ${duration1}
                      **• CPU** :
                      > **• Cores** : ${cpu.cores}
                      > **• Model** : ${os.cpus()[0].model} 
                      > **• Speed** : ${os.cpus()[0].speed} MHz
                      **• MEMORY** :
                      > **• Total Memory** : ${(os.totalmem() / 1024 / 1024).toFixed(
                        2
                      )}mb
                      > **• Free Memory** : ${(os.freemem() / 1024 / 1024).toFixed(
                        2
                      )}mb
                      > **• Heap Total** : ${(
                        process.memoryUsage().heapTotal /
                        1024 /
                        1024
                      ).toFixed(2)}mb
                      > **• Heap Usage** : ${(
                        process.memoryUsage().heapUsed /
                        1024 /
                        1024
                      ).toFixed(2)}mb
                  `);
          interaction.followUp({ embeds: [embed] });
        },
    }
