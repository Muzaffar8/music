import React from 'react'
import '../App.css'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/covers.mp4' autoPlay loop muted/>
            <h1>SHARE MUSIC</h1>
            <p>ENJOY MUSIC</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle='btn--outline'
                        buttonSize='btn--large'>
                    LET'S GO
                </Button>
                <Button className="btns" buttonStyle='btn--primary'
                
                        buttonSize='btn--large'>
                        <Link to='/instructions' className='nav-links'></Link>
                            
                    SEE INSTRUCTIONS
                    <i className="fa fa-eye"></i>
                </Button>
            </div>


        </div>
    )
}

export default HeroSection
