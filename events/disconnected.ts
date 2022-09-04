import { Client } from "tmi.js";
export const Disconnected = async (client?: Client | null, message?: string) => {
    switch(message) {
        case "Connection closed":
            message += " - Connection closed by the server";
            break;
        case "Connection timed out":
            message += " - Connection timed out - reconnecting...";
            break;
        case "Connection error":
            message += " - Connection error - reconnecting...";
            break;
        case "Connection failed":
            message += " - Connection failed - reconnecting...";
            break;
        case "Connection refused":
            message += " - Connection refused - reconnecting...";
            break;
        case undefined:
            message = "Disconnected - reconnecting...";
            break;
    }
    try {
        console.log("* disconnected for this reason: " + message);
    }
    catch (e) {
        console.error(e);
    }
}
