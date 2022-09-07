import { ICommand } from "@/interfaces";
import { ChatUserstate, Client } from "tmi.js";

export type ListCommands = {
    name: string | undefined;
    modOnly: boolean | undefined;
    command: ICommand[];
    execute: (client: Client | null, args: string[], userState?: ChatUserstate) => void;
}