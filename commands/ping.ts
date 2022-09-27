import { ICommand } from "@/interfaces";
import { Client } from "tmi.js";
import { Loggers } from "@/repositories/logger";
import { Permission } from "@/handler/CommandHandler";

const ping: ICommand = {
  name: "ping",
  description: "Ping!",
  permission: Permission.SUBSCRIBER,
  execute: (
    client: Client | null,
    args: string[],
    permission: Permission,
    logger: Loggers
  ) => {
    if (client === null) return;

    if (permission !== Permission.SUBSCRIBER) {
      logger
        .warn(
          `* ${args[1]} tried to use the command "ping" but doesn't have the permission to do so!`
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
      .say(args[0], "Pong!")
      .then((r) => logger.warn(`* replied with "Pong!"`));
  },
};
export default ping;
