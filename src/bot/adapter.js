const botbuilder = require('botbuilder');

module.exports  = new botbuilder.BotFrameworkAdapter({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword
  })