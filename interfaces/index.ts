import {ChatUserstate, Client} from "tmi.js";
import {Loggers} from "@utils/logger";

export interface ICommand {
    name: string
    description: string
    execute: (client: Client | null, args: string[], logger: Loggers, userState: ChatUserstate) => void
}