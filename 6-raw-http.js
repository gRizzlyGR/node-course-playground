const https = require('https')

const url = 'https://api.darksky.net/forecast/95c07aeb503731e1c84b7c0eff960756/40,-75?units=si'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log(error)
})

request.end()