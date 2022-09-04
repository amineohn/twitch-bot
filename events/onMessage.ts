import tmi from "tmi.js";
import type { ChatUserstate } from "tmi.js";
import Config from "../utils/config";
import fs from "fs";
// @ts-ignore
import {ICommand, ListCommands} from "@/interfaces";
// @ts-ignore
import {Command} from "@/types";
const config = new Config();
const client = new tmi.Client(config.account);

export const onMessage = async (
    channel: string,
    userState: ChatUserstate,
    message: string,
    self: boolean
) => {
    if (self || !message.startsWith(config.identifier)) return;
    message = message.slice(1);

    const words = message.match(/\S+/g) ?? [];
    const command = (words[0] ?? "").toLowerCase();
    const args = words.slice(1);

    const isMod = userState.mod || userState.username === channel.slice(1);

    console.log(`* got: command - "${command}", arguments: "${args}"`);

    let reply = "";
    const commands: Command = await fs.promises.readdir("./commands");
    for (const commandFile of commands) {
        const command: ListCommands = await import(`../commands/${commandFile}`);
        // @ts-ignore
        if (command.name === command) {
            // @ts-ignore
            if (command.modOnly && !isMod) {
                reply = "You must be a moderator to use this command.";
                break;
            }
            // @ts-ignore
            command.execute(client, args, userState);
        }
    }
    if (reply === "" || typeof config.account["identity"] === "undefined") return;

    await client.say(channel, reply);
    console.log(`* replied with "${reply}"`);
}