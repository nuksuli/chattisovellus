import React, { useState } from 'react';
import "./chatbox.css"


const Chatbox = () => {
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])

    const handleChange = (event) => {
        setMessage(event.target.value)
    }
    const addMessage = () => {
        const newMessage = {
        }
        setMessages(messages.concat())
    }

    return (
        <div className="chatbox">
            <button className="btn-holder">lähetä viesti:
            </button>
            <input className="inbox-holder" onChange={handleChange}></input>
        </div>
    )
}

export default Chatbox;