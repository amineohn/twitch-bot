import {ChatUserstate, Client} from "tmi.js";

export interface ICommand {
    name: string;
    description: string;
    userState?: ChatUserstate,
    execute: (client: Client | null, args: string[]) => void;
}
export interface ListCommands {
    name: string;
    modOnly: boolean;
    command: ICommand[];
    execute: (client: Client | null, args: string[]) => void;
}