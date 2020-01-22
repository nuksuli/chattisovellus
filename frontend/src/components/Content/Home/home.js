import React from 'react'
import github from "./github.png"
import "./home.css"

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to my home page</h1>
            <a href="https://github.com/nuksuli" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="Vodka" />
            </a>
        </div>
    )
}

export default Home;