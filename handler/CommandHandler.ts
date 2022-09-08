import { ChatUserstate, Client } from "tmi.js";
import { Command } from "@/types";

export class CommandHandler {
    public readonly client: Client;
    commands: Command[];
    constructor(client: Client) {
        this.client = client;
        this.commands = [];
    }
    public async handle(message: string, channel: string, tags: ChatUserstate) {
        const args = message.slice(1).split(' ');
        const command = args.shift();
        if (!command) {
            return;
        }
        const cmd = this.commands.find((cmd) => cmd.name === command);
        if (!cmd) {
            return;
        }
        if (cmd.permission === 'mod' && !tags.mod) {
            return;
        }
        if (cmd.permission === 'subscriber' && !tags.subscriber) {
            return;
        }
        if (cmd.permission === 'broadcaster' && tags.username !== channel.slice(1)) {
            return;
        }
        cmd.execute(this.client, args, tags);
    }
    public async registerCommand(command: Command) {
        this.commands.push(command);
    }
    public has(command: string) {
        return this.commands.some((cmd) => cmd.name === command);
    }
}