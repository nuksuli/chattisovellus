import React, { useState } from 'react'
import './userlist.css'


const Userlist = () => {
    const [users, setUsers] = useState([])
    const html = users.map(u =>
        <p key={u}>{u}</p>
    )
    return (
        <div className="userlist">
            <h2>Käyttäjät</h2>
            {html}
        </div>
    )
}

export default Userlist;