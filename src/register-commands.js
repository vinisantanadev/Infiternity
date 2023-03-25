
require('dotenv').config();

const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    {
        name: 'iniciar',
        description: 'Inicie sua jornada',
    }
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('📜 Registrando comandos...');

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        )
        
        console.log('👍 Comando registrados com sucesso! 📜')
    }
    catch (error) {
        console.log(`Deu ruim rapaziada, pai não ta bem ${error}`)
    }
})();
