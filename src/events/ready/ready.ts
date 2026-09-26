import { startRoleIncomeService } from "@utils/melancholy/roleIncomeService";
import { BotClient } from "@ctypes/commands";
import { defineEvent } from "@core/events/clientEvent";
import { log } from "@utils/logging/cli_logger";

export const _event = defineEvent("melancholyReady", {
  once: true,

  execute: async (client: BotClient) => {
    startRoleIncomeService(client);
    log.success(
      `[gray::Logged in as] ${client.user?.tag} [gray::present in] ${
        client.guilds.cache.size
      } guild${client.guilds.cache.size === 1 ? "" : "s"}.`
    );
  },
});
