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
            <div className='portfolio-card'>
                <div id='portfolio-card-bg1' className='portfolio-card-bg'></div>
                <p className='portfolio-card-title'>text</p>
                <p className='portfolio-card-date'>date</p>
                <p className='portfolio-card-language'>Language</p>
            </div>
            <div className='portfolio-card'>
                <div id='portfolio-card-bg2' className='portfolio-card-bg'></div>
                <p className='portfolio-card-title'>text</p>
                <p className='portfolio-card-date'>date</p>
                <p className='portfolio-card-language'>Language</p>
            </div>
            <div className='portfolio-card'>
                <div id='portfolio-card-bg3' className='portfolio-card-bg'></div>
                <p className='portfolio-card-title'>text</p>
                <p className='portfolio-card-date'>date</p>
                <p className='portfolio-card-language'>Language</p>
            </div>
        </div>
    </div>

  )
}
