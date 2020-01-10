import React from 'react';
import "./content.css"
import Home from "./Home/home.js"
import Chat from "./Chat/chat.js"

const Content = ({ url }) => {
    const place = url.slice(22);
    if (place === "home") {
        return (
            <div>

                <Home />
            </div>
        )
    }
    else {
        return (
            <div>
                <Chat />
            </div>
        )
    }
}

export default Content;