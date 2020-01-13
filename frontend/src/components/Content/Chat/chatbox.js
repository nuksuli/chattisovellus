import React, { useState } from 'react';
import "./chatbox.css"


const Chatbox = () => {
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])
    const [mesNum, setMesNum] = useState(0)

    const handleChange = (event) => {
        setMessage(event.target.value)
    }

    const addMessage = (event) => {
        const date = Date()
        const newMessage = {
            message: message,
            date: date.slice(0, 24),
            id: mesNum
        }
        setMesNum(mesNum + 1)
        event.preventDefault()
        setMessages(messages.concat(newMessage))
        setMessage('')
    }
    const messagesToShow = messages.map(m => <p key={m.id}>{m.date}: {m.message}</p>)

    return (
        <form onSubmit={addMessage} className="chatbox">
            {messagesToShow}
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