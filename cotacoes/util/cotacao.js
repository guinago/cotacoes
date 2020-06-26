// Consulta de Ativo Utillizando Request
const request = require('request')

const api_token = 'ruZVTGfeGyFGC0detC7ODzbu4XSBeJJIBn9BvMVPXQSxeSdfAorXP1MAo7Su'
const cotacao = (symbol, callback) => {
    const url = `https://api.worldtradingdata.com/api/v1/stock?symbol=${symbol},TWTR&api_token=${api_token}`

    request({url: url, json: true}, (err, response) =>{
        if(err){
            return new Error(`Something went wrong: ${err}`)
        }
        
        
        
        if(response.body.data === undefined){
           return new Error(`No data found`)
        }
        
        const parsedJASON = response.body.data[0]
        // Utilizando destruct
        const { symbol, name, price_open, price, day_high, day_low, currency} = parsedJASON
        // Utilizando es6
        const data = { symbol, name, price_open, price, day_high, day_low, currency}
        return callback(data)
    })
}

module.exports = cotacao

