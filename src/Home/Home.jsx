import React from 'react'
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Experiences from "../sections/Experiences";
import Testimonial from "../sections/Testimonial";
import Contact from "../sections/Contact";



const Home = () => {
    return (
        <div className='container mx-auto max-w-7xl'>
            <Hero />
            <About />
            <Projects />
            <Experiences />
            <Testimonial />
            <Contact />
        </div>
    )
}

export default Home
