import { Client, Options } from "tmi.js";
import type { ChatUserstate } from "tmi.js";
import Config from "../utils/config";
import fs from "fs";
import { Command } from "@/types";
import {Loggers} from "@utils/logger";

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
    const commands: string[] = await fs.promises.readdir("./commands");
    for (const commandFile of commands) {
        const command: Command = await import(`../commands/${commandFile}`);
        const commandName = commandFile.split(".")[0];
        if (commandName === command.name) {
            if (command.modOnly && !isMod) {
                reply = "You must be a moderator to use this command.";
                break;
            }
            command.execute(client, args, userState);
        }
    }

    if (reply === "" || typeof <Options>config.account?.identity === "undefined")
        return;

    await client.say(channel, reply);
    await logger.debug(`* sent: "${reply}"`);
}