import React from 'react'
import './userlist.css'


const Userlist = ({ users }) => {
    const html = users.map((u, i) =>
        <p key={i}>{u.name}</p>
    )
    return (
        <div className="userlist">
            <h2>Käyttäjät</h2>
            {html}
        </div>
    )
}

export default Userlist;