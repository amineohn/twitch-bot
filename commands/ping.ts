import { ICommand } from "@/interfaces";
import { Client } from "tmi.js";
import { Loggers } from "@utils/logger";

const ping: ICommand = {
    name: "ping",
    description: "Ping!",
    execute: (client: Client | null, args: string[], logger: Loggers) => {

        if (client === null)
            return;

        client.say(args[0], "Pong!").then(r => logger.warn(`* replied with "Pong!"`));
    }
}
export default ping;