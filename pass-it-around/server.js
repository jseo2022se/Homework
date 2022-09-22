
const express = require('express')

const app = express()
let sentence = 'take one down, pass it around'
app.get('/', (req, res) => {
    
    
    res.send('99 Bottles of beer on the wall' + ' ' +  `<a href="http://localhost:3000/98">${sentence}</a>`)

})


app.get('/:number_of_bottles', (req, res) => {
    let original = req.params.number_of_bottles
    let amount = original - 1
    if (original != 0) {
        res.send(`${original} Bottles of beer on the wall.` +
         ` <a href="http://localhost:3000/${amount}">${sentence}`)
    } else {
        res.send('<a href="http://localhost:3000/">home</a>')
    }
    
})

app.listen(3000, () => {
    console.log('Listening in on port 3000 for bottles of beer...')
})