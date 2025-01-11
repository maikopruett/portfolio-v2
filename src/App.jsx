import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import * as reactSpring from '@react-spring/three'
import './App.css'

function App() {
  return (
    <>
      <div className='app-bg'>
        <ShaderGradientCanvas
          style={{
            position: 'absolute',
            top: 0,
          }}
        >
          <ShaderGradient
            control='query'
            urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&brightness=0.8&cAzimuthAngle=270&cDistance=0.5&cPolarAngle=180&cameraZoom=15.1&color1=%2373bfc4&color2=%23ff810a&color3=%238da0ce&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1&positionX=-0.1&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.4&rotationX=0&rotationY=130&rotationZ=70&shader=defaults&type=sphere&uAmplitude=3.2&uDensity=0.8&uFrequency=5.5&uSpeed=0.3&uStrength=0.3&uTime=0&wireframe=false'
          />
        </ShaderGradientCanvas>
      </div>
      <div className='app-info'>
        <div className='app-socials'>
          <a target='_blank' href="https://github.com/maikopruett">Github</a>
          <a target='_blank' href="https://www.instagram.com/maikopruett/">Insta</a>
          <a target='_blank' href="www.linkedin.com/in/maikopruett">Linkedin</a>
        </div>
        <p id='app-name'>Maiko Pruett</p>
        <p id='app-location'>Junior Software Engineer · Lebanon, OR</p>
      </div>
    </>
  )
}

export default App