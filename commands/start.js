const { SlashCommandBuilder, EmbedBuilder } = require("discord.js") 

const exampleEmbed = new EmbedBuilder()

    // cor da barra lateral
	.setColor(0xff7649)

    // Titulo
	.setTitle('👋 Olá, Viajante!')

	// Autor e imagem do B I L U
	.setAuthor({ name: 'desenvolvido por B I L U!', iconURL: 'https://i.imgur.com/ZMQfUS8.jpg', url: 'https://vinisantana.netlify.app' })

    // Descrição
	.setDescription('Este é um jogo de escolhas onde você é um viajante do espaço.\nEspero que se divirta!')
	.setThumbnail('https://i.imgur.com/sK3gwHO.png')

    // corpo
	.addFields(
        // Dia
		{ name: 'Diário de um Viajante 🧑‍🚀', 
        // parágrafo
        value: " " },

		{ name: ' ', value: ' ' },
		{ name: 'nascer', value: 'morrer', inline: true },
		{ name: 'consciência', value: 'inexistência', inline: true },
        { name: 'tempo', value: 'vazio', inline: true },
	)
	.setImage('https://i.imgur.com/w7H8rxK.png')
	.setTimestamp()
	.setFooter({ text: 'Sua jornada inicia agora', iconURL: 'https://i.imgur.com/uTDPasE.png' });

module.exports = {

    data: new SlashCommandBuilder()
        .setName("start")
        .setDescription("Comece sua jornada!'"),

    async execute(interaction) {
        await interaction.reply({embeds: [exampleEmbed]})
    }
}