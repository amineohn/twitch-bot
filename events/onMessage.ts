import { Client, Options } from "tmi.js";
import type { ChatUserstate } from "tmi.js";
import Config from "../repositories/config";
import fs from "fs";
import { Command } from "@/types";
import {Loggers} from "@/repositories/logger";
import {CommandHandler} from "@/handler/CommandHandler";

const config = new Config();
const client = new Client(<Options>config.account);

export const onMessage = async (
    channel: string,
    userState: ChatUserstate,
    message: string,
    self: boolean
) => {

    if (self || !message.startsWith(config.identifier))
        return;

    message = message.slice(1);
    const logger = new Loggers();
    const words = message.match(/\S+/g) ?? [];
    const command = (words[0] ?? "").toLowerCase();
    const args = words.slice(1);

    const isMod = userState.mod || userState.username === channel.slice(1);

    await logger.debug(`* got: command - "${command}", arguments: "${args}"`);
    let reply = "";

    const commandHandler = new CommandHandler(client);
    const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.ts'));
    for (const file of commandFiles) {
        const command = require(`../commands/${file}`);
        await commandHandler.registerCommand(command);
        if (commandHandler.has(command.name)) {
            await commandHandler.handle(message, channel, userState);
        }
    }


    if (reply === "" || typeof <Options>config.account?.identity === "undefined")
        return;

    await client.say(channel, reply);
    await logger.debug(`* sent: "${reply}"`);
}