const express = require('express')
const cors = require('cors')
const app = express()
const socket = require('socket.io')
const PORT = 3001
var server = app.listen(PORT, () => {
    console.log("server up!")
})

messages = []
app.use(express.static('public'))
app.use(cors())



//socket
const io = socket(server)
io.on('connection', () => {
    console.log("connection!")
})


//express
const bodyParser = require('body-parser')
app.use(bodyParser.json())

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