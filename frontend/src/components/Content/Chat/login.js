import React from 'react'
import { useState } from 'react'

const Login = ({ connection, setUsers }) => {
    const [user, setUser] = useState("")
    const io = require('socket.io-client')
    const socket = io('localhost:3001')
    socket.on('connection', () => {
    })
    socket.on('users', (data) => {
        console.log({ data })
        setUsers(data)
    })
    const makeConnection = (event) => {
        event.preventDefault()
        socket.emit('user', (user))
        console.log(user)
        setUser("")
        connection(true)
    }
    const handleChange = (event) => {
        setUser(event.target.value)
        console.log(user)
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