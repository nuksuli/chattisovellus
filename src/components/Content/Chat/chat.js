import React from 'react'
import Userlist from './userlist.js'
import "./chat.css"
import Chatbox from './chatbox.js'

const Chat = () => {
    return (
        <div className="chat">
            <Userlist />
            <Chatbox />
        </div>
    )
}

export default Chat;