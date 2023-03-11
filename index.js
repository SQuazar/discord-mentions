require('dotenv').config();
const axios = require('axios')

const token = process.env.USER_TOKEN;

axios({
    method: 'POST',
    url: 'https://discord.com/api/channels/1082385530576175235/messages',
    headers: {
        'authorization': token
    },
    data: {
        'content': '<@313036488424292355> хууууууууууууууууууууй',
        'allowed_mentions': {
            'parse': []
        }
    }
})