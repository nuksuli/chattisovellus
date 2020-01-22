import React, { useState } from 'react'
import Userlist from './userlist.js'
import "./chat.css"
import Chatbox from './chatbox.js'
import Login from './login.js'

const Chat = () => {
    const [connection, setConnection] = useState(false)
    const [users, setUsers] = useState([])
    if (connection) {
        return (
            <div className="chat">
                <Userlist users={users} />
                <Chatbox />
            </div>
        )
    }
    else {
        return (
            <div className="container">
                <Userlist users={users} />
                <Login
                    users={users}
                    setUsers={setUsers}
                    connection={setConnection}
                />
            </div>
        )
    }
}

export default Chat;