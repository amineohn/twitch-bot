import { ICommand } from "@/interfaces";
import { Client } from "tmi.js";
import { Loggers } from "@/repositories/logger";
import { Permission } from "@/handler/CommandHandler";

const Say: ICommand = {
  name: "say",
  description: "Say something!",
  permission: Permission.MOD,
  execute: (
    client: Client | null,
    args: string[],
    permission: Permission,
    logger: Loggers
  ) => {
    if (client === null) return;

    if (permission !== Permission.MOD) {
      logger
        .warn(
          `* ${args[1]} tried to use the command "say" but doesn't have the permission to do so!`
        )
        .then((r) =>
          client.say(
            args[0],
            `@${args[1]} you don't have the permission to use this command!`
          )
        );
      return;
    }

    client
      .say(args[0], args.slice(1).join(" "))
      .then((r) => logger.warn(`* replied with "${args.slice(1).join(" ")}"`));
  },
};
export default Say;
