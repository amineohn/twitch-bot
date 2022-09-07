import { ICommand } from "@/interfaces";
import { Client } from "tmi.js";

const Say: ICommand = {
    name: "say",
    description: "Say something!",
    execute: (client: Client | null, args: string[]) => {
        if (client === null)
            return;

        client.say(args[0], args.slice(1).join(" ")).then(r => console.log(`* replied with "${args.slice(1).join(" ")}"`));
    }
}
export default Say;