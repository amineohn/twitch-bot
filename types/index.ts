import { ICommand } from "@/interfaces";
import { ChatUserstate, Client } from "tmi.js";

export type Command = {
  name: string | undefined;
  modOnly: boolean | undefined;
  command: ICommand[];
  permission: string | undefined;
  execute: (
    client: Client | null,
    args: string[],
    userState?: ChatUserstate
  ) => void;
};
