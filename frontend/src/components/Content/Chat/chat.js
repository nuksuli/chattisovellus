import React from 'react'
import Userlist from './userlist.js'
import "./chat.css"
import Chatbox from './chatbox.js'

const Chat = () => {
    console.log('1')
    const io = require('socket.io-client')
    const socket = io('http//localhost:3001')
    console.log('2')
    socket.on('connection', () => {
        console.log('connect!')
    })

    return (
        <div className="chat">
            <Userlist />
            <Chatbox />
        </div>
    )
}

export default Chat;