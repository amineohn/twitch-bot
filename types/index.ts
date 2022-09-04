// @ts-ignore
import {ICommand} from "@/interfaces";

export type Command = {
    name: string;
    modOnly: boolean;
    command: ICommand[];
} | string[];