import React from 'react'
import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="container">
            <div className="hero-section">
                <div className="hero-text">
                    <h1>Hello, I'm <br /> <span> Abhisek</span> Pattanayak.</h1>
                    <h3>I'm a Freelance UI/UX Designer and Developer based in London, England. <br /> I strives to build immersive and beautiful web applications through <br />carefully crafted code and user-centric design.</h3>
                    <Link to="/contact"><button className='secondary-btn hero-btn'>Say Hello!</button></Link>

                    <div className="hero-cards">
                        <div className="h-card">
                            <h1>15 Y.</h1>
                            <h3>Experience</h3>
                        </div>
                        <div className="h-card">
                            <h1>250+</h1>
                            <h3>Project Completed</h3>
                        </div>
                        <div className="h-card">
                            <h1>58</h1>
                            <h3>Happy Client</h3>
                        </div>
                    </div>
                </div>
                <div className="hero-img">
                    <img src="../img/mainlogo.png" alt="" />
                </div>
            </div>
        </div>

    </div>
  )
}
