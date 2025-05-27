import React from 'react'
import heroImg from './assets/hero.svg'

const Hero = () => {
    return (
        <section className='hero'>
            <div className="hero-center">
                <div className="hero-title">
                    <h1>React Frontend Projects</h1>
                    <p>
                        I'm a React developer passionate about crafting modern and responsive web applications. Explore my projects below to see how I leverage various React components, state management techniques, and API integrations to create engaging user experiences.

                    </p>

                </div>
                <div className="img-container">
                    <img src={heroImg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero
