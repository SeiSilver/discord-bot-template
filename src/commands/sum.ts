import {ICallbackObject, ICommand} from "wokcommands";
import DiscordJS from "discord.js";

export default {
  category: 'testing',
  description: 'Sum num1 and num2',
  slash: true,
  options: [
    {
      name: 'num1',
      description: 'The first number',
      required: true,
      type: DiscordJS.ApplicationCommandOptionType.Number.toString()
    },
    {
      name: 'num2',
      description: 'The second number',
      required: true,
      type: DiscordJS.ApplicationCommandOptionType.Number.toString()
    }
  ],
  callback(obj: ICallbackObject): any {
    const {options} = obj.interaction;
    if (obj.interaction) {
      const num1 = options.getNumber('num1', true)!;
      const num2 = options.getNumber('num2', true)!;
      obj.interaction.reply({
        content: `sum = ${num1 + num2}`
      })
    }
  }
} as ICommand