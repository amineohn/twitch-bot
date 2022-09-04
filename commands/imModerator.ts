// @ts-ignore
import { ICommand } from "@/interfaces";
import { ChatUserstate, Client } from "tmi.js";

const imModerator: ICommand = {
    name: "imModerator",
    description: "I'm a moderator!",
    execute: (client: Client | null, args: string[], userState: ChatUserstate) => {
        if (client === null)
            return;
        const isModerator = client.isMod(args[0], args[1]);
        const moderator = isModerator
            ? `Yes, @${userState["display-name"]}. You are a mod!`
            : `No, @${userState["display-name"]}.`;
        client.say(args[0], moderator).then(r => console.log(`* replied with "${moderator}"`));
    }
}
export default imModerator;