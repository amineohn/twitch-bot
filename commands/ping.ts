import {ICommand} from "@/interfaces";
import {Client} from "tmi.js";
import {Loggers} from "@/repositories/logger";
import {Permission} from "@/handler/CommandHandler";

const ping: ICommand = {
    name: "ping",
    description: "Ping!",
    permission: Permission.SUBSCRIBER,
    execute: (client: Client | null, args: string[], permission: Permission,  logger: Loggers) => {

        if(permission === Permission.SUBSCRIBER)
            return;

        if (client === null)
            return;

        client.say(args[0], "Pong!").then(r => logger.warn(`* replied with "Pong!"`));
    }
}
export default ping;