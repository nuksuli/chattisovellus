import React from 'react'
import './userlist.css'

const users = ["mikko", "matti", "pena"]
const html = users.map(u =>
    <p>{u}</p>
)

const Userlist = () => {
    return (
        <div className="userlist">
            <h2>Käyttäjät</h2>
            {html}
        </div>
    )
}

export default Userlist;