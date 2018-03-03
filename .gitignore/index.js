const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Axios, :help");
    console.log("Le bot a bien ete connecte")
});

bot.login("NDE5MjgyNzg4NDc1NDY5ODM0.DXt3EA.WRUuSffvivZH19UWh8bx_rgDQnc");
