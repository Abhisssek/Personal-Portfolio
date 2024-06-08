import '../App.css'
import React from 'react'
import {Link} from 'react-router-dom'


export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
             <div className="main-nav">
                <div className="brand-logo">
                    <img src="../img/brandimg.png" alt="" />
                </div>
                <div className="nav-items">
                    <ul>
                        <Link to="/" className='nav-links'>Home</Link>
                        <Link to="/about" className='nav-links'>About</Link>
                        <Link to="/portfolio" className='nav-links'>Portfolio</Link>
                        <Link to="/blog" className='nav-links'>Blog</Link>
                        <Link to="/services" className='nav-links'>Services</Link>
                    </ul>
                    <div className="nav-btn ">
                    <Link to="/contact"><button className='secondary-btn'>Contact</button></Link>
                     </div>
                </div>
                
             </div>
        </div>
    </div>
  )
}
