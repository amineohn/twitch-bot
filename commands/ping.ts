import {ICommand} from "../interfaces/index";

const Ping: ICommand = () => {
    return {
        name: "ping",
        description: "Ping!",
        usage: "ping",
        aliases: ["pong"],
        execute: (message) => {
            message.channel.send("Pong!");
        },
        args: false,
    };
}
export default Ping;