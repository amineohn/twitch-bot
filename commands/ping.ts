import { ICommand } from "@/interfaces";
import { Client } from "tmi.js";

const ping: ICommand = {
    name: "ping",
    description: "Ping!",
    execute: (client: Client | null, args: string[]) => {
        if (client === null)
            return;

        client.say(args[0], "Pong!").then(r => console.log(`* replied with "Pong!"`));
    }
}
export default ping;