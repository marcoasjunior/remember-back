const express = require('express');
const router = express();
const adapter  = require('./bot/adapter')

router.post('/messages', (req, res) => {

    // Use the adapter to process the incoming web request into a TurnContext object.

    adapter.processActivity(req, res, async (turnContext) => {

        console.log(turnContext)
  
        // Do something with this incoming activity!
        if (turnContext.activity.type === 'message') {        
  
            // Get the user's text
            const utterance = turnContext.activity.text;
  
            if(utterance == 'oi') return await turnContext.sendActivity(`Olá, como vai?`);


            // send a reply
            
           await turnContext.sendActivity(`I heard you say ${ utterance }`);

        }
    })
  })
  


module.exports = router