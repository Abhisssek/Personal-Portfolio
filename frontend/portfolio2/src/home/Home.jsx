import React from 'react'
import { Navbar } from '../components/Navbar'
import { About } from '../components/about/About'
import { Process } from '../components/Process'
import { Portfolio } from '../components/Portfolio'
import { Blog } from '../components/Blog'
import { Services } from '../components/Services'
import { Hero } from '../components/Hero'
import { Experience } from '../components/Experience'
import { Work } from '../components/Work'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
// import '../App.css'


export const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Experience/>
        <Work/>
        <Portfolio full={false} isHome={true} half={true}/>
        <About full={false} half={true}/>
        <Contact full={false}/>
        <Footer/>
    </div>
  )
}
