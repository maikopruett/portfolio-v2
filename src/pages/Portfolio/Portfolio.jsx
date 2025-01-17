import React from 'react'
import './Portfolio.css'
import { NavLink } from 'react-router-dom'

export default function Portfolio() {
  return (
    <div className='portfolio-container'>
        <h1 id='portfolio-header'>Portfolio Cards</h1>
        <NavLink to={'/'}>
            <button id='portfolio-back-btn'><img src="/arrow_back.svg" alt="" />Back</button>
        </NavLink>
        <div className='portfolio-wrapper'>
            <a target='_blank' href="https://github.com/maikopruett/snappify">
                <div className='portfolio-card'>
                    <div id='portfolio-card-bg1' className='portfolio-card-bg'></div>
                    <p className='portfolio-card-title'>Snappify</p>
                    <p className='portfolio-card-date'>Tue Jan 2 2025</p>
                    <div className='portfolio-card-languages'>
                        <p className='portfolio-card-language'>React Js</p>
                        <p className='portfolio-card-language'>Calendly</p>
                    </div>
                </div>
            </a>
            <a target='_blank' href="https://github.com/maikopruett/portfolio-v2">
                <div className='portfolio-card'>
                    <div id='portfolio-card-bg2' className='portfolio-card-bg'></div>
                    <p className='portfolio-card-title'>Portfolio</p>
                    <p className='portfolio-card-date'>Fri Jan 10 2025</p>
                    <div className='portfolio-card-languages'>
                        <p className='portfolio-card-language'>React Js</p>
                    </div>
                </div>
            </a>
            <a target='_blank' href="https://github.com/maikopruett/osudev-club">
                <div className='portfolio-card'>
                    <div id='portfolio-card-bg3' className='portfolio-card-bg'></div>
                    <p className='portfolio-card-title'>OSU Dev Club</p>
                    <p className='portfolio-card-date'>Mon Dec 20 2024</p>
                    <div className='portfolio-card-languages'>
                        <p className='portfolio-card-language'>React Js</p>
                        <p className='portfolio-card-language'>Email Js</p>
                    </div>
                </div>
            </a>
        </div>
    </div>

  )
}
