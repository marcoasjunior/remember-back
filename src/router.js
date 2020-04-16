const express = require('express');
const router = express();
const { MemoryStorage, UserState } = require('botbuilder')
const adapter = require('./bot/adapter')
const Bot = require('./bot/bot')
const memoryStorage = new MemoryStorage();
const userState = new UserState(memoryStorage);

const myBot = new Bot(userState) // Cria a instância e recebe o gerenciador de estado do usuário

router.post('/messages', (req, res) => {

    adapter.processActivity(req, res, async (context) => {

      // Route to main dialog.
      await myBot.run(context);
    })
  })


module.exports = router