import React from 'react'
import vodka from "./vodka.png"
import "./home.css"

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to my home page</h1>
            <a href="https://alko.fi" target="_blank" rel="noopener noreferrer">
                <img src={vodka} alt="Vodka" />
            </a>
        </div>
    )
}

export default Home;