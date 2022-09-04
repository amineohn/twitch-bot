export interface ICommand {
    name: string;
    description: string;
    usage: string;
    aliases: string[];
    execute: (message: any, args: string[]) => void;
    args: boolean;
}