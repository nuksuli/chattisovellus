import React, { useState } from 'react'
import Userlist from './userlist.js'
import "./chat.css"
import Chatbox from './chatbox.js'
import Login from './login.js'

const Chat = () => {
    const [connection, setConnection] = useState(false)
    if (connection) {
        return (
            <div className="chat">
                <Userlist />
                <Chatbox />
            </div>
        )
    }
    else {
        return (
            <div className="container">
                <Userlist />
                <Login
                    connection={setConnection}
                />
            </div>
        )
    }
}

export default Chat;