import React from 'react'
import './Main.css'

export default function Main() {
  return (
    <div className='app-info'>
        <div className='app-socials'>
            <a target='_blank' href="https://github.com/maikopruett">Github</a>
            <a target='_blank' href="https://www.instagram.com/maikopruett/">Insta</a>
            <a target='_blank' href="https://www.linkedin.com/in/maikopruett">Linkedin</a>
        </div>
        <div className='app-cta'>
            <p id='app-name'>Maiko Pruett</p>
            <button id='app-portfolio-btn'>Portfolio <img src="/arrow_forward.svg" alt="" /></button>
        </div>
        <p id='app-location'>Junior Software Engineer · Lebanon, OR</p>
    </div>
  )
}
