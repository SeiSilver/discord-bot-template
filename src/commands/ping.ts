import {ICallbackObject, ICommand} from "wokcommands";

export default {
  category: 'testing',
  description: 'Replies with pong',
  slash: "both",
  callback(obj: ICallbackObject): any {
    if (obj.message) {
      obj.message.reply('pong');
    }
    if (obj.interaction) {
      obj.interaction.reply('pong');
    }
  }
} as ICommand