import {ChatUserstate, Client} from "tmi.js";
import {Loggers} from "@/repositories/logger";
import { Permission } from "@/handler/CommandHandler";

export interface ICommand {
    name: string
    description: string
    permission: Permission
    execute: (client: Client | null, args: string[], permission: Permission, logger: Loggers, userState: ChatUserstate) => void
}