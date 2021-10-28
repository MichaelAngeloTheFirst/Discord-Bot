import { Intents, Client } from 'discord.js';
import { getLogger } from 'log4js';
import { config } from 'dotenv';

//Load enviremnt variables from .env
config();

const logger = getLogger();
logger.level = 'debug';

//Intents
const intents = [Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES];

const client = new Client({
  intents,
});

client.login(process.env.DISCORD_TOKEN);
client.on('ready', () => {
  logger.info('Bot has started!');
});
