import {ICommand} from "@/interfaces";
import {ChatUserstate, Client} from "tmi.js";
import {Loggers} from "@/repositories/logger";
import {Permission} from "@/handler/CommandHandler";

const imModerator: ICommand = {
    name: "imModerator",
    description: "I'm a moderator!",
    permission: Permission.MOD,
    execute: (client: Client | null, args: string[], permission: Permission, logger: Loggers, userState: ChatUserstate) => {

        if (client === null)
            return;

        if (permission !== Permission.MOD) {
            logger.warn(`* ${userState.username} tried to use the command "imModerator" but doesn't have the permission to do so!`)
                .then(r => client.say(args[0], `@${userState.username} you don't have the permission to use this command!`));
            return;
        }

        const isModerator = client.isMod(args[0], args[1]);
        const moderator = isModerator
            ? `Yes, @${userState["display-name"]}. You are a mod!`
            : `No, @${userState["display-name"]}.`;

        client.say(args[0], moderator).then(r => logger.warn(`* replied with "${moderator}"`));
    }
}
export default imModerator;