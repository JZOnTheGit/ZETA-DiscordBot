// Include discord.js ShardingManager
const { ShardingManager } = require("discord.js");

// Create your ShardingManager instance
const manager = new ShardingManager("./bot.js", {
    // for ShardingManager options see:
    // https://discord.js.org/#/docs/main/stable/class/ShardingManager
    totalShards: "auto",
    token: "OTg4ODU2NDEyMzA0MTk5NzAw.G3QV9S.B0Xjgss-MyZ-25RTZjwylKswwNTf1Y0MZYZwDA"
});

// Emitted when a shard is created
manager.on("shardCreate", (shard) => console.log(`Shard ${shard.id} launched`));

// Spawn your shards
manager.spawn();