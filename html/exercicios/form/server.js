const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3003

app.use(bodyParser.urlencoded('body-parser'))
app.get('/', (req, res) => res.send('Hello World!'))

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    console.log('Parabens')
})




app.listen(port, () => console.log(`Example app listening on port port!`))