import {ICommand} from "@/interfaces";
import {ChatUserstate, Client} from "tmi.js";
import {Loggers} from "@/repositories/logger";
import {Permission} from "@/handler/CommandHandler";

const imModerator: ICommand = {
    name: "imModerator",
    description: "I'm a moderator!",
    permission: Permission.MOD,
    execute: (client: Client | null, args: string[], permission: Permission, logger: Loggers, userState: ChatUserstate) => {

        if(permission === Permission.MOD)
            return;

        if (client === null)
            return;

        const isModerator = client.isMod(args[0], args[1]);
        const moderator = isModerator
            ? `Yes, @${userState["display-name"]}. You are a mod!`
            : `No, @${userState["display-name"]}.`;

        client.say(args[0], moderator).then(r => logger.warn(`* replied with "${moderator}"`));
    }
}
export default imModerator;