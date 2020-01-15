const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

let messages = [
    {
        text: "moikka",
        time: new Date(),
    },
    {
        text: "sadasda0",
        time: new Date(),
    }
]
app.use(cors())
app.use(express.static('build'))
app.use(bodyParser.json())


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})

app.get('/api/messages', (req, res) => {
    res.json(messages)
})

app.post('/api/messages', (req, res) => {
    const body = req.body
    const time = new Date()
    const newMessage = {
        text: body.mes,
        time: time,
    }
    messages = messages.concat(newMessage)
    res.send(messages)
})