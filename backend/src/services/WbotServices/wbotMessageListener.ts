import { Client } from "whatsapp-web.js";

import HandleMessage from "./helpers/HandleMessage";
import HandleMsgAck from "./helpers/HandleMsgAck";

interface Session extends Client {
  id?: number;
}

const wbotMessageListener = (wbot: Session): void => {
  wbot.on("message_create", async msg => {
    HandleMessage(msg, wbot);
  });

  wbot.on("media_uploaded", async msg => {
    HandleMessage(msg, wbot);
  });

  wbot.on("message_ack", async (msg, ack) => {
    HandleMsgAck(msg, ack);
  });
};

export { wbotMessageListener, HandleMessage };