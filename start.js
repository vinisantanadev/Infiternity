const { SlashCommandBuilder, EmbedBuilder } = require("discord.js") 

module.exports = {

    data: new SlashCommandBuilder()
        .setName("start")
        .setDescription("Comece sua jornada!'"),

    async execute(interaction) {
        await interaction.reply("Pong!")
    }

}