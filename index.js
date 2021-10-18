// const apiId = "8256277"; 
// const apiHash = "175b94ca0ffffd957f694875100e3faa"; 
const { TelegramClient } = require('telegram')
const { StringSession } = require('telegram/sessions')
const input = require('input') // npm i input

const apiId = 8256277
const apiHash = '175b94ca0ffffd957f694875100e3faa'
const stringSession = new StringSession(''); // fill this later with the value from session.save()
(async () => {
    console.log('Loading interactive example...')
    const client = new TelegramClient(stringSession, apiId, apiHash, { connectionRetries: 5 })
    // await client.start({
    //     phoneNumber: async () => await input.text('number ?'),
    //     password: async () => await input.text('password?'),
    //     phoneCode: async () => await input.text('Code ?'),
    //     onError: (err) => console.log(err),
    // });
    // console.log('You should now be connected.')
    // console.log(client.session.save()) // Save this string to avoid logging in again
    // await client.sendMessage('me', { message: 'Hello!' });

    console.log(client);
})()        
// ------------------------------
// channels.getParticipants
// ------------------------------
