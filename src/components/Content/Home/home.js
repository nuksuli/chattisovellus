import React from 'react'
import vodka from "./vodka.png"
import "./home.css"

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to my home page</h1>
            <a href="https://alko.fi" target="_blank">
                <img src={vodka} />
            </a>
        </div>
    )
}

export default Home;