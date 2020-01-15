import React, { useState, useEffect } from 'react';
import "./chatbox.css"
import messageService from './Services/chatservice.js'


const Chatbox = () => {
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])

    const handleChange = (event) => {
        setMessage(event.target.value)
    }


    useEffect(() => {
        messageService
            .getAll()
            .then(initialMessages => setMessages(m => m.concat(initialMessages)))
    }, [])

    const addMessage = (event) => {
        event.preventDefault()
        messageService
            .post({ mes: message })
            .then(res => setMessages(res))
        setMessage('')
    }
    const MessagesToShow = () => {
        return (
            messages.map((m, i) => <p key={i}>{m.time} {m.text}</p>)
        )
    }

    return (
        <form onSubmit={addMessage} className="chatbox">
            <MessagesToShow />
            <div>
                <button className="btn-holder" type="submit">lähetä viesti:</button>
            </div>
            <div>
                <input
                    className="inbox-holder"
                    onChange={handleChange}
                    value={message}
                />
            </div>
        </form>
    )
}

export default Chatbox;