import {ICommand} from "@/interfaces";
import {Client} from "tmi.js";
import {Loggers} from "@/repositories/logger";
import {Permission} from "@/handler/CommandHandler";

const Say: ICommand = {
    name: "say",
    description: "Say something!",
    permission: Permission.MOD,
    execute: (client: Client | null, args: string[], permission: Permission, logger: Loggers) => {

        if (permission === Permission.MOD)
            return;

        if (client === null)
            return;

        client.say(args[0], args.slice(1).join(" ")).then(r => logger.warn(`* replied with "${args.slice(1).join(" ")}"`));
    }
}
export default Say;