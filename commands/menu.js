
const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, Component } = require("discord.js")

const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder("Nenhuma linguagem selecionada")
            .addOptions ({
                label: "javascript",
                description: "Veja a documentação",
                value: "javascript"
            })
    )

module.exports = {
    data: new SlashCommandBuilder()
        .setName("menu")
        .setDescription("teste menu'"),

    async execute(interaction) {
        await interaction.reply({content: "Selecione uma das tecs: ", components: [row]})
    }
}
