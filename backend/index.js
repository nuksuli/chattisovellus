const express = require('express')
const cors = require('cors')
const app = express()
const socket = require('socket.io')
const PORT = 3001
var server = app.listen(PORT, () => {
    console.log("server up!")
})

messages = []
users = []
app.use(express.static('public'))
app.use(cors())
const userNames = users.map(u => u.name)


//socket
const io = socket(server)
io.sockets.on('connection', (socket) => {
    socket.on('user', (user) => {
        const newUser = {
            name: user
        }
        users = users.concat(newUser)
        console.log(userNames)
        socket.on('disconnect', () => {
            users = users.filter(u => u.name !== user)
            io.emit('users', (users))
            console.log("disconnect")
        })
    })
    socket.emit('users', userNames)

})


//express
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/api/messages', (req, res) => {
    res.json(messages)
})

app.get('/api/users', (req, res) => {
    res.json(userNames)
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