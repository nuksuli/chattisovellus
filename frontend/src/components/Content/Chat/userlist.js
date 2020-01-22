import React from 'react'
import './userlist.css'


const Userlist = ({ users }) => {
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