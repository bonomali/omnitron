import { Meteor } from "meteor/meteor";

import { Transports as TransportsClass } from "./transports";

import { Transport as TelegramTransport } from "./builtin/telegramTransport";
import { Transport as WhatsappTransport } from "./builtin/whatsappTransport";
import { Transport as VKTransport } from "./builtin/vkTransport";
import { Transport as MessengerTwilio } from "./builtin/messengerTwilioTransport";

export const Transports = new TransportsClass();

export function registerBasicTransports() {
  const builtInTransports = [
    new TelegramTransport(),
    new WhatsappTransport(),
    new MessengerTwilio(),
    new VKTransport()
  ];

  builtInTransports.forEach(transport => {
    Transports.registerTransport(transport);
  });
}

if (Meteor.isServer) {
  import "./server";
}
