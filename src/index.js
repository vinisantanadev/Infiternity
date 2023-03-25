
require('dotenv').config();

const { Client, IntentsBitField, EmbedBuilder } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

// Mensagem de confirmação se o bot ta pronto
client.on('ready', (c) => {
    console.log(`"Oh ${c.user.username}, ta pronto?" To sim 😏 o ${c.user.username} ta pronto 😎`)
});

client.on('interactionCreate', (interaction) => {
    // isso faz com que o comando só rode ser for /slash
    if (!interaction.isChatInputCommand()) return;

    // comando para iniciar o game
    if (interaction.commandName === 'iniciar') {
        const embed = new EmbedBuilder()
            .setColor(0xFAD000)

            .setAuthor({ name: 'criado por: B I L U 👽', iconURL: 'https://i.imgur.com/ZMQfUS8.jpeg', url: 'https://vinisantana.netlify.app' })

            .setTitle("👋 Olá viajante!")
            .setDescription("Este é um jogo de Este é um jogo de escolhas onde você é um viajante do espaço.\nEspero que se divirta!")

            .setThumbnail('https://i.imgur.com/sK3gwHO.png')

            .addFields(
            { name: '\u200B', value: ' ' },
            { name: 'Diário de um Viajante 🧑‍🚀', value: ' ' },
            {
                name: 'nascer',
                value: 'morrer',
                inline: true
            },
            {
                name: 'consciência',
                value: 'inexistência',
                inline: true
            },
            {
                name: 'tempo',
                value: 'vazio',
                inline: true
            },
            { name: '\u200B', value: ' ' },)

            .setImage('https://i.imgur.com/w7H8rxK.png')

            .setFooter({ text: 'Sua jornada começa agora', iconURL: 'https://i.imgur.com/uTDPasE.png' })
            .setTimestamp()

        interaction.reply({ embeds: [ embed ] });
    }

    if (interaction.commandName === 'ping') {
        interaction.reply('pong!')
    }
});

// o bot presta atenção no chat, caso o player mande certa mensagem, ele responde
client.on('messageCreate', (message) => {
    //este comando faz com que o bot responda apenas a players:
    if (message.author.bot) {
        return;
    }

    // se o player pedir pra iniciar:
    if (message.content == 'iniciar jornada') {
        message.reply(`iniciar jornada`)
    }
});

client.login(process.env.TOKEN);
