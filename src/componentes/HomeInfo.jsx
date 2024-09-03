import { render } from '@react-three/fiber'
import React from 'react'
import { Link } from 'react-router-dom'
import{arrow} from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
  <div className='info-box'  >
    <p className='font-medium sm:text-xl text-center '>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn' >
    {btnText}
    <img src={arrow} alt="" className='w-4 h-4 object-contain' />
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx5 ' >
      Hi, I am <span className='font-semibold'> Gonzalo! </span>👋
      <br />
      A Sofware Engineer from Argentina

    </h1>
    
  ),
  2: (
    <InfoBox
      text="tengo que pensar en algoq ue poner aca pero no se me ocurre nada"
      link={'/about'}
      btnText={"Learn more"}
    />
  ),
  3: (
    <InfoBox
      text="tengo que pensar en algoq ue poner aca pero no se me ocurre nada"
      link={'/projects'}
      btnText={"Learn more"}
    />
  ),
  4: (
    <InfoBox
      text="tengo que pensar en algoq ue poner aca pero no se me ocurre nada"
      link={'/contact'}
      btnText={"Learn more"}
    />
  )
}

export const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
  
}
