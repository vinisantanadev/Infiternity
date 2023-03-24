
const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("A melhor trilha sonora para você escutar enquanto joga!'"),
    async execute(interaction) {
        await interaction.reply("|| https://open.spotify.com/playlist/5cfRC3hBXNgjX15QdwQokD?si=067a1dce0b67422d ||\n\nAs melhores músicas para escutar enquanto joga!")
    }
}
