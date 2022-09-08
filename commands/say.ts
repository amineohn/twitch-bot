import { ICommand } from "@/interfaces";
import { Client } from "tmi.js";
import { Loggers } from "@utils/logger";

const Say: ICommand = {
    name: "say",
    description: "Say something!",
    execute: (client: Client | null, args: string[], logger: Loggers) => {

        if (client === null)
            return;

        client.say(args[0], args.slice(1).join(" ")).then(r => logger.warn(`* replied with "${args.slice(1).join(" ")}"`));
    }
}
export default Say;