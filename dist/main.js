"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const log4js_1 = require("log4js");
const dotenv_1 = require("dotenv");
//Load enviremnt variables from .env
(0, dotenv_1.config)();
const logger = (0, log4js_1.getLogger)();
logger.level = 'debug';
//Intents
const intents = [discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.DIRECT_MESSAGES];
const client = new discord_js_1.Client({
    intents,
});
client.login(process.env.DISCORD_TOKEN);
client.on('ready', () => {
    logger.info('Bot has started!');
});
