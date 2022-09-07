import {ChatUserstate, Client} from "tmi.js";

export interface ICommand {
    name: string;
    description: string;
    userState?: ChatUserstate,
    execute: (client: Client | null, args: string[], userState: ChatUserstate) => void;
}