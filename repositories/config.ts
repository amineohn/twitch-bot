import type { Options } from "tmi.js";
import {Helper} from ".//helper";

class Config {
  public account: Options | undefined;
  public identifier: string = "!";
  public helper: Helper = new Helper();

  constructor() {
    if (!this.helper.isEmptyObject(process.env.TWITCH_USERNAME) &&
        !this.helper.isEmptyObject(process.env.TWITCH_OAUTH_TOKEN) &&
        !this.helper.isEmptyObject(process.env.TWITCH_CHANNEL)) {
      console.error("Missing environment variables in .env file. Please check the README.md for more information." + "" +
       "\n" + "TWITCH_USERNAME" + "" +
       "\n" + "TWITCH_OAUTH_TOKEN" + "" +
       "\n" + "TWITCH_CHANNEL");
    }

    this.account = {
      identity: {
        username: process.env.TWITCH_USERNAME,
        password: process.env.TWITCH_OAUTH_TOKEN,
      },
      channels: [process.env.TWITCH_CHANNELS ?? ""],
    };
    this.identifier = process.env.IDENTIFIER ?? "!";
  }

}
export default Config;