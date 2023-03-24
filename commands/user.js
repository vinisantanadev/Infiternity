
const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('usuario')
        .setDescription('Mostra informações sobre o usuário.'),

    async execute(interaction) {
        await interaction.reply(`Este comando foi feito por %{interaction.user.username}, que se juntou em ${interaction.member.joinedAt}.`);
    },
};
