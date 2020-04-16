const { ActionTypes, CardFactory } = require('botbuilder');

async function sendIntroCard(context) {
    const card = CardFactory.heroCard(
        'Seja bem-vindo ao nosso assistente virtual',
        'Aqui é possível escolher como navegar no nosso app!',
        ['https://res.cloudinary.com/dxblalpv2/image/upload/v1587055018/banner_zas3px.png'],
        [
            {
                type: ActionTypes.OpenUrl,
                title: 'Deseja entrar no sistema?',
                value: 'https://link-leito.netlify.com/#/Home'
            },
            {
                type: ActionTypes.OpenUrl,
                title: 'Ask a question',
                value: 'https://stackoverflow.com/questions/tagged/botframework'
            },
            {
                type: ActionTypes.OpenUrl,
                title: 'Learn how to deploy',
                value: 'https://docs.microsoft.com/en-us/azure/bot-service/bot-builder-howto-deploy-azure?view=azure-bot-service-4.0'
            }
        ]
    );

    await context.sendActivity({ attachments: [card] });
}

module.exports = sendIntroCard