import tmi from "tmi.js";
import type { ChatUserstate } from "tmi.js";
import Config from "../utils/config";
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

    switch (command) {
        case "ping":
            reply = "Pong!";
            break;
        case "pong":
            reply = "Ping?";
            break;
        case "say":
            reply = args.join(" ");
            break;
        case "amiamod":
            reply = isMod
                ? `Yes, @${userState["display-name"]}. You are a mod!`
                : `No, @${userState["display-name"]}.`;
            break;
    }

    if (reply === "" || typeof config.account["identity"] === "undefined") return;

    await client.say(channel, reply);
    console.log(`* replied with "${reply}"`);
}