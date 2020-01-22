import React from 'react'
import { useState } from 'react'

const Login = ({ connection }) => {
    const [user, setUser] = useState("")
    const makeConnection = (event) => {
        event.preventDefault()
        const io = require('socket.io-client')
        const socket = io('localhost:3001')
        socket.on('connection', () => {
            console.log('connect!')
        })
        setUser("")
        connection(true)
    }
    const handleChange = (event) => {
        setUser(event.target.value)
    }
    return (
        < form className="login" onSubmit={makeConnection} >
            <div>
                <input value={user} onChange={handleChange} />
            </div>
            <div>
                <button type="submit">Anna nimesi</button>
            </div>
        </form >
    )
}

export default Login