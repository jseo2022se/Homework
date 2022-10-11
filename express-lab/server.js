const express = require('express')

const app = express()

app.get('/greeting', (req, res) => {
    res.send('<h1>Hello, stranger</h1>')
    // res.send("What's up " + req.params.name)
})

app.get('/greeting/:name', (req, res) => {
    // res.send('<h1>Hello, stranger</h1>')
    res.send("What's up " + req.params.name)
})

///////////////////////////////////////////////

app.get('/tip/:total/:tipPercentage', (req, res) => {
    
    const tip = req.params.total * (req.params.tipPercentage / 100)
    console.log(tip , ' total Tip')
    res.send(`Your tip would be: ${tip}`)
})

///////////////////////////////////////////////

const magicBall = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely",
"You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", 
"Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", 
"Concentrate and ask again","Don't count on it", "My reply is no", 
"My sources say no","Outlook not so good", "Very doubtful"]

// Will%20I%20Be%A%20Millionaire

app.get('/magic/:question', (req, res) => {
    
    let random = Math.floor(Math.random() * magicBall.length)

    res.send(`<h2>${req.params.question}</h2>` + ' ' + `<h1>${magicBall[random]}</h1>`)

})

app.listen(3000, () => {
    console.log('Listening in on port 3000...')
})